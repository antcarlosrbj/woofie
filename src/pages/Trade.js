import { useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Header.js';
import Subscribe from '../components/Subscribe.js';
import Footer from '../components/Footer.js';

import icon from './../img/presalewoofie.png';

export default function Trade() {

    const [usd, setUsd] = useState("");
    const [woofie, setWoofie] = useState("");

    return (
        <Main>
            <Header/>
            <img className='icon' src={icon} alt="icon" />
            <TradeTag>
                <div className='buy'>
                    <p className='title'>Buy WOOFIE</p>
                    <div className='label usd'>
                        <p>USDC.e</p>
                        <p>Balance: 0.0000</p>
                    </div>
                    <input type="text" value={usd} onChange={e => setUsd(e.target.value)} />
                    <div className='label woofie'>
                        <p>WOOFIE</p>
                        <p>Balance: 0.0000</p>
                    </div>
                    <input type="text" value={woofie} onChange={e => setWoofie(e.target.value)} />
                    <p className='message'>Share your referral link for buys and earn 10% pLava on all buys:</p>
                    <button>Loading</button>
                </div>
                <div className='sell'>
                <p className='title'>Sell WOOFIE</p>
                    <div className='label usd'>
                        <p>WOOFIE</p>
                        <p>Balance: 0.0000</p>
                    </div>
                    <input type="text" value={usd} onChange={e => setUsd(e.target.value)} />
                    <div className='label woofie'>
                        <p>USDC.e</p>
                        <p>Balance: 0.0000</p>
                    </div>
                    <input type="text" value={woofie} onChange={e => setWoofie(e.target.value)} />
                    <p className='message'>The above USDC.e includes 15% sales tax. This is the approx. amount of tokens you would receive on sell.</p>
                    <button>Loading</button>
                </div>
            </TradeTag>
            <Subscribe />
            <Footer />
        </Main>
    );
}

const Main = styled.div`

    @media (max-width: 1023px) {
        img.icon {
            width: 42vw;
            margin-top: 16.6vw;
        }
    }
    
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;

    .icon {
        width: 8.75vw;
        margin-top: 1.72vw;
        margin-bottom: 3.5vw;
    }
`;

const TradeTag = styled.div`


    @media (min-width: 1024px) {
        min-height: calc(100vh - 33.53vw);

        .buy, .sell {
            width: 44.8vw;
            height: 24.5vw;
            border-radius: 1vw;
            margin: 0 1.35vw;
        }

        .title {
            font-size: 1.88vw;
            margin-top: 1.8vw;
        }

        .label {
            width: 39.5vw;
            margin-top: 2.4vw;
            margin-bottom: .2vw;
            font-size: .73vw;
        }

        input {
            width: 39.74vw;
            height: 2.5vw;
            border-radius: .5vw;
        }

        .message {
            width: 39.5vw;
            font-size: .73vw;
            margin: 1.5vw 0 2.5vw 0;
        }

        button {
            width: 39.74vw;
            height: 2.5vw;
            border-radius: .5vw;
            font-size: .73vw;
        }
    }

    @media (max-width: 1023px) {
        flex-direction: column;
        margin-top: 27.8vw;

        .buy, .sell {
            width: 88.5vw;
            height: 110vw;
            border-radius: 2vw;
            margin-bottom: 11vw;
        }

        .title {
            font-size: 8.4vw;
            margin-top: 4.5vw;
        }

        .label {
            width: 68.2vw;
            margin-top: 11.4vw;
            margin-bottom: 1.5vw;
            font-size: 3.3vw;
        }

        input {
            width: 68.2vw;
            height: 11.2vw;
            border-radius: 2.3vw;
        }

        .message {
            width: 68.2vw;
            font-size: 3.27vw;
            margin: 7vw 0 9vw 0;
        }

        button {
            width: 68.2vw;
            height: 11.2vw;
            border-radius: 2.3vw;
            font-size: 3.27vw;
        }
    }
    
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 6.5vw;

    font-family: var(--font-chakra);
    font-weight: 700;
    color: #FFFFFF;

    width: 100vw;

    .filters {
        display: flex;
        align-items: center;
    }

    .buy, .sell {
        background-color: #9A7F438D;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .label {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    input {
        border: 0;  
        background-color: #FFFFFF;
    }

    button {
        border: 0;
        background-color: #000000;
        color: #FFFFFF;
        font-family: var(--font-chakra);
        font-weight: 700;
    }
`;