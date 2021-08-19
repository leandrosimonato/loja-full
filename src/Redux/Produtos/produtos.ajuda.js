import { firestore } from './../../firebase/Utilidades'

export const handleAddProduct = product => {
  return new Promise((resolve, reject) => {
    firestore
    .collection('product')
    .doc()
    .set(product)
    .then(() => {
      resolve()
    })
    .catch(err => {
      reject(err)
    })
  })
}

export const handleFetchProducts = () => {
  return new Promise((resolve, reject) => {
    firestore
    .collection('product')
    .get()
    .then(snapshot => {
      const productsArry = snapshot.onAddProductStart.map(doc => {
        return {
          ...doc.data(),
          documentID: doc.id
        }
      })
      resolve(productsArry)
    })
    .catch(err => {
      reject(err)
    })
  })
}

export const handleDeleteProduct = documentID => {
  return new Promise((resolve, reject) => {
    firestore
    .collection('product')
    .doc(documentID)
    .delete()
    .then(snapshot => {
      resolve()
      })
      .catch(err => {
        reject(err)
    })
  })  
}