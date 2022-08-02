import styled from 'styled-components';

import Nft from '../components/Nft.js';

export default function Nfts() {

    return (
        <>
            <NftsTag>
                <Nft widthNft={200} name={"Sea Green Citya"} highestBid={2.5} minimumBid={0.499} />
                <Nft widthNft={200} name={"Sea Green Cityb"} highestBid={2.5} minimumBid={0.499} />
                <Nft widthNft={200} name={"Sea Green Cityc"} highestBid={2.5} minimumBid={0.499} />
                <Nft widthNft={200} name={"Sea Green Cityd"} highestBid={2.5} minimumBid={0.499} />
                <Nft widthNft={200} name={"Sea Green Citye"} highestBid={2.5} minimumBid={0.499} />
                <Nft widthNft={200} name={"Sea Green Cityf"} highestBid={2.5} minimumBid={0.499} />
                <Nft widthNft={200} name={"Sea Green Cityg"} highestBid={2.5} minimumBid={0.499} />
                <Nft widthNft={200} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
                <Nft widthNft={200} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
                <Nft widthNft={200} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
                <Nft widthNft={200} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
                <Nft widthNft={200} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
                <Nft widthNft={200} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
                <Nft widthNft={200} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
                <Nft widthNft={200} name={"Sea Green City"} highestBid={2.5} minimumBid={0.499} />
            </NftsTag>
            <GetNfts>
                <button>GET NTFS</button>
            </GetNfts>
        </>
    );
}

const NftsTag = styled.div`
    max-width: 100vw;

    display: flex;
    padding: 190px 0 30px 0; 
    
    overflow: auto;
`;

const GetNfts = styled.div`

    @media (max-width: 880px) {
        display: none;
    }

    margin-top: 30px;

    button {
        width: 160px;
        height: 60px;
        border-radius: 30px;
        border: 2px solid #AB8B4B6C;
        background: none;

        font-family: var(--font-chakra);
        font-size: 16px;
        color: #AB8E51;
    }
`;