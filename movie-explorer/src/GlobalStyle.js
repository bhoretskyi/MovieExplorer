import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
:root {
    --bg-color:  #191919;
    --text-color: #FFFFFF;
    padding: 0;
}
[data-theme = 'light'] {
     --bg-color:rgb(214, 203, 203);
    --text-color: #191919;
}
body {
    background-color: var(--bg-color);
    color: var(--text-color);
    /* max-width: 1920px; */
    font-family: "Ubuntu", sans-serif;
    margin: 0 auto;
}
a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}
h1, h2, h3, p {
    margin: 0;
    padding: 0;
}
`