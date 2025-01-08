import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`

  ${reset}

  html, body, #root {
        height: 100%; 
        width: 100%;
        margin: 0;
        padding: 0;

        a{text-decoration:none; color:#333;}
    }

    * {
        box-sizing: border-box;
    
    }
        
        li { list-style:none }
        button { border:none; } 
`
export default GlobalStyle;