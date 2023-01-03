import React from 'react'
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';

const productList = () => {
  return (
    <section className="main-container">
			<div className="ProductList">
				<ProductItem />
			</div>
		</section>
  )
}

export default productList