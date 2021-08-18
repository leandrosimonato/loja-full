import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SairoutUsuarioComeco } from '../Redux/Usuario/usuario.acao';

import Cabecalho from '../components/Cabecalho';
import VerticalNav from './../components/VerticalNav';
import Rodape from '../components/Rodape';

const DashBoardLayout = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(SairoutUsuarioComeco());
  };

  return (
    <div className="dashboardLayout">
      <Cabecalho {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/dashboard">
                  Home
                </Link>
              </li>
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  Sair
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default DashBoardLayout;