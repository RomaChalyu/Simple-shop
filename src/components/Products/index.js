import React from 'react'
import './styles.scss'
import Product from '../Product'

const Products = props => {
  const { products, handlerFavorite, addProduct, allProducts, showFavorite } = props

  const toggleFavorites = id => {
    const myProduct = allProducts.find(product => product.id === id)
    myProduct.isFavorite = !myProduct.isFavorite
    const newProduct = allProducts.map(product => {
      return product.id === id ? myProduct : product
    })
    handlerFavorite(newProduct)
  }

  return (
    <div className="products">
      {products.length ? (
        products.map(product => {
          const { id, title, description, image, price, isFavorite } = product

          return (
            <Product
              key={id}
              id={id}
              title={title}
              description={description}
              src={image}
              price={price}
              isFavorite={isFavorite}
              toggleFavorites={toggleFavorites}
              addProduct={addProduct}
              showFavorite={showFavorite}
            />
          )
        })
      ) : (
        <h2>Wish list is empty</h2>
      )}
    </div>
  )
}

export default Products
