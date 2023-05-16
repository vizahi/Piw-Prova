import { useEffect, useState } from 'react';

const Questao03 = () => {

    //variáveis de estado para maior e menor recebendo string

    const [menorPopulacao, setMenorPopulacao] = useState('');
    const [maiorPopulacao, setMaiorPopulacao] = useState('');
  
    //efeito que quero causar 
  useEffect(() => {
    async function fetchData(){
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/region/europe?fields=capital,population'
        );
        const data = await response.json();

        let maiorPopulacao = 0;
        let menorPopulacao = 0;

        //laço para rodar o vetor de dados da população 
        //a cada elemento ele vai atribuoir o maior e menor valor às variáveis 
        
        for (let i = 0; i < data.length; i++) {
          if (data[i].population > data[maiorPopulacao].population) {
            maiorPopulacao = i;
          }
          if (data[i].population < data[menorPopulacao].population) {
            menorPopulacao = i;
          }
        }

        // irá usar os métodos das variáveis de estado para atribuir o valor encontrado no laço(for) anterior
        
        setMenorPopulacao(data[menorPopulacao].capital[0]);
        setMaiorPopulacao(data[maiorPopulacao].capital[0]);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
        <h3>A menor população é: {menorPopulacao}</h3>
        <h3>A maior população é: {maiorPopulacao}</h3>
      
    </div>
  );
};

export default Questao03;