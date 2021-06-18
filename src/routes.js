import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/produtos/main';
import DetalhesProdutos from './pages/produtos/detalhes';
import CriarProduto from './pages/produtos/criar';
import EditarProduto from './pages/produtos/editar';
import DeletarProduto from './pages/produtos/deletar';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/produtos" component={Main} />
      <Route path="/produtos/:id" component={DetalhesProdutos} />
      <Route path="/criarProduto" component={CriarProduto} />
      <Route path="/editarProduto/:id" component={EditarProduto} />
      <Route path="/deletarProduto/:id" component={DeletarProduto} />
    </Switch>
  </BrowserRouter>
);

export default Routes;