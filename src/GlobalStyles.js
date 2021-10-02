import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`  
   *, *:before, *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      font-size: 18px;
      font-family: 'Barlow Condensed', sans-serif;
      overflow-x: hidden;
   }

   h1 {
      margin: 0;
      font-size: 90px;
      text-transform: uppercase;
      font-weight: ${({ theme }) => theme.font.bold}
   }

   h4 {
      margin: 0;
      font-size: 20px;
      font-weight: ${({ theme }) => theme.font.regular};
      color: ${({ theme }) => theme.color.grayishBlue};
   }

   @media (max-width: 768px) {
    h1 {
      font-size: 40px;
      font-weight: ${({ theme }) => theme.font.bold}
   }
  }
`;

export default GlobalStyles;
