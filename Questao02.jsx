import { useRef, useState } from "react"

const Questao02 = () =>{
    //useReef permite que vc referencie um valor que não precisa ser renderizado. ex se a tela for renderizada eu não quero perder essa variável
    //tentando fazer com ref e falhando

    // const refX = useRef(true)

    // const acaoBotao =()=>{
    //     refX.current = false
    //     console.log("refX:"+ refX.current)
    //     if(refX.current === true)  <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"style={{width: "400px" }}></img>
    //     else if(refX.current === false) <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"style={{width: "400px" }}></img>
    // }

    // return(
    // <>
    //     <img src={refX ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"} style={{width: "400px" }}>

    //     </img>

    //não quero que ela seja renderizada, mas que seu estado seja mantido em novas renderizações
    const [flag, setFlag] = useState(false)

    //ao clicar no botão ele vai negar a variável de estado
    const acaoBotao =()=>{
        setFlag(!flag)
    }

    return(
    <>
    {/* dessa forma ela consegue ficar alternando entre true = frente, e false = costas */}
        <img src={flag ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"} style={{width: "400px" }}>

        </img>

        <button onClick={acaoBotao}>
            Virar
        </button>
    </>
    )
}

export default Questao02