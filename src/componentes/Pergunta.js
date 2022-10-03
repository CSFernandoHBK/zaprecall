import react from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

export default function Pergunta(props){

    const [clicado, setclicado] = react.useState(false);

    return(
        <div onClick={() => (setclicado(true))} data-identifier="flashcard-show-btn">
            {clicado ? 
            <PerguntaAberta props={props} /> : 
            <PerguntaFechada props={props} data-identifier="flashcard-index-item"/>}
        </div>
    )
}
