import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: var(--secondary);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 900px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HomeButton = styled.button`
  background: transparent;

  > a {
    margin: 4px;
    > svg {
      width: 35px;
      color: #393939;
    }
  }
`;

export const PerfilWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 5px;
  }

  > button {
    background: transparent;
    margin-left: 20px;

    > svg {
      color: #393939;

      &:hover {
        color: #5e0b05;
        transition: 1s;
      }
    }
  }
`;
