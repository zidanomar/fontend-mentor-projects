import styled from 'styled-components';

export const StyledHero = styled.div`
  margin-top: 6rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  & > div {
    & h1 {
      margin-bottom: 1rem;
      @media (max-width: 768px) {
        margin-bottom: 2rem !important;
      }
    }

    h4 {
      margin-bottom: 1rem;
      @media (max-width: 768px) {
        margin-bottom: 2rem !important;
      }
    }

    & > div {
      @media (max-width: 768px) {
        margin-bottom: 2rem !important;
      }
    }

    & > div > button {
      margin-right: 1rem;
      @media (max-width: 768px) {
        padding: 0.6rem;
      }

      @media (max-width: 375px) {
        margin-bottom: 0.8rem;
      }
    }

    & > div > p {
      @media (max-width: 768px) {
        letter-spacing: 0.2rem;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  @media (min-width: 768px) {
    position: relative;
  }
`;

export const ContentImage = styled.img`
  position: absolute;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 4rem;
    position: relative;
  }
`;

export const HighlightedText = styled.p`
  background-color: ${({ theme }) => theme.color.darkBlue};
  color: #fff;
  padding: 0.3rem 0.6rem;
  border-radius: 0.8rem;
  text-transform: uppercase;
  margin-right: 1rem;
`;

export const TitleText = styled.p`
  letter-spacing: 0.3rem;
  color: ${({ theme }) => theme.color.grayishBlue};
  text-transform: uppercase;
`;
