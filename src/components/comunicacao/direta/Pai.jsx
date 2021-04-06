import React from 'react';
import Filho from "./FIlho";
export default (props) => {
    return (
        <div>
            <Filho {...props}><strong>João</strong></Filho>
            <Filho sobrenome={'Silva'}><strong>Maria</strong></Filho>
            <Filho sobrenome={'Castro'}><strong>Pedro</strong></Filho>
        </div>
    )
}
