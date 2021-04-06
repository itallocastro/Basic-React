import React from 'react';
import produtos from '../../data/products';

export default (props) => {
    const getProdutos = () => {
        return produtos.map((produto) => {
            return (<li key={produto.id}>{produto.id} - {produto.nome} - R$ {produto.preco}</li>)
        });
    }
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutos()}
            </ul>
        </div>
    )
}
