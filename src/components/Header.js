import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from './../img/golden-crypto-logo_260.png';

export default function Header() {

    return (
        <HeaderDiv>
            <img src={logo} alt="Logo" />
            <Menu>
                <Link to="/">HOME</Link>
                <Link to="/">MINT NODE</Link>
                <Link to="/">NFTS</Link>
                <Link to="/">TRADE</Link>
            </Menu>
            <Discord>
                JOIN DISCORD
            </Discord>
        </HeaderDiv>
    );
}

const HeaderDiv = styled.div`

    @media (min-width: 913px) {
        --width-menu: 30vw;
    }
    @media (min-width: 881px) and (max-width: 912px) {
        --width-menu: 275px;
    }
    @media (max-width: 880px) {
        display: none;
    }
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100vw;
    height: 80px;

    img {
        width: 120px;
    }
`;

const Menu = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: var(--width-menu);
    height: 80px;

    a {
        font-family: var(--font-chakra);
        font-size: 16px;
        text-decoration: none;
        color: white;
    }
`;

const Discord = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;

    border: 2px solid #B1904A;
    border-radius: 29px;

    
    font-family: var(--font-chakra);
    text-decoration: none;
    color: white;
    font-size: 14px;
    
`;