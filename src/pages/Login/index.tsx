import React, { useState } from 'react';

import { Container, LoginWrapper, Logo, Form } from './styles';
import { Button } from '../../Components/Button';
import { useAuth } from '../../contexts/auth';
import { toast } from 'react-toastify';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await signIn({ email, senha }).catch((error) => {
      if (error.response?.status === 401) {
        toast.warn('Erro nas credenciais');
      }
    });
  }
  return (
    <Container>
      <LoginWrapper>
        <Logo>
          <h1>PrimeSystem</h1>
          <p>Sistema de gerenciamento de licitações</p>
        </Logo>
        <Form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Entre com o seu usuário"
            required
          />
          <input
            type="password"
            value={senha}
            onChange={({ target }) => setSenha(target.value)}
            placeholder="Entre com a sua senha"
            required
          />
          <Button type="submit">Entrar</Button>
        </Form>
      </LoginWrapper>
    </Container>
  );
};

export default Login;
