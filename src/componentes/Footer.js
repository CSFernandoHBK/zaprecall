import styled from "styled-components";

export default function Footer(props){

    const quantPergunta = props.quantPergunta;
    const quantPerguntaRespondida = props.quantPerguntaRespondida;
    const setquantPerguntaRespondida = props.setquantPerguntaRespondida;

    function naoLembrei(){
        console.log("não lembrei");
        setquantPerguntaRespondida(quantPerguntaRespondida + 1);
    }

    function quaseLembrei(){
        console.log("quase lembrei");
        setquantPerguntaRespondida(quantPerguntaRespondida + 1);
    }

    function zap(){
        console.log("zap")
        setquantPerguntaRespondida(quantPerguntaRespondida + 1);
    }

    return(
        <Footerconcluidos>
            <Containerbotoes>
                <BotaoNaoLembrei onClick={() => (naoLembrei())}>Não lembrei</BotaoNaoLembrei>
                <BotaoQuase onClick={() => (quaseLembrei())}>Quase não lembrei</BotaoQuase>
                <BotaoZap onClick={() => (zap())}>Zap!</BotaoZap>
            </Containerbotoes>
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

/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/