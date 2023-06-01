import { createGlobalStyle } from 'styled-components'
import { Major_Mono_Display, Red_Hat_Mono } from 'next/font/google';

const BrandFont = Major_Mono_Display({ weight: '400', subsets: ['latin']});
const BaseFont = Red_Hat_Mono({weight: '300', subsets: ['latin']});

const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.font.primary};
    padding: 0;
    margin: 0;
    ${BaseFont.style};

    position: absolute;
    top: 0;
    left: 0;

    background: #111;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4 {
    ${BrandFont.style};
  }

  * {
    box-sizing: border-box;
  }

    /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #d6d6d6 #2b2b2b;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #2b2b2b;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #d6d6d6;
    border-radius: 10px;
    border: 3px solid #2b2b2b;
  }

`

export default GlobalStyle
