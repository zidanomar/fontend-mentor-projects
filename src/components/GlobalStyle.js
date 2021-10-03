import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap');

   *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      width: 100vw;
      font: ${({ theme }) =>
        theme.font.regular} 16px 'Red Hat Display', sans-serif;
         background-color: ${({ theme }) => theme.color.primary};
      background-image:url('/images/pattern-background-desktop.svg');
      background-repeat: no-repeat;
      background-size: cover;

      @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
         background-image:url('/images/pattern-background-mobile.svg');
      }
   }
   
`;

export default GlobalStyle;
