import { Fragment } from 'react';
import { Container } from '../UI/Container';
import { Flex } from '../UI/Flex';
import {
  StyledHeader,
  Logo,
  Links,
  Hamburger,
  Auth,
  Divider,
  Modal
} from './Header.styled';

function Header({ isActive, onToggleActive, onToggleInactive }) {
  return (
    <Fragment>
      <StyledHeader>
        <Container>
          <Flex style={{ justifyContent: 'space-between' }}>
            <Logo src='./images/logo.svg' />
            <Links className={isActive && 'actived'}>
              <ul>
                <li>
                  <a href='/'>Product</a>
                </li>
                <li>
                  <a href='/'>Features</a>
                </li>
                <li>
                  <a href='/'>Pricing</a>
                </li>
              </ul>
              <Divider></Divider>
              <Auth href='/'>Login</Auth>
            </Links>
            <Hamburger onClick={isActive ? onToggleInactive : onToggleActive}>
              <img
                src={
                  !isActive
                    ? './images/icon-hamburger.svg'
                    : './images/icon-close.svg'
                }
                alt='imageas'
              />
            </Hamburger>
          </Flex>
        </Container>
      </StyledHeader>
      {isActive && <Modal onClick={onToggleInactive} />}
    </Fragment>
  );
}

export default Header;
