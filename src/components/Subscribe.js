import styled from 'styled-components';

import logo from './../img/presalewoofie.png';

import twitter from './../img/twitter.svg';
import facebook from './../img/facebook.svg';
import telegram from './../img/telegram.svg';
import discord from './../img/discord.svg';

export default function Subscribe() {

    return (
        <SubscribeTag>
            <img className='logo' src={logo} alt="logo" />
            <div className='links'>
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={telegram} alt="telegram" />
                <img src={discord} alt="discord" />
                <img src={discord} alt="discord" />
                <img src={discord} alt="discord" />
            </div>
            <ContactUs>
                CONTACT US
            </ContactUs>
        </SubscribeTag>
    );
}

const SubscribeTag = styled.div`

    @media (min-width: 1024px) {
        img.logo {
            margin-top: 2.1vw;
            width: 8.75vw;
        }

        .links {
            margin-top: 1.5vw;
            gap: 1.4vw;
        }

        .links > img {
            height: 1.25vw;
        }
    }

    @media (max-width: 1023px) {
        img.logo {
            margin-top: 9.4vw;
            width: 39.25vw;
        }

        .links {
            margin-top: 6.7vw;
            gap: 6.3vw;
        }

        .links > img {
            height: 5.6vw;
        }
    }

    width: 100vw;

    background-color: #2B2B2B;
    display: flex;
    flex-direction: column;
    align-items: center;

    .links {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ContactUs = styled.div`

    @media (min-width: 1024px) {
        margin: 3.5vw 0;
        padding: 0.8vw;

        border: .07vw solid #B1904A;
        border-radius: 1.3vw;

        font-size: 1vw;
    }

    @media (max-width: 1023px) {
        margin: 15.7vw 0;
        padding: 3.6vw;

        border: .32vw solid #B1904A;
        border-radius: 5.8vw;

        font-size: 4.5vw;
    }

    
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-family: var(--font-chakra);
    font-weight: 700;
    text-decoration: none;
    color: white;    
`;