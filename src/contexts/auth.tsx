import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface User {
  id: string;
  avatar: string;
  nome: string;
  email: string;
}

interface SignInCredencials {
  email: string;
  senha: string;
}

interface AuthState {
  user: User;
  token: string;
}

interface AuthContextData {
  user: User;
  signIn(credencials: SignInCredencials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@system:token');
    const user = localStorage.getItem('@system:user');

    if (token && user) {
      api.defaults.headers.authorization = `${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, senha }) => {
    const response = await api.post('login', {
      email,
      senha,
    });

    const { user, token } = response.data;

    localStorage.setItem('@system:token', token);
    localStorage.setItem('@system:user', JSON.stringify(user));

    api.defaults.headers.authorization = `${token}`;

    setData({
      user,
      token,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@system:token');
    localStorage.removeItem('@system:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@system:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
