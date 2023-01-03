import React from 'react'
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';

const API = 'http://api.escuelajs.co/api/v1/products';

const productList = () => {
	const products = useGetProducts(API);

  return (
    <section className="main-container">
			<div className="ProductList">
				{ products.map(product => (
					<ProductItem product={product} key={product.id}/>
				)) }
			</div>
		</section>
  )
}

export default productList