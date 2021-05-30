import React from 'react';
import { Container } from './styles';
import Header from '../../Components/Header/index';
import { useAuth } from '../../contexts/auth';

const Template: React.FC = ({ children }) => {
  const { user } = useAuth();
  return (
    <Container>
      {!!user ? <Header /> : null}
      {children}
    </Container>
  );
};
export default Template;
