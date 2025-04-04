import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
}

:root {
  --color-main: #fe3e6d;
  --color-dark-main: #d4265a;
  --color-white: #ffffff;
  --color-gray: #6b7076;
  --color-light-gray: #dfdfdf;
  --color-lighter-gray: #f0f4f8;
  --color-error: #ee3636;
  --color-success: #04aa6d;
  --color-black: #3b3b3b;
  --color-blue: #1a93da;
}

body {
  font-family: "Montserrat", sans-serif;
}

* {
  font-family: inherit;
}

`;
