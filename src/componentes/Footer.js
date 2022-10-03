import styled from "styled-components";

export default function Footer(props){

    const quantPergunta = props.quantPergunta;
    const quantPerguntaRespondida = props.quantPerguntaRespondida;

    return(
        <Footerconcluidos>
            <p>{quantPerguntaRespondida<=quantPergunta ? quantPerguntaRespondida : quantPergunta}/{quantPergunta} CONCLUÍDOS</p>
        </Footerconcluidos>
    )
}

const Footerconcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`

/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/