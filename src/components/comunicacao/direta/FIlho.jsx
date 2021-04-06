import React from 'react';

export default (props) => {
    return (
        <div>
            <h3>Componente Filho</h3>
            <h4>{props.children} - {props.sobrenome}</h4>
        </div>
    )
}
