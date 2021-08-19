import React, { useEffect } from 'react';
import { fetchProductsStart } from './../../Redux/Produtos/produtos.acao'
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products
})

const ProductsResultados = ({}) => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState)
  
    useEffect(() => {
      dispatch (
        fetchProductStart()
    
      )
    },[])
};
  if(!Array.isArray(products)) return null
  if(products.length < 1) {
    return(
        <div className="footer">
              <p>PRODUTO NÃO ENCONTRADO!</p>  
        </div>
    );
  
    return(
        <div className="produtos">
            {products.map((products, pos) => {
              const { 
                productThumbnail,
                productName,
                productPrice
              } = product
              if(!productThumbnail || !productName || typeof === 'indefinido') return null
                return 
            })}
        </div>
    );
  
  }
    
     


export default ProductsResultados;
