import styled from "styled-components"
import logo from "../img/logo.png"

export default function BoasVindas(props){

    const settela = props.settela;

    function iniciar(){
        settela(false)
    }

    return(
        <Tela>
            <img src={logo}/>
            <p>ZapRecall</p>
            <button onClick={() => (iniciar())}>Iniciar Recall!</button>
        </Tela>
    )
}

const Tela = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin: 0px;
    padding: 0px;

    p{
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        margin-bottom: 30px;
        margin-top: 15px;
    }

    button{
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        min-width: 246px;
        min-height: 54px;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #D70900;
    }
`