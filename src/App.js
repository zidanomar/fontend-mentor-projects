import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import GlobalStyles from './GlobalStyles';

import './App.css';

const theme = {
  mobile: '375px',
  color: {
    primary: 'hsl(0, 100%, 68%)',
    darkBlue: 'hsl(230, 29%, 20%)',
    darkGrayishBlue: 'hsl(230, 11%, 40%)',
    grayishBlue: 'hsl(231, 7%, 65%)',
    lightBlue: 'hsl(207, 33%, 95%)'
  },
  font: {
    face: `'Barlow Condensed', sans-serif`,
    regular: '400',
    bold: '700'
  },
  media: {
    mobile: '768px',
    desktop: '1440px'
  }
};

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbarOn = () => {
    setIsActive(true);
  };

  const toggleNavbarOff = () => {
    setIsActive(false);
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header
          isActive={isActive}
          onToggleActive={toggleNavbarOn}
          onToggleInactive={toggleNavbarOff}
        />
        <Hero />
        <div className='blue-area'></div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
