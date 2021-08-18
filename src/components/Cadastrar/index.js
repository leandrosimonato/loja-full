import React from 'react'
import './styles.scss'
import Botao from './../Formularios/Botao'

const Cadastrar = props => {
  return (
    <div className="cadastrar">
      <div className="wrap">
        <h2>
          Login|Entrar
        </h2>
        <div className="formwarp">
          <form>
            <div className="socialSignin">
              <div className="row">
                <Botao>
                  Com Google
                </Botao>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default Cadastrar
