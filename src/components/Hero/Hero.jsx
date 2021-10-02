import React from 'react';
import { Button } from '../UI/Button';
import { Container } from '../UI/Container';
import { Flex } from '../UI/Flex';
import {
  ContentImage,
  ContentWrapper,
  HighlightedText,
  ImageWrapper,
  StyledHero,
  TitleText
} from './Hero.styled';

function Hero() {
  return (
    <Container>
      <StyledHero>
        <ContentWrapper>
          <div style={{ flexBasis: '60%' }}>
            <Flex style={{ marginBottom: '1rem' }}>
              <HighlightedText>New</HighlightedText>
              <TitleText>Monograph Dashboard</TitleText>
            </Flex>
            <h1>Powerful insights into your team</h1>
            <h4>Project planning and time tracking for agile teams</h4>
            <Flex>
              <Button>Schedule a demo</Button>
              <TitleText>to see a preview</TitleText>
            </Flex>
          </div>
          <ImageWrapper>
            <ContentImage
              src='./images/illustration-devices.svg'
              alt='devices'
            />
          </ImageWrapper>
        </ContentWrapper>
      </StyledHero>
    </Container>
  );
}

export default Hero;
