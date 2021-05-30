import styled, { keyframes } from 'styled-components';
import Card from '../../Components/Card';

const showUp = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  color: var(--text);
`;
export const LoginWrapper = styled(Card)`
  padding: 40px 20px;
  width: 325px;
  animation: ${showUp} 1s;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-bottom: 6px;
  }

  > p {
    margin-bottom: 15px;
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  > input {
    padding: 5px 3px;
    margin-bottom: 20px;
    height: 44px;
    width: 100%;
    border-radius: 5px;
    color: var(--text);
    text-align: center;

    &:focus {
      border: 1px solid var(--blue-dark);
    }
  }

  > button {
    width: 200px;
    height: 44px;
  }
`;
