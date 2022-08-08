import { useState } from "react";
import styled from 'styled-components';

import upArrow from './../img/up-arrow.svg';
import downArrow from './../img/down-arrow.svg';

export default function Faq({question, answer}) {

    const [hidden, setHidden] = useState(true);

    return (
        <FaqTag>
            <div className={hidden ? 'faq' : 'faq shadow'} onClick={() => setHidden(s => !s)}>
                <div className='question'>
                    <p>{question}</p>
                    <img src={downArrow} alt="downArrow" />
                </div>
                <p className={hidden ? 'answer hidden' : 'answer'}>
                    {answer}
                </p>
            </div>
        </FaqTag>
    );
}

const FaqTag = styled.div`

    @media (min-width: 1024px) {
        .faq {
            width: 55vw;
            margin-bottom: 1.8vw;
            box-shadow: 0px 0px .5vw #AB8B4E80;
            border-radius: .2vw;
        }

        .shadow {
            box-shadow: 0px 0px 3.3vw #AB8B4E;
        }

        .question {
            width: 48.6vw;
            height: 6.9vw;
        }

        .question > p {
            font-size: 1.25vw;
            text-shadow: 0px 0px .2vw #00000080;
        }

        .question > img {
            width: 1.5vw;
        }

        .answer {
            width: 48.6vw;
            height: 6.9vw;
            font-size: .9vw;
        }
    }

    @media (max-width: 1023px) {
        .faq {
            width: 76.6vw;
            margin-bottom: 7vw;
            box-shadow: 0px 0px 2.25vw #AB8B4E80;
            border-radius: .9vw;
        }

        .shadow {
            box-shadow: 0px 0px 14.8vw #AB8B4E;
        }

        .question {
            width: 62.8vw;
            height: 32vw;
        }

        .question > p {
            font-size: 5.6vw;
            text-shadow: 0px 0px .9vw #00000080;
        }

        .question > img {
            width: 8vw;
        }

        .answer {
            width: 62.8vw;
            font-size: 4vw;
            margin-bottom: 15vw;
        }
    }

    .faq {
        background-color: #AB8B4E;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* .faq:not(.shadow) {
        height: 6.9vw;
        transition: height .5s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0;
    }
    .shadow {
        height: 13.8vw;
    } */

    .question {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .question > p {
        font-family: var(--font-chakra);
        font-weight: 700;
        color: #FFFFFF;
    }

    .faq:not(.shadow) > .question > img {
        animation: reverse-spin-180 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
    }

    .shadow > .question > img {
        animation: spin-180 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
    }

    .answer {
        font-family: var(--font-ibm);
        font-weight: 700;
        line-height: 1.4;
        color: #F5F5F5;
    }

    .hidden {
        height: 0;
        margin-bottom: 0;
        transform: scaleY(0);
        transform-origin: 100% 0%;
    }

    .answer:not(.hidden) {
        -webkit-animation: open-menu 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	    animation: open-menu 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
`;