import styled from 'styled-components';

export const Button = styled.button`
  font-weight: bold;
  background: var(--blue);
  max-width: 200px;
  color: var(--white);
  padding: 5px;
  border-radius: 4px;
  transition: background 0.2s;
  &:hover {
    background: var(--blue-dark);
  }
`;

export default Button;
