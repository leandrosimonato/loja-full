import React from 'react';
import Cabecalho from './../components/Cabecalho';
import Rodape from './../components/Rodape';

const LayoutPaginaHome = props => {
    return(
        <div className="fullheight">
            <Cabecalho {...props}/>
            {props.children}
            <Rodape/>
        </div>
        
    );
};

export default LayoutPaginaHome;