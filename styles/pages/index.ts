import styled from 'styled-components'

export const Header = styled.header`
    padding: 1%;
    display: flex;
    padding-top: 10%;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
`

export const Title = styled.h1`
    font-size: 45px;
    margin: auto;
    text-transform: uppercase;
    background: linear-gradient(90deg, #A37151 0%, #C8977F 97.49%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 2s linear infinite;
    position: relative;

    @keyframes gradient {
        to {
            background-position: 200% center;
        }
    }

    :after {
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 3px;
        position: absolute;
        transform: scaleX(0);
        background-color: #D9805F;
        transform-origin: bottom right;
        transition: transform 0.35s ease-out;
    }

    :hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

export const SubTitle = styled.span`
    color: #000000;
    margin-top: 10%;
    font-size: 15px;
    white-space: 100px;
    text-transform: uppercase;
    position: relative;
    width: fit-content;

    :after {
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 2.5px;
        position: absolute;
        transform: scaleX(0);
        background-color: #D9805F;
        transform-origin: bottom right;
        transition: transform 0.35s ease-out;
    }

    :hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

export const ContainerCara = styled.div`
    overflow: hidden;
    position: relative;

    :hover {
        video {
            transform:scale(1.1);
        }

        div {
            background: rgba(0, 0, 0, 0.5);
        }
    }
`

export const VideoCara = styled.video`
    width: 100%;
    height: auto;
    vertical-align: middle;
    transition: all 1s ease;
`

export const ContainerCaraOverlay = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
`

export const TextCara = styled.span`
    margin-left: 2%;
    font-size: 2.5vw;
    text-align: left;
    font-weight: bold;
    margin-bottom: 4%;
    align-self: flex-end;
    position: relative;
    width: 90%;

    @media screen and (max-width: 600px) {
        font-size: 3vw;
    }

    @media screen and (max-width: 450px) {
        font-size: 3.5vw;
    }

    :after {
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 3px;
        position: absolute;
        transform: scaleX(0);
        background-color: #D9805F;
        transform-origin: bottom right;
        transition: transform 0.35s ease-out;
    }

    :hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

export const ContainerMate = styled.div`
    padding-top: 2%;
    background-color: #ffffff;
`

export const TextMate = styled.span`
    width: 90%;
    margin: auto;
    color: #D9805F;
    display: block;
    text-align: left;
    font-size: 2.9vw;
    margin-bottom: 2%;
    position: relative;

    :after {
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 3px;
        position: absolute;
        transform: scaleX(0);
        background-color: #D9805F;
        transform-origin: bottom right;
        transition: transform 0.35s ease-out;
    }

    :hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

export const ContainerImageMate = styled.div`
    overflow: hidden;
    position: relative;
`

export const ImageMate = styled.img`
    width: 100%;
    margin-top: 1%;
    transform: scale(1.05);

    :hover {
        transform: scale(1.06);
        filter: brightness(75%);
    }
`

export const ContainerMol = styled.div`
    padding-top: 2%;
    background-color: #ffffff;
`

export const TextMol = styled.span`
    width: 90%;
    margin: auto;
    color: #D9805F;
    display: block;
    text-align: left;
    font-size: 2.9vw;
    margin-bottom: 2%;
    position: relative;

    :after {
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 3px;
        position: absolute;
        transform: scaleX(0);
        background-color: #D9805F;
        transform-origin: bottom right;
        transition: transform 0.35s ease-out;
    }

    :hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

export const ContainerImageMol = styled.div`
    overflow: hidden;
    position: relative;
`

export const VideoMol = styled.video`
    width: 100%;
    margin-top: 1%;
    transform: scale(1.05);

    :hover {
        transform: scale(1.1);
        filter: brightness(75%);
    }
`

export const ContainerFerra = styled.div`
    overflow: hidden;
    position: relative;

    :hover {
        img {
            transform:scale(1.1);
        }

        div {
            background: rgba(0, 0, 0, 0.5);
        }
    }
`

export const ImageFerra = styled.img`
    width: 100%;
    height: auto;
    vertical-align: middle;
    transition: all 1s ease;
`

export const ContainerFerraOverlay = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
`

export const TextFerra = styled.span`
    margin-left: 2%;
    font-size: 2.5vw;
    text-align: left;
    font-weight: bold;
    margin-bottom: 4%;
    align-self: flex-end;
    position: relative;
    width: 95%;

    @media screen and (max-width: 600px) {
        font-size: 3vw;
    }

    @media screen and (max-width: 450px) {
        font-size: 3.5vw;
    }

    :after {
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 3px;
        position: absolute;
        transform: scaleX(0);
        background-color: #D9805F;
        transform-origin: bottom right;
        transition: transform 0.35s ease-out;
    }

    :hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

export const ContainerPropi = styled.div`
    display: flex;
    background-color: #ffffff;
`

export const ContainerTextPropi = styled.div`
    width: 50%;
    padding-top: 2%;
`

export const TitlePropi = styled.h1`
    color: #D9805F;
    margin-left: 2%;
    font-size: 2.5vw;
    text-align: left;
    margin-bottom: 2%;
    position: relative;
    width: fit-content;

    :after {
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 3px;
        position: absolute;
        transform: scaleX(0);
        background-color: #D9805F;
        transform-origin: bottom right;
        transition: transform 0.35s ease-out;
    }

    :hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

export const ListPropi = styled.ul`
    margin: auto;
    margin-left: 2%;
    font-size: 1.9vw;
`

export const ItemPropi = styled.li`
    color: #D9805F;
    text-align: left;
    margin-bottom: 1%;
    position: relative;
    width: fit-content;

    b {
        color: #D9805F;
    }

    :after {
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 3px;
        position: absolute;
        transform: scaleX(0);
        background-color: #D9805F;
        transform-origin: bottom right;
        transition: transform 0.35s ease-out;
    }

    :hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

export const ContainerImagePropi = styled.div`
    margin: 1%;
    width: 50%;
    overflow: hidden;
    position: relative;
`

export const ImagePropi = styled.img`
    width: 100%;
    margin-top: 1%;
    transform: scale(1.05);

    :hover {
        transform: scale(1.06);
        filter: brightness(75%);
    }
`

export const Footer = styled.footer`
    width: 100%;
    display: flex;
    background-color: #ffffff;
`

export const ListSocialNetworks = styled.ul`
    padding: 1%;
    display: flex;
    list-style-type: none;
    flex-direction: column;
`

interface ILinkItemListSocialNetworks {
    width: string | number
}

export const LinkItemListSocialNetworks = styled.a<ILinkItemListSocialNetworks>`
    padding: 1%;
    margin-bottom: 5%;
    border-radius: 12px;
    width: ${props => props.width}%;

    :hover {
        background-color: #cccccc;
        text-decoration: underline #cccccc;
    }
`

export const ItemListSocialNetworks = styled.li`
    display: flex;
    align-items: center;
`

export const TitleItemListSocialNetworks = styled.span`
    color: #D9805F;
    margin-left: 4%;
    font-size: 1.5vw;
    white-space: nowrap;
    position: relative;
    
    :after {
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 2.5px;
        position: absolute;
        transform: scaleX(0);
        background-color: #D9805F;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    :hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

interface IIconItemListSocialNetworks {
    widthIcon: string | number
}

export const IconItemListSocialNetworks = styled.svg<IIconItemListSocialNetworks>`
    fill: #D9805F;
    height: auto;
    width: ${props => props.widthIcon}%;
`