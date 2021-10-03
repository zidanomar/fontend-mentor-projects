import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.color.darkBlue};
  margin: 0;
  margin-bottom: 2rem;
`;

export const SubTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.7rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.desaturatedBlue};
  margin: 0;
`;

export const ActionText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.secondary};
  font-weight: ${({ theme }) => theme.font.bold};
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
