import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.color.primary};
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  padding: 1rem;
  border-radius: 0.5rem;
  font-family: ${({ theme }) => theme.font.face};
  font-weight: ${({ theme }) => theme.font.regular};
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
    outline: none;
    border: none;
    transform: scale(0.9);
  }
`;
