import react from "react";
import styled from "styled-components";
import seta_play from "../img/seta_play.png";
import seta_virar from "../img/seta_virar.png"

export default function Pergunta(props){

    const pergunta = props.pergunta.pergunta;
    const resposta = props.pergunta.resposta;
    const index = props.index;

    const [clicado, setclicado] = react.useState(false);
    const [texto, settexto] = react.useState(`Pergunta ${index +1}`)

    return(
        <PerguntaFechada clicado={clicado} onClick={() => (setclicado(true))}>
            <p>{(clicado ? pergunta : texto)}</p>
            <img src={(clicado ? seta_virar : seta_play)}/>
        </PerguntaFechada>
    )
}

function perguntaAberta(){

}


const PerguntaFechada = styled.div`
    width: 300px;
    height: ${(props) => (props.clicado ? "70px" : "35px")};
    background-color: ${(props) => (props.clicado ? "#FFFFD4" : "#FFFFFF")};
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: ${(props) => (props.clicado ? "flex-start" : "center")};
    justify-content: space-between;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

`
const PerguntaAberta = styled.div`
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