import { ThemeProvider } from 'styled-components';

import { Button, Flex, Image } from './components/Ui.styled';
import { Card, CardBody, CardPlan, CardTitle } from './components/Card.styled';
import {
  Title,
  Text,
  SubTitle,
  ActionText
} from './components/Typograph.styled';
import GlobalStyle from './components/GlobalStyle';

import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Card>
        <Image
          src='./images/illustration-hero.svg'
          alt='hero'
          className='card-image'
        />

        <CardBody>
          <CardTitle>
            <Title>Order Summary</Title>
            <Text>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </Text>
          </CardTitle>

          <CardPlan>
            <Flex>
              <Image
                className='plan-image'
                src='./images/icon-music.svg'
                alt='hero'
              />
              <Flex className='f-column'>
                <SubTitle>Annual Plan</SubTitle>
                <Text>$59.99/year</Text>
              </Flex>
            </Flex>
            <ActionText>Change</ActionText>
          </CardPlan>

          <div>
            <Button className='btn-primary'>Proceed to Payment</Button>
            <Button className='btn-secondary'>Cancel Order</Button>
          </div>
        </CardBody>
      </Card>
      <div class='attribution'>
        Challenge by
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by
        <a
          href='https://github.dev/zidanomar/'
          target='_blank'
          rel='noreferrer'
        >
          Zidan Omar Hamid
        </a>
        .
      </div>
    </ThemeProvider>
  );
}

export default App;
