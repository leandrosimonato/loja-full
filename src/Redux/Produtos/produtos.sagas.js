import { takeLatest, call, all, put } from 'redux-saga/effects'
import productsTypes from './usuario.tipos';
import { handleAddProduct, handleFetchProducts, handleDeleteProduct } from './produtos.ajuda'
import { auth } from './../../firebase/Utilidades'
import { setProducts, fetchProductsStart } from './produtos.acao'


export function* addProduct({ payload: {
  productCategory,
  productName,
  productThumbnail,
  productPrice
}}) {
  try {
    const timestamp = new Date()
    yield handleAddProduct({
      productCategory,
      productName,
      productThumbnail,
      productPrice,
      productAdminUserUID: auth.currentUser.uid,
      createDate: timestamp,
    })
    yield put(
      fetchProductsStart()
    )
  } catch (err) {

  }

}

export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADICIONAR_NOVO_PRODUTO_COMECO, addProduct)
} 

export function* fetchProducts() {
  try {
    const products = yield handleFetchProducts()
    yield put(
      setProducts(products)
    )
  } catch (err) {

  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_BUSCAR_PRODUTOS_COMECO, fetchProducts)
}

export function* deleteProduct({ payload }) {
  try {
    yield handleDeleteProduct(payload)
    yield put(
      fetchProductsStart()
    )
  } catch (err) {

  }
}

export function* deleteProductStart() {
  
  yield takeLatest(productsTypes.DELETAR_PRODUTOS, deleteProduct)
}

export default function* productsSagas() {
  yield all([
    call(onAddProductStart),
    call(onFetchProductsStart),
    call(deleteProductStart),

  ])
}