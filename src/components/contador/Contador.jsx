import React, {useState} from 'react';
import Display from './Display';
export default class Contador extends React.Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }
    increment = () => {
        console.log('entrou')
        this.setState({
            valor: this.state.valor + this.state.passo
        })

    }
    decrement = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }
    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h4>Passo: {this.state.passo}</h4>
                <input type="text" value={this.state.passo} onChange={e => this.setState({passo: +e.target.value})}/>
                <Display valor={this.state.valor}></Display>

                <div>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
            </div>
        )
    }
}
