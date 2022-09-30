import react from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

export default function Pergunta(props){

    const [clicado, setclicado] = react.useState(false);

    return(
        <div onClick={() => (setclicado(true))}>
            {clicado ? 
            <PerguntaAberta props={props}/> : 
            <PerguntaFechada props={props}/>}
        </div>
    )
}
