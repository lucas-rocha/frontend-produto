import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produto: [],
      erro: null
    }
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then(produto => 
        produto.json().then(produto => this.setState({ produto }))
      )
      .catch(erro => this.setState({ erro }));
  }


  render() {
    const { produto } = this.state;
    return (
      <div className="produto-list">
        <Link to={`/criarProduto`}> <button type="button" className="btn btn-success">Novo</button> </Link>
        <br /><br />

        <table className="table table-hover">
          <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">preco</th>
              </tr>
          </thead>
          <tbody>
              {produto.map((produto, index) => (
                  <tr key={index}>
                      <th scope="row">{produto.id}</th>
                      <td>{produto.nome}</td>
                      <td>{produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                      <td> <Link to={`/produtos/${produto.id}`}> <button type="button" className="btn btn-primary">Detalhes</button> </Link> </td>
                      <td> <Link to={`/editarProduto/${produto.id}`}> <button type="button" className="btn btn-warning">Editar</button> </Link> </td>
                      <td> <Link to={`/deletarProduto/${produto.id}`}> <button type="button" className="btn btn-danger">Excluir</button> </Link> </td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
    );

    
  }
}