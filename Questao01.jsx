import { useEffect, useState } from "react";

const Questao1A = ()=>{

    const [medias, setMedias] = useState([])
    const [loading, setLoading] = useState([])

    const alunos = [
        { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
        ]
    

    //função para mostrar na tela o nome e a média, fiz um laço que vai ler cada item do vetor, e os que foram maior igual a 6, os que forem maior vão ser adicionados no novo vetor que vai armazenar apenas os nomes dos que forem maior 
    
    const renderizar =()=>{
        const alunos02 = []

        for (let i = 0; i <= 2; i++) {
            if (medias[i] >= 6)
                alunos02.push(
                    <>
                        <h1>{alunos[i].nome}</h1>
                    </>
                )
        }

        return alunos02
    }
    


        return (
            <>
                <Questao1B alunos={alunos} media={medias}/>
                {renderizar()}
                
            </>
        );


}


const Questao1B = ({alunos, media})=>{

    //vetor que vai receber todas as médias
    let medias = []

    useEffect( 
        
        ()=>{

            //map recebe uma função na qual vai pegar cada dado
            //map pega cada elemento do vetor, modifica ele de alguma forma, retorna um vetor de jsx que o react vai ler e renderizar um por um
            medias = alunos.map(
                (aluno) => {(aluno.notas.ap1 + aluno.notas.ap2)/2} 
            )
            media(medias)
            
        }
        ,
        [medias]
    )

}

// export {Questao1A, Questao1B}
export {Questao1A}

