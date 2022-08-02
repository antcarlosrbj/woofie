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

    @media (max-width: 1023px) {
        display: none;
    }
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100vw;
    height: 6vw;

    img {
        width: 9vw;
    }
`;

const Menu = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 30vw;
    height: 6vw;

    a {
        font-family: var(--font-chakra);
        font-size: 1.3vw;
        text-decoration: none;
        color: white;
    }
`;

const Discord = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.8vw;

    border: .15vw solid #B1904A;
    border-radius: 1.3vw;

    
    font-family: var(--font-chakra);
    text-decoration: none;
    color: white;
    font-size: 1vw;
    
`;