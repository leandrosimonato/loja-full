import React from 'react'
import './styles.scss'
import Logo from './../../assets/livros.png'
import { Link } from 'react-router-dom'

const Cabecalho  = props => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Loja_js"/>
          </Link>
        </div>
      <div className="calltoAction" >
        <ul>
          <li>
            <Link to="/registrar">
            Registrar | Cadastrar
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </header>
  )
}

export default Cabecalho
