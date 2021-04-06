import React, {useState} from 'react';

export default (props) => {
    const [numeros, setNumero] = useState(Array(props.quantidade).fill(0));

    const gerarNumeroNaoContido = (array: number[]) => {
        const min = 1;
        const max = 60;

        const novoNumero = parseInt(Math.random() * (max-min)) + min;

        return array.includes(novoNumero) ? gerarNumeroNaoContido(array) : novoNumero;
    }
    const gerarNumeros = () => {
        const novoArray = Array(props.quantidade)
            .fill(0)
            .reduce((acumulado) => [...acumulado, gerarNumeroNaoContido(acumulado)], [])
            .sort((a,b) => a-b);
        setNumero(novoArray);
    }
    return (
        <div>
            <h3>Mega-Sena</h3>
            <h4>{numeros.join(' - ')}</h4>
            <button onClick={gerarNumeros}>Gerar Número</button>
        </div>
    )
}
