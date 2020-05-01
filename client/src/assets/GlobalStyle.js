import { createGlobalStyle } from 'styled-components'
import { themeGet } from '@kogaio/utils'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    scroll-behavior: smooth;
  }
  
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: ${themeGet('fonts.primary')};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
    background-color: ${themeGet('colors.bodyBg')};
    color: ${themeGet('colors.text')};
  }

  body.no-scroll {
    overflow: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  * {
    box-sizing: border-box;
  }

  ${themeGet('root')};
`
