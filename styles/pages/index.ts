import styled from 'styled-components'

export const Header = styled.header`
    padding: 1%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;
`

export const Title = styled.h1`
    font-size: 4vw;
    margin: auto;
    background: linear-gradient(to right, #F2AD94, #F28066, #D9805F, #BF7160, #8C4830);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 2s linear infinite;

    @keyframes gradient {
        to {
            background-position: 200% center;
        }
    }
`

export const Footer = styled.footer`
    background-color: #ffffff;
    width: 100%;
    display: flex;
`

export const ListSocialNetworks = styled.ul`
    background-color: #ffffff;
`

export const ItemListSocialNetworks = styled.li`
    display: flex;
    background-color: #ffffff;
`

export const TitleItemListSocialNetworks = styled.span`
    color: #D9805F;
    background-color: #ffffff;
`

export const IconItemListSocialNetworks = styled.svg`
    width: 10%;
    fill: #D9805F;
    background-color: #ffffff;
`