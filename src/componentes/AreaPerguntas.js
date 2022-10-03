import Pergunta from "./Pergunta"

export default function AreaPerguntas(props){

    const perguntas = props.deck;

    const quantPerguntaRespondida = props.quantPerguntaRespondida;
    const setquantPerguntaRespondida = props.setquantPerguntaRespondida;
    const setquantPergunta = props.setquantPergunta;

    setquantPergunta(perguntas.length);

    return(
        <>
            {perguntas.map((p, index) => 
                <Pergunta pergunta={p} index={index} key={index} 
                quantPerguntaRespondida={quantPerguntaRespondida}
                setquantPerguntaRespondida={setquantPerguntaRespondida}
                data-identifier="flashcard"/>
            )}
        </>
    )
}
