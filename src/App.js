import React from "react";
import Cabecalho from './components/Cabecalho'
import Paginahome from './paginas/Paginahome'
import './default.scss'



function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <div className="main">
        <Paginahome/>
      </div>      
    </div>
  );
}

export default App;
