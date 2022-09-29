import react from "react";
import styled from "styled-components";
import seta_play from "../img/seta_play.png";
import seta_virar from "../img/seta_virar.png"
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

export default function Pergunta(props){

    const pergunta = props.pergunta.pergunta;
    const resposta = props.pergunta.resposta;
    const index = props.index;

    const [clicado, setclicado] = react.useState(false);

    return(
        <div onClick={() => (setclicado(true))}>
            {clicado ? 
            <PerguntaAberta props={props}/> : 
            <PerguntaFechada props={props}/>}
        </div>
    )
}
