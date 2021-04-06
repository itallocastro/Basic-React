import React from 'react';

export default (props) => {
    const geraValor = () => {
        props.click(Math.random());
    }
    return (
        <div>
            <button onClick={geraValor}>Alterar</button>
        </div>
    )
}
