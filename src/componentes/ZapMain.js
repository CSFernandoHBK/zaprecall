import react from "react"
import styled from "styled-components"
import AreaPerguntas from "./AreaPerguntas"
import Footer from "./Footer"
import LogoContainer from "./LogoContainer"
import BoasVindas from "./BoasVindas"

// as props dos botoes tem que ser passadas do zapmain > areaperguntas > pergunta > perguntaaberta 


export default function ZapMain() {

    const [quantPergunta, setquantPergunta] = react.useState(8);
    const [quantPerguntaRespondida, setquantPerguntaRespondida] = react.useState(0);
    const [tela, settela] = react.useState(true);



    return (
        tela 
        ?
        <BoasVindas settela={settela}/>
        :
        <ScreenContainer>
            <LogoContainer/>
            <AreaPerguntas quantPergunta={quantPergunta}
            quantPerguntaRespondida={quantPerguntaRespondida}
            setquantPerguntaRespondida={setquantPerguntaRespondida}/>
            <Footer quantPergunta={quantPergunta}
            quantPerguntaRespondida={quantPerguntaRespondida}
            setquantPerguntaRespondida={setquantPerguntaRespondida}/>
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