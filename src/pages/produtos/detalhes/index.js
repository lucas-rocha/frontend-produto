import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
 
export default class DetalhesProdutos extends Component {
    state = {
        produto: {},
    };
 
    componentDidMount() {
        const { id } = this.props.match.params;
 
        fetch(`${process.env.REACT_APP_API_URL}/${id}`)
            .then(produto =>
                produto.json().then(produto => this.setState({ produto }))
            )
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { produto, index } = this.state;
        
        return (
            <div className="produto-info" key={index}>
                <h1>Nome:</h1>
                <h4> {produto.nome} </h4>
                <h1>Preço:</h1>
                <h4> {produto.preco ? produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : ""} </h4>
                <h1>Descricao:</h1>
                <h4> {produto.descricao} </h4>
                <h1>Quantidade em estoque:</h1>
                <h4> {produto.qtd_estoque} </h4>
                <br />
                <div className="produto-buttons">
                    <Link to={`/produtos`}> <button type="button" className="btn btn-primary">Voltar</button> </Link>
                    <Link to={`/editarProduto/${produto.id}`}> <button type="button" className="btn btn-warning">Editar</button> </Link>
                    <Link to={`/deletarProduto/${produto.id}`}> <button type="button" className="btn btn-danger">Excluir</button> </Link> 
                </div>
            </div >
        );
    }
}
