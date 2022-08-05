import { useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Header.js';
import Subscribe from '../components/Subscribe.js';
import Footer from '../components/Footer.js';

import Nft from '../components/Nft.js';

import icon from './../img/presalewoofie.png';

export default function MindNode() {

    const [search, setSearch] = useState("");

    const nfts = [
        {name:"Sea Green Citya", highestBid:2.5, minimumBid:0.499},
        {name:"Sea Green Cityb", highestBid:2.5, minimumBid:0.499},
        {name:"Sea Green Cityc", highestBid:2.5, minimumBid:0.499}
    ];

    return (
        <Main>
            <Header/>
            <img className='icon' src={icon} alt="icon" />
            <NftsList>
                {nfts.map(nft => {return (
                    <Nft name={nft.name} highestBid={nft.highestBid} minimumBid={nft.minimumBid} />
                )})}
            </NftsList>
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

const NftsList = styled.div`

    @media (min-width: 1024px) {
        gap: 2vw 0;

        & > div {
            --width-nft: 23.8vw;
        }

        & > div .bids {
            margin-top: 2vw;
        }
    }

    @media (max-width: 1023px) {
        gap: 8vw 0;
        margin-top: 11.8vw;

        & > div {
            --width-nft: 70vw;
        }

        & > div .bids {
            margin-top: 6vw;
        }
    }

    padding-bottom: 5vw;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* gap: 2vw 0; */

    width: 100vw;

    /* & > div {
        --width-nft: 23.8vw;
    } */

    & > div .description {
        justify-content: start;
    }


    & > div .bids {
        flex-direction: column;
        /* margin-top: 2vw; */
    }

    & > div .bid {
        flex-direction: row;
        justify-content: space-between;
        height: calc(var(--width-nft)/12);

        width: 100%;
    }

    & > div .name {
        text-align: center;
        font-size: calc(var(--width-nft)/14.8);
    }

    .bid .title, .bid .value {
        font-size: calc(var(--width-nft)/21.8);
    }

    & > div button {
        display: none;
    }
`;