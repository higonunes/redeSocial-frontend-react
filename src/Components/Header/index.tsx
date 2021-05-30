import React from 'react';
import { FaHome, FaPowerOff } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

import {
  Container,
  ButtonsWrapper,
  HomeButton,
  PerfilWrapper,
  ContentWrapper,
} from './styles';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <ContentWrapper>
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
        <ButtonsWrapper>
          <HomeButton>
            <Link to="/">
              <FaHome size="20px" title="Home" />
            </Link>
          </HomeButton>
          <PerfilWrapper>
            <img
              src={
                user.avatar ||
                'https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477097-avatar_78580.png'
              }
              alt={
                user.avatar ||
                'https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477097-avatar_78580.png'
              }
            />
            <p>{user.nome}</p>

            <button onClick={signOut}>
              <FaPowerOff size="20px" title="Logoff" />
            </button>
          </PerfilWrapper>
        </ButtonsWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Header;
