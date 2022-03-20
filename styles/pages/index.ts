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
    width: 100%;
    display: flex;
    background-color: #ffffff;
`

export const ListSocialNetworks = styled.ul`
    width: fit-content;
`

export const ItemListSocialNetworks = styled.li`
    width: 48%;
    padding: 3%;
    display: flex;
    border-radius: 10px;
    align-items: center;

    :hover {
        background-color: #d1d1d1
    }
`

export const LinkItemListSocialNetworks = styled.a`
    width: 60%;
    display: flex;
    align-items: center;
`

export const TitleItemListSocialNetworks = styled.span`
    color: #D9805F;
    margin-left: 5%;
    white-space: nowrap;
`

export const IconItemListSocialNetworks = styled.svg`
    width: 40%;
    height: auto;
    fill: #D9805F;
    min-width: 40%;
`