'use client';

import { createGlobalStyle } from 'styled-components';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });


export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${montserrat}, sans-serif;
    font-size: 1em;
  }
`;