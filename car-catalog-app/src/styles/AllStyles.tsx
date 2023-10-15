import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
  padding: 0;
  margin: 0;
  border: 0;
}

*, *:before, *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus, :active {
  outline: none;
}

a:focus, a:active {
  outline: none;
}

nav, footer, header, aside {
  display: block;
}

html, body {
  height: 100%;
  width: 100%;
  font-style: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input, button, textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a, a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style-type: none;
}

img {
  vertical-align: top;
}

h1, h2, h3, h4, h5, h6 {
  font-style: inherit;
  font-weight: 400;
}
body{
   font-family: 'Inter', sans-serif;
}
.wrapper{
  background-color: #131313;
}
.main{
  max-width: 1200px;
  margin: 0px auto; 
  text-align: center;
}
.car-item{
  margin-bottom: 50px;
  max-width: 620px;
  margin: 0px auto 20px;
  border: 1px solid gray;
}

.car-info{
  text-align: left;
padding: 20px 25px;
}
`