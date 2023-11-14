import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`

html, body, div, span, applet, object,
h1, h2, h3, h4, h5, h6, p, a, del, img, 
b, u, i, ol, ul, li, form, label,article, 
aside, figure, footer, header, 
nav, section{

    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    text-decoration: none;
    
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

button , a , select{
    cursor: pointer;
}

input::placeholder{
    color: rgb(185, 185, 187);
}


html {
    scroll-behavior: smooth;
}

* {
    font-family: 'Inter', sans-serif;
}

`;
