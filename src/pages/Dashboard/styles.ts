import styled from 'styled-components';
import Card from '../../Components/Card/index';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const CardWrapper = styled(Card)`
  width: 100%;
  margin: 10px 0;
  padding: 10px;

  > img {
    width: 100%;
    padding: 10px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;

  > p {
    color: var(--text);
    font-weight: 600;
  }

  > img {
    width: 40px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const InfoImage = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ButtonAction = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  pointer-events: ${(props) => (props.disabled ? 'none' : '')};

  > svg {
    margin-right: 3px;
    color: ${(props) => (props.disabled ? 'red' : '')};
    &:hover {
      color: red;
    }
  }
`;

export const ButtonNewPost = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--blue);

  > svg {
    color: #fff;
  }
`;
