import styled from "styled-components"
import AreaPerguntas from "./AreaPerguntas"
import Footer from "./Footer"
import LogoContainer from "./LogoContainer"


export default function ZapMain() {
    return (
        <ScreenContainer>
            <LogoContainer/>
            <AreaPerguntas/>
            <Footer/>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`