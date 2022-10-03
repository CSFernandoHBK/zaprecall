import styled from "styled-components";
import seta_play from "../img/seta_play.png";


export default function PerguntaFechada(props){
    
    const index = props.props.index;

    return(
        <Perguntafechada>
            <p>Pergunta {index + 1}</p>
            <img src={seta_play} alt="img"/>
        </Perguntafechada>
    );
}

const Perguntafechada = styled.div`
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