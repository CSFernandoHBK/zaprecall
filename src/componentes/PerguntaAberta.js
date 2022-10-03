import react from "react";
import styled from "styled-components";
import seta_virar from "../img/seta_virar.png";
import icone_certo from "../img/icone_certo.png";
import icone_erro from "../img/icone_erro.png";
import icone_quase from "../img/icone_quase.png";

export default function PerguntaAberta(props){

    const[clickperg, setclickperg] = react.useState(false);
    const[finalizada, setfinalizada] = react.useState(false);
    const[nao, setnao] = react.useState(false);
    const[quase, setquase] = react.useState(false);
    const[estzap, setestzap] = react.useState(false);

    const pergunta = props.props.pergunta.pergunta;
    const resposta = props.props.pergunta.resposta;
    const quantPerguntaRespondida = props.props.quantPerguntaRespondida; 
    const setquantPerguntaRespondida = props.props.setquantPerguntaRespondida;

    const indice = props.props.index + 1

    function naoLembrei(){
        setnao(true);
        setfinalizada(true);
        setquantPerguntaRespondida(quantPerguntaRespondida + 1);
    }

    function quaseLembrei(){
        setquase(true);
        setfinalizada(true);
        setquantPerguntaRespondida(quantPerguntaRespondida + 1);
    }

    function zap(){
        setestzap(true)
        setfinalizada(true);
        setquantPerguntaRespondida(quantPerguntaRespondida + 1);
    }

    return(
        <Perguntaaberta finalizada={finalizada} nao={nao} quase={quase} estzap={estzap}>
            <p data-identifier="flashcard-answer">{clickperg ? (finalizada ? `Pergunta ${indice}` : resposta) : pergunta}</p>
            <img src={clickperg ? (finalizada ? (nao ? icone_erro : (quase ? icone_quase : icone_certo)) : null) : seta_virar} onClick={() => (setclickperg(true))} data-identifier="flashcard-turn-btn"/>

            {((clickperg && !finalizada) ? 
            <Containerbotoes>
                <BotaoNaoLembrei onClick={() => (naoLembrei())} data-identifier="forgot-btn">Não lembrei</BotaoNaoLembrei>
                <BotaoQuase onClick={() => (quaseLembrei())} data-identifier="almost-forgot-btn">Quase não lembrei</BotaoQuase>
                <BotaoZap onClick={() => (zap())} data-identifier="zap-btn">Zap!</BotaoZap>
            </Containerbotoes>
            : "")}
        </Perguntaaberta>
    )
}

const Perguntaaberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: ${(props) => (props.finalizada ? "35px" : "100px")};
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-decoration: ${(props) => (props.finalizada ? "line-through" : "none")};
    color: ${(props) => (props.finalizada ? (props.nao ? "#FF3030" : (props.quase ? "#FF922E" : "#2FBE34")) : "#333333")};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.finalizada ? "center" : "space-between")};

    img{
        position: absolute;
        bottom: ${(props) => (props.finalizada ? "20px" : "10px")};;
        right: 10px;
    }
`

const Containerbotoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 25px auto 10px;
`

const Botao = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid;
    padding:5px;
`

const BotaoNaoLembrei = styled(Botao)`
    background: #FF3030;
`

const BotaoQuase = styled(Botao)`
    background: #FF922E;
`

const BotaoZap = styled(Botao)`
    background: #2FBE34;
`