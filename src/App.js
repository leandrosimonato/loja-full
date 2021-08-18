import { Switch, Route } from 'react-router-dom';
import React from "react";
import Cabecalho from './components/Cabecalho'
import Registrar from './paginas/Registrar'
import Paginahome from './paginas/Paginahome'
import LayoutPrincipal from './layouts/LayoutPrincipal'
import LayoutPaginaHome from './layouts/LayoutPaginaHome'
import Login from './paginas/Login'
import './default.scss'



function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" render={() => { 
            <LayoutPaginaHome>
              <Paginahome/>
            </LayoutPaginaHome>
          }}/>
          <Route path="/registrar" render={() => {
            <LayoutPrincipal>
              <Registrar />
            </LayoutPrincipal>
          }}/>
          <Route path="/login" render={() => {
            <LayoutPrincipal>
              <Login />
            </LayoutPrincipal>
          }}/>
      </Switch>
      <div className="main">
        
      </div>      
    </div>
  );
}

export default App;
