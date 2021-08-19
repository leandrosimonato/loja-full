import { all, call } from 'redux-saga/effects';
import usuarioSagas from './Usuario/usuarioSaga';
import productsSagas from './Products/productsSagas'




export default function* rootSaga(){
    yield all([
        call(usuarioSagas),
        call(productsSagas)

    ])
}