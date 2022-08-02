import styled from 'styled-components';

import imageInfo from './../img/woofiedashboardweb.png';

export default function Infos() {

    return (
        <InfosTag>
            <Info>
                <div className='info-content'>
                <h2>Trade Your Pup</h2>
                    <img className='image' src={imageInfo} alt="Info" />
                    <div className='text'>
                        <h2>Trade Your Pup</h2>
                        <p>$WOOFIEPUPS can be bought, sold and/or traded through the OpenSea NFT Marketplace. This means you do not only have the ability to adopt one through the Woofie Dashboard, but also through OpenSea if that's more suitable for you</p>
                    </div>
                </div>
            </Info>
        </InfosTag>
    );
}

const InfosTag = styled.div`
    
`;

const Info = styled.div`

    @media (min-width: 1273px) {
        --width-img-text: 27.5vw;
        --padding-info-content: 20vw;

        .info-content > h2 {
            display: none;
        }
    }

    @media (min-width: 994px) and (max-width: 1272px) {
        --width-img-text: 350px;
        --padding-info-content: calc(75vw - 700px);

        .info-content > h2 {
            display: none;
        }
    }

    @media (min-width: 881px) and (max-width: 993px) {
        --width-img-text: calc((75vw - 45px)/2);
        --padding-info-content: 45px;

        .info-content > h2 {
            display: none;
        }
    }

    --height-info: calc(var(--width-img-text)*.75);

    padding-right: 20vw;

    @media (max-width: 880px) {
        --width-img-text: 65vw;
        --padding-info-content: 0px;

        .info-content {
            flex-direction: column;
            padding-right: 20vw;
        }
        --height-info: calc(var(--width-img-text)*.75*2);

        .text > h2 {
            display: none;
        }
    }

    
    margin: 25px 0;
    width: 100vw;
    height: calc(var(--height-info) + 10px);
    clip-path: polygon(0vw 0px, 75vw 0px, 80vw calc(var(--height-info) + 10px), 0vw calc(var(--height-info) + 10px));
    background-color: #BFA84A;
    
    .info-content {
        width: 100vw;
        height: calc(var(--height-info) + 10px);
        clip-path: polygon(0vw 0px, calc(75vw - 2px) 0px, calc(80vw - 2px) calc(var(--height-info) + 10px), 0vw calc(var(--height-info) + 10px));
        border-top: 1px solid #786B33;
        border-bottom: 1px solid #786B33;
        background-color: #2F240D;

        display: flex;
        align-items: center;
        padding-left: var(--padding-info-content);
    }

    .image {
        width: calc(var(--width-img-text) * 0.9);
        height: var(--height-info);
        object-fit: contain;
    }

    .text {
        width: calc(var(--width-img-text) * 1.1);
        height: var(--height-info);
        padding: 15px;
    }
    
    h2 {
        font-family: var(--font-chakra);
        font-size: calc(var(--width-img-text)/15);
        color: #FFFFFF;
        margin: 15px 0;
    }

    .text > p {
        font-family: var(--font-ibm);
        font-size: 12px;
        color: #B9B9BF;
    }

    @media (min-width: 461px) {
        .text > p {
            font-size: calc(var(--width-img-text)/25);
        }
    }
`;