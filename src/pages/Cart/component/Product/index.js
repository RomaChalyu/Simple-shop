import React from 'react'
import '../../styles.scss'

const Product = props => {
  const { title, src, count, price, id, incProduct, decProduct, removeProduct } = props
  const image = {
    background: `url(${src})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <div className="product-cart">
      <div className="product-cart-desktop">
        <div className="table-title product-image table-title--width" style={image} />

        <p className="table-title">{title}</p>
        <p className="table-title table-title--width">
          <button type="button" className="btn-count" onClick={() => decProduct(id)}>
            -
          </button>
          <span className="count-text">{count}</span>
          <button type="button" className="btn-count" onClick={() => incProduct(id)}>
            +
          </button>
        </p>
        <p className="table-title">{price}</p>
        <div className="table-title wrap_icon">
          <button type="button" className="cart-icon" onClick={() => removeProduct(id)} />
        </div>
      </div>
      <div className="product-cart-mobile">
        <div className="table-title product-image table-title--width" style={image} />
        <div className="cart-mobile-info">
          <p className="table-title">{title}</p>
          <p className="table-title table-title--width">
            <button type="button" className="btn-count" onClick={() => decProduct(id)}>
              -
            </button>
            <span className="count-text">{count}</span>
            <button type="button" className="btn-count" onClick={() => incProduct(id)}>
              +
            </button>
          </p>
          <p className="table-title">{price}</p>
          <div className="table-title wrap_icon">
            <button type="button" className="cart-icon" onClick={() => removeProduct(id)} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Product
