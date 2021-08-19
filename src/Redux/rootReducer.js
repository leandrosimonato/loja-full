import { combineReducers } from 'redux';
import productsReducer from './Produtos/produtos.reducer';
import usuarioReducer from './Usuario/usuario.reducer';


export default combineReducers({
    user: usuarioReducer,
    productsData: productsReducer
});