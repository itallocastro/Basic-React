import React, {useState} from 'react';
import Sub from './Sub';

export default (props) => {
    const [numero, setNumero] = useState(0);

    const onClicado = (valor) => {
        setNumero(valor);
        console.log(valor);
    }
    return (
        <div>
            <h4>Valor: {numero}</h4>
            <Sub click={onClicado}></Sub>
        </div>
    )
}
