import styled from 'styled-components';

export const StyledHeader = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  z-index: 100;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.img``;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @keyframes toggleIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes toggleOut {
    0% {
      opacity: 1;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }

  ul {
    display: flex;
    list-style-type: none;

    li {
      a {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: ${({ theme }) => theme.font.bold};
        color: ${({ theme }) => theme.color.darkBlue};
        transition: all 0.2s ease-in-out;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    li:not(:last-child) {
      @media (min-width: 768px) {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: none;
  }

  &.actived {
    display: block;
    position: fixed;
    top: 10rem;
    left: 50%;
    width: 70%;
    text-align: center;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    animation: toggleIn 0.2s ease-in-out;
    z-index: 102;
    & ul {
      flex-direction: column;

      & li {
        @media (max-width: 768px) {
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

export const Divider = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  background-color: hsl(231, 7%, 65%);
  margin: 0 1rem;
  @media (max-width: 768px) {
    width: 90%;
    height: 1px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`;

export const Auth = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.color.grayishBlue};
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;

export const Hamburger = styled.div`
  @media (min-width: ${({ theme }) => theme.media.mobile}) {
    display: none;
  }
`;

export const Modal = styled.div`
  position: fixed;
  displ
  top: 80px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  z-index: 99;
`;
