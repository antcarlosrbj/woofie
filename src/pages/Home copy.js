import styled from 'styled-components';

import Header from '../components/Header.js';
import background from './../img/fundo-home.jpg';
import icon from './../img/presalewoofie.png';

export default function Home() {

    return (
        <Main>
            <Presentation>
                <img className='background' src={background} alt="background" />
                <Header/>
                <PresentationContent>
                    <img className='icon-mobile' src={icon} alt="icon" />
                    <WhatIs>
                        <h1>WHAT IS $WOOFIE?</h1>
                        <p>$WOOFIE is a (Dog Friendly) DeFi Token on the Ethereum Blockchain. It gives users the opportunity to earn money in the Woofieverse, while also saving the lives of dogs in the real world. You can use your $WOOFIE tokens to adopt your $WOOFIEPUP in the Woofieverse and we'll save dogs together as community!</p>
                        <botton>CONNECT WALLET</botton>
                    </WhatIs>
                    <img className='icon' src={icon} alt="icon" />
                </PresentationContent>
            </Presentation>
        </Main>
    );
}

const Main = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
`;

const Presentation = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    height: 100vh;

    img.background {
        width: 100vw;
        height: 100vh;
        opacity: 0.1;
        object-fit: cover;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }
`;

const PresentationContent = styled.div`

    @media (min-width: 881px) {
        --width-header: 80px;
        .icon-mobile {
            display: none
        }
    }
    @media (max-width: 880px) {
        --width-header: 0px;
        flex-direction: column;
        .icon {
            display: none
        }
    }

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100vw;
    height: calc(100vh - var(--width-header));

    img.icon, img.icon-mobile {
        box-shadow: 0 4vw 6vw rgb(148 120 61 / 24%), 0 -4vw 6vw rgb(148 120 61 / 24%);
        border-radius: 50%;
    }
    
    img.icon {
        width: 30vw;
    }

    img.icon-mobile {
        height: 20vh;
    }
`;

const WhatIs = styled.div`

    @media (min-width: 881px) {
        --width-what-is: 36vw;
        --height-what-is: 70vh;
        --font-h1: 80px;
    }
    @media (max-width: 880px) {
        --width-what-is: 85vw;
        --height-what-is: 60vh;
        --font-h1: 60px;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: var(--width-what-is);
    height: var(--height-what-is);

    & > h1 {
        font-family: var(--font-chakra);
        font-size: var(--font-h1);
        color: #AB8B47;
        margin-bottom: 15px;
    }

    & > p {
        /* max-height: 30vh; */
        overflow: hidden;
        font-family: var(--font-ibm);
        font-size: 16px;
        line-height: 1.2;
        color: #FFFFFFCD;
    }

    & > botton {
        width: 200px;
        height: 60px;
        padding: 5px;
        background-color: #92763C;

        display: flex;
        align-items: center;
        justify-content: center;

        font-family: var(--font-chakra);
        font-size: 16px;
        color: #FFFFFF;
        text-decoration: none;

        border-radius: 4px;
        box-shadow: 0 0 6px #00000060;
    }
`;
