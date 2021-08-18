import React from 'react';
import Cabecalho from './../components/Cabecalho';
import Rodape from './../components/Rodape';

const LayoutPrincipal = props => {
    return(
        <div>
            <Cabecalho {...props} />
            <div className="main">
                {props.children}
            </div>
            <Rodape/>
        </div>
        
    );
};

export default LayoutPrincipal;