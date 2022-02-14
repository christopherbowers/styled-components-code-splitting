import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes.js'
import { GlobalStyles } from './GlobalStyles'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState('light')


  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
      <Wrapper>
        <h1>Hello World</h1>
        <p>hello agian</p>
        <Button primary onClick={() => themeToggler()}>Change Theme</Button>
      </Wrapper>
    </ThemeProvider>
  )
}


const Wrapper = styled.section`

  font-family: 'Helvetica';

  h1 {
    color: red;
  }

`

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid ${(props) => props.theme.fontColor};
  cursor: pointer;
  transition: .2s;

  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.body};

  &:hover {
    background-color: ${(props) => props.theme.fontColor};
    color: ${(props) => props.theme.body};
  }
`

export default App
