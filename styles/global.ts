import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    body {
        background: #D9805F;
    }

    * {
        margin: 0;
        padding: 0;
        color: #FFFFFF;
        overflow: overlay;
        text-align: center;
        scrollbar-width: thin;
        box-sizing: border-box;
        scroll-behavior: smooth;
        transition-duration: 0.2s;
        font-family: 'Roboto', sans-serif;
        transition-timing-function: linear;
        scrollbar-color: #FFFFFF rgba(0, 0, 0, 0.4);
        
        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.4);
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