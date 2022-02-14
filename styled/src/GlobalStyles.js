import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  body {
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.body};
    text-align: center;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

`
