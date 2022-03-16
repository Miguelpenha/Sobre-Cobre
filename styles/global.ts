import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-align: center;
        scrollbar-width: thin;
        box-sizing: border-box;
        transition-duration: 0.2s;
        font-family: 'Roboto', sans-serif;
        transition-timing-function: linear;
        color: #FFFFFF;
        background: #D9805F;
        scrollbar-color: #FFFFFF #D9805F;
        
        ::-webkit-scrollbar {
            width: 14px;
        }

        ::-webkit-scrollbar-track {
            background: #D9805F;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 16px;
            background-color: #FFFFFF;
        }
    }

    html, body, body>div:first-child, div#__next, div#__next>div {
        height: 100%;
    }
`