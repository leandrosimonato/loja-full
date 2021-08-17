import React from 'react'
import './styles.scss'
import Logo from './../../assets/logo.PNG'

const Cabecalho  = props => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Loja_js"/>
        </div>
      </div>
    </header>
  )
}

export default Cabecalho
