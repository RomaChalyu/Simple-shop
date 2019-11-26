import React from 'react'
import './styles.scss'

const Product = props => {
  const {
    id,
    title,
    description,
    src,
    price,
    toggleFavorites,
    isFavorite,
    addProduct,
    showFavorite,
  } = props
  const image = {
    background: `url(${src})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <div className="product">
      <div className="wrapper__image">
        <div>
          <div className="image-product" style={image} />
        </div>
      </div>
      <p>{title}</p>
      <p>{description}</p>
      {!showFavorite ? (
        <button
          type="button"
          onClick={() => toggleFavorites(id)}
          className={`btn-favorite ${isFavorite ? 'btn-favorite--active' : ''}`}>
          Add to favorites
        </button>
      ) : (
        ''
      )}
      <p>{price}</p>
      <button className="btn-buy" type="button" onClick={() => addProduct(id)}>
        buy
      </button>
    </div>
  )
}

export default Product
