import react from "react"
import styled from "styled-components"
import seta_play from "../img/seta_play.png"
import Pergunta from "./Pergunta"

const perguntas = [{
    pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"
},{
    pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"
},{
    pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"
},{
    pergunta:"Podemos colocar __ dentro do JSX", resposta:"expressões"
},{
    pergunta:"O ReactDOM nos ajuda __", resposta:"interagindo com a DOM para colocar componentes React na mesma"
},{
    pergunta:"Usamos o npm para __", resposta:"gerenciar os pacotes necessários e suas dependências"
},{
    pergunta:"Usamos props para __", resposta:"passar diferentes informações para componentes "
},{
    pergunta:"Usamos estado (state) para __", resposta:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
}
]

export default function AreaPerguntas(){
    const [aberta, setaberta] = react.useState();

    return(
        <>
            {perguntas.map((p, index) => 
                <Pergunta pergunta={p} index={index}/>
            )}
        </>
    )
}


const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: "#FFFFFF";
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
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