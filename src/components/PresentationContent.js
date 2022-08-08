import styled from 'styled-components';

import icon from './../img/presalewoofie.png';

export default function PresentationContent() {

    return (
        <PresentationContentTag>
            <img className='icon-mobile' src={icon} alt="icon" />
            <WhatIs>
                <h1>WHAT IS $WOOFIE?</h1>
                <p>$WOOFIE is a (Dog Friendly) DeFi Token on the Ethereum Blockchain. It gives users the opportunity to earn money in the Woofieverse, while also saving the lives of dogs in the real world. You can use your $WOOFIE tokens to adopt your $WOOFIEPUP in the Woofieverse and we'll save dogs together as community!</p>
                <botton>CONNECT WALLET</botton>
            </WhatIs>
            <img className='icon' src={icon} alt="icon" />
        </PresentationContentTag>
    );
}

const PresentationContentTag = styled.div`

    @media (min-width: 1024px) {
        --height-header: 6vw;
        .icon-mobile {
            display: none
        }
    }
    @media (max-width: 1023px) {
        --height-header: 0px;
        flex-direction: column;
        .icon {
            display: none
        }
    }

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100vw;
    height: calc(100vh - var(--height-header));

    img.icon, img.icon-mobile {
        box-shadow: 0 4vw 6vw rgb(148 120 61 / 24%), 0 -4vw 6vw rgb(148 120 61 / 24%);
        border-radius: 50%;
    }
    
    img.icon {
        width: 30vw;
    }

    img.icon-mobile {
        width: 42vw;
    }
`;

const WhatIs = styled.div`

    @media (min-width: 1024px) {
        --width-what-is: 36vw;
        --height-what-is: 70vh;
        --font-h1: 6.25vw;

        & > botton {
            width: 11vw;
            height: 3.4vw;
            font-size: .8vw;
            border-radius: .22vw;
            box-shadow: 0 0 .33vw #00000060;
        }
    }
    @media (max-width: 1023px) {
        --width-what-is: 85vw;
        --height-what-is: 60vh;
        --font-h1: 11.5vw;

        & > botton {
            width: 49vw;
            height: 15vw;
            font-size: 4.3vw;
            border-radius: 1vw;
            box-shadow: 0 0 1.5vw #00000060;
        }
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
        margin-bottom: 1.5vw;
    }

    & > p {
        overflow: hidden;
        font-family: var(--font-ibm);
        font-size: 16px;
        line-height: 1.2;
        color: #FFFFFFCD;
    }

    & > botton {
        background-color: #92763C;

        display: flex;
        align-items: center;
        justify-content: center;

        font-family: var(--font-chakra);
        color: #FFFFFF;
        text-decoration: none;

        transition: .3s;
    }

    & > botton:hover {
        box-shadow: 0 0 2vw rgb(148 120 61 / 80%);
        background-color: #b38d3e;
    }
`;
