import styled from 'styled-components';

import nftImg from './../img/BullterrierInu-watermark.gif';

export default function Nft({widthNft, name, highestBid, minimumBid}) {

    return (
        <NftTag theme={{widthNft: widthNft+"px"}}>
            <img src={nftImg} alt="NFT Image" />
            <div className='description'>
                <p className='name'>{name}</p>
                <div className='bids'>
                    <div className='highest bid'>
                        <p className='title'>Highest bid</p>
                        <p className='value'>{highestBid.toFixed(3) + " ETH"}</p>
                    </div>
                    <div class='minimum bid'>
                        <p className='title'>Minimum bid</p>
                        <p className='value'>{minimumBid.toFixed(3) + " ETH"}</p>
                    </div>
                </div>
                <button>Place A Bid</button>
            </div>
        </NftTag>
    );
}

const NftTag = styled.div`

    --width-nft: ${props => props.theme.widthNft};

    min-width: var(--width-nft);
    height: calc(1.55 * var(--width-nft));
    border-radius: calc(var(--width-nft)/7);

    margin: 0 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #232339;

    & > img {
        width: var(--width-nft);
        height: calc(0.9 * var(--width-nft));
        box-sizing: border-box;
        border-radius: calc(var(--width-nft)/7);
    }

    & > .description {
        width: calc(0.86 * var(--width-nft));
        height: calc(0.52 * var(--width-nft));
        margin-top: calc(0.05 * var(--width-nft));

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .name {
        font-family: var(--font-montserrat);
        font-size: calc(var(--width-nft)/13);
        color: #E6E6E6;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .bids {
        display: flex;
    }

    .bid {
        width: calc(0.38 * var(--width-nft));
        height: calc(var(--width-nft)/7);
        margin-right: calc(var(--width-nft)/21);

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .title {
            font-family: var(--font-inter);
            font-weight: 400;
            font-size: calc(var(--width-nft)/17.5);
            color: #9797B4;
        }

        .value {
            font-family: var(--font-inter);
            font-weight: 600;
            font-size: calc(var(--width-nft)/17.5);
            color: #E6E6E6;
        }
    }

    button {
        width: calc(0.86 * var(--width-nft));
        height: calc(0.18 * var(--width-nft));
        border-radius: calc(0.09 * var(--width-nft));
        border: calc(var(--width-nft)/105) solid #AB8B4B6C;
        background: none;

        font-family: var(--font-montserrat);
        font-size: calc(var(--width-nft)/17.5);
        color: #AB8E51;
    }
`;