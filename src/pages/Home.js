import styled from 'styled-components';

import Header from '../components/Header.js';
import PresentationContent from '../components/PresentationContent.js';
import background from './../img/fundo-home.jpg';

export default function Home() {

    return (
        <Main>
            <Presentation>
                <img className='background' src={background} alt="background" />
                <Header/>
                <PresentationContent/>
            </Presentation>
        </Main>
    );
}

const Main = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
`;

const Presentation = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    height: 100vh;

    img.background {
        width: 100vw;
        height: 100vh;
        opacity: 0.1;
        object-fit: cover;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }
`;