import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.secondary};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.font.bold};
  color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &.btn-primary {
    margin-bottom: 1rem;
    box-shadow: 0 0.3rem 1rem hsla(245, 75%, 52%, 0.5);
    &:hover {
      opacity: 0.8;
      box-shadow: 0 0.1rem 0.5rem hsla(245, 75%, 52%, 0.5);
    }
  }

  &.btn-secondary {
    background-color: transparent;
    color: ${({ theme }) => theme.color.darkBlue};
    &:hover {
      color: ${({ theme }) => theme.color.desaturatedBlue};
    }
  }
`;

export const Image = styled.img`
  width: 100%;

  &.card-image {
    border-radius: 1rem 1rem 0 0;
  }

  &.plan-image {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;

    @media (max-width: 36rem) {
      margin-bottom: 1rem;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &.f-column {
    flex-direction: column;
    align-items: flex-start;
  }
`;
