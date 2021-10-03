import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  max-width: 455px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem hsla(223, 47%, 23%, 0.15);

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    width: 90%;
  }
`;

export const CardBody = styled.div`
  width: 100%;
  padding: 2.8125rem;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.div`
  text-align: center;
`;

export const CardPlan = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5625rem;
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.color.paleBlue};
  border-radius: 0.8rem;
`;
