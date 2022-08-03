import { useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Header.js';
import Subscribe from '../components/Subscribe.js';
import Footer from '../components/Footer.js';

import Nft from '../components/Nft.js';

import icon from './../img/presalewoofie.png';
import upArrow from './../img/up-arrow.svg';
import downArrow from './../img/down-arrow.svg';

export default function Nfts() {

    const [search, setSearch] = useState("");

    const widthNft = window.screen.width > 1024 ? 15 : 70;

    return (
        <Main>
            <Header/>
            <NftsTag>
                <img className='icon' src={icon} alt="icon" onClick={() => console.log(widthNft)} />
                <div className='filters'>
                    <input type="text" value={search} placeholder="Search" onChange={e => setSearch(e.target.value)} />
                    <div className='categories'>
                        <p>All Categories</p>
                        <img src={downArrow} alt="downArrow" />
                    </div>
                    <div className='sorting'>
                        <p>Default sorting</p>
                        <img src={downArrow} alt="downArrow" />
                    </div>
                </div>
                <NftsList>
                    <Nft widthNft={widthNft} name={"Sea Green Citya"} highestBid={2.5} minimumBid={0.499} />
                    <Nft widthNft={widthNft} name={"Sea Green Cityb"} highestBid={2.5} minimumBid={0.499} />
                    <Nft widthNft={widthNft} name={"Sea Green Cityc"} highestBid={2.5} minimumBid={0.499} />
                    <Nft widthNft={widthNft} name={"Sea Green Cityd"} highestBid={2.5} minimumBid={0.499} />
                    <Nft widthNft={widthNft} name={"Sea Green Citye"} highestBid={2.5} minimumBid={0.499} />
                    <Nft widthNft={widthNft} name={"Sea Green Cityf"} highestBid={2.5} minimumBid={0.499} />
                    <Nft widthNft={widthNft} name={"Sea Green Cityg"} highestBid={2.5} minimumBid={0.499} />
                    <Nft widthNft={widthNft} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
                    <Nft widthNft={widthNft} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
                    <Nft widthNft={widthNft} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
                    <Nft widthNft={widthNft} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
                    <Nft widthNft={widthNft} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
                    <Nft widthNft={widthNft} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
                    <Nft widthNft={widthNft} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
                    <Nft widthNft={widthNft} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
                </NftsList>
            </NftsTag>
            <Subscribe />
            <Footer />
        </Main>
    );
}

const Main = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
`;

const NftsTag = styled.div`


    @media (min-width: 1024px) {

        img.icon {
            --width-nft: 15;
            display: none;
        }

        .filters {
            width: 66.3vw;
            height: 2.7vw;
        }

        input {
            width: 17.2vw;
            height: 2.7vw;
            margin-right: 24.1vw;
            border-radius: .26vw;
            padding: .78vw;
            font-size: 1.3vw;
        }

        input::placeholder, input {
            font-size: 1vw;
        }

        .categories, .sorting {
            width: 12.5vw;
            padding: 0 1.04vw;
        }

        .categories > p, .sorting > p {
            font-size: 1vw;
        }

        .categories > img, .sorting > img {
            width: .8vw;
        }
    }

    @media (max-width: 1023px) {

        img.icon {
            --width-nft: 70;
            width: 42vw;
            margin-top: 16.6vw;
        }

        .filters {
            width: 77vw;
            flex-direction: column;
            margin-top: 23vw;
        }

        input {
            width: 77vw;
            height: 12vw;
            border-radius: 1vw;
            padding: 3vw;
            font-size: 4vw;
        }

        input::placeholder, input {
            font-size: 4vw;
        }

        .categories, .sorting {
            width: 77vw;
            height: 12vw;
            padding: 0 4vw;
            margin-top: 2.5vw;
        }

        .categories > p, .sorting > p {
            font-size: 4vw;
        }

        .categories > img, .sorting > img {
            width: 3.6vw;
        }
    }
    
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    min-height: calc(100vh - 33.53vw);
    margin-top: 6vw;

    .filters {
        display: flex;
        align-items: center;
    }

    input {
        border: 0;  
        background-color: #0A0A0A;
    }

    input::placeholder, input {
        font-family: var(--font-ibm);
        font-weight: 700;
        color: #B9B9BF;
    }

    .categories, .sorting {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .categories > p, .sorting > p {
        font-family: var(--font-ibm);
        font-weight: 700;
        color: #B9B9BF;
    }
`;

const NftsList = styled.div`

    @media (max-width: 1023px) {
        & > div {
            margin-top: 6vw;
        }
    }

    padding: 5vw 12vw;
    
    display: flex;
    flex-wrap: wrap;
    gap: 2vw 0;
    

    width: 100vw;
`;