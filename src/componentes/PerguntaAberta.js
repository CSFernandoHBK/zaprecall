import react from "react";
import styled from "styled-components";
import seta_virar from "../img/seta_virar.png"

//Pode criar um estado false que é atualizado para true quando apertar no seta_virar. Nesse estado vai exibir os botoes.


export default function PerguntaAberta(props){

    const pergunta = props.props.pergunta.pergunta;
    const resposta = props.props.pergunta.resposta;

    const[clickperg, setclickperg] = react.useState(false);

    return(
        <Perguntaaberta>
            <p>{clickperg ? resposta : pergunta}</p>
            <img src={clickperg ? "" : seta_virar} onClick={() => (setclickperg(true))}/>

            {(clickperg ? 
            <Containerbotoes>
                <BotaoNaoLembrei>Não lembrei</BotaoNaoLembrei>
                <BotaoQuase>Quase não lembrei</BotaoQuase>
                <BotaoZap>Zap!</BotaoZap>
            </Containerbotoes>
            : "")}

        </Perguntaaberta>
    )
}

const Perguntaaberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

const Containerbotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
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