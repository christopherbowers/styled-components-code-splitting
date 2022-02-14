# 💅 Styled-Components and Code Splitting in React ✂️

## Getting Started

- `fork` and `clone` to your machine
- `cd` into the `styled` directory
- `npm i` to install dependencies
- `npm start` to spin up our app

## Styled-Components Overview

Styled-components provides the following:

- **Automatic critical CSS**: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.
- **No class name collisions**: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.
- **Easier deletion of CSS**: it can be hard to know whether a class name is used somewhere in your codebase. styled-components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.
- **Simple dynamic styling**: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.
- **Painless maintenance**: you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.
- **Automatic vendor prefixing**: write your CSS to the current standard and let styled-components handle the rest.

## Installation

Installing styled-components only takes a single command and you're ready to roll:

`npm i styled-components`

## ThemeProvider

`ThemeProvider` allows us to define styles as a theme and pass them as props to our components.

Create a file `themes.js` in the `src` directory.

We'll create a light theme as our default theme.

```
export const lightTheme = {
  body: '#fff',
  fontColor: '#000',
}
```

You'll notice we are using a JavaScript object so we adhere to the key/value pair convention.

Next we'll define an optional dark theme.

```
export const darkTheme = {
  body: '#000',
  fontColor: '#fff',
}
```

## Global Styles

The ThemeProvider acts like variables through props. This allows us to crate global styles that can change depending on active theme.

To create global styles we need to make a new file

`touch src/GlobalStyles.js`

Open in your code editor and import GlobalStyle from styled-components

`import { createGlobalStyle } from 'styled-components'`

We will define and export the variable GlobalStyles and use back-ticks to hold our CSS definitions.

```
export const GlobalStyles = createGlobalStyle``
```

Inside the back-ticks we will define the body styles using the ThemeProvider props for the text and back ground colors along with a little flex-box for centering.

```
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

```

## Applying Theme and Global Styles

Let's go ahead and apply the theme and global style to our app. Open `App.js` so we can import our theme and global styles.

First we'll import `styled` and `ThemeProvider` from `styled-components` followed by our themes and global styles.

```
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes.js'
import { GlobalStyles } from './GlobalStyles'
```

To apply the styles we need to wrap our app components in the `ThemeProvider`. To apply the GlobalStyles we place `<GlobalStyles />`
above all our imported components so the will inherit the styles.

```
<ThemeProvider>
<GlobalStyles />
  <div>
  <h1>Hello World</h1>
  </div>
</ThemeProvider>
```


## Theme Toggle

Since we have the dark theme we can make a button to toggle the themes.

We'll use useState from React, set the theme state and toggle the state with a button.

First:

`import { useState } from 'react'`

Create a state and set it to light:

`const [theme, setTheme] = useState('light')`

Write a little function to toggle the theme:

```
const themeToggler = () => {
theme === 'light' ? setTheme('dark') : setTheme('light')
}
```

We need to tell our ThemeProvider which theme to use so we'll pass theme props:

`<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>`

Now we can add a button to toggle the theme when clicked:

`<button primary onClick={() => themeToggler()}>Change Theme</button>`

We can click the toggle to swap themes and our app should look like this now:

```
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes.js'


function App() {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
      <div>
        <h1>Hello World</h1>
        <button primary onClick={() => themeToggler()}>Change Theme</button>
      </div>
    </ThemeProvider>
  )
}

export default App
```


## Styling Individual Components

For example we can use re-style our toggle button using styled-components.

Let's define a new variable as a styled button using our theme props to color it.

A little bit about syntax:
- `const Button` is the definition that we will call in the return
- `styled.button` uses the styled-components to render the element which is specified after the `.` to the DOM.
- And lastly the back-ticks will hold out CSS definitions. (I know it's a strange choice for syntax.)


```
  const Button = styled.button`
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
```

And now we need to change our button to the newly defined Button in the return.

```
<Button onClick={() => themeToggler()}>Change Theme</Button>
```


## Code Splitting Overview

### Bundling
When starting with create-react-app your React app will have their files “bundled” using [Webpack](https://webpack.js.org/). Bundling is the process of following imported files and merging them into a single file: a “bundle”. This bundle can then be included on a webpage to load an entire app at once.

### Code Splitting
To avoid winding up with a large bundle It's a good idea to “split” your bundle into multiple bundles. Code-Splitting is the process of creating multiple bundles that can be dynamically loaded at runtime.

Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.


## React.lazy and Suspense

Importing components **before:**

```
import Component from './Component';
```

Importing components **after:**

```
const Component = lazy(() => import('./Component'));
```

Importing lazy and Suspence into `App.js`:

`import { Suspense, lazy } from 'react'`


Let's create a component

```


```


## Resources

[💅 styled-components](https://styled-components.com)

[Code-Splitting](https://reactjs.org/docs/code-splitting.html)

