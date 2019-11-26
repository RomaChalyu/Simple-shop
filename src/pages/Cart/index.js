import React from 'react'
import { connect } from 'react-redux'
import Product from './component/Product'
import './styles.scss'
import { incCountProduct, decCountProduct, removeProduct as remove } from '../../store'

const Cart = props => {
  const { cartProducts, incProduct, decProduct, removeProduct } = props
  const totalAmount = cartProducts.reduce((acc, product) => {
    return acc + parseInt(product.price, 0) * product.count
  }, 0)

  return (
    <div>
      <h1 className="title-cart">Cart</h1>
      {cartProducts.length ? (
        <div className="wrapper__cart-table">
          <div className="cart-table">
            <div className="table-header">
              <p className="table-title table-title--width">IMAGE</p>
              <p className="table-title">NAME</p>
              <p className="table-title table-title--width">COUNT</p>
              <p className="table-title">PRICE</p>
              <p className="table-title">DELETE</p>
            </div>
            {cartProducts.map(product => {
              const { id, title, image, count, price } = product
              return (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  src={image}
                  count={count}
                  price={price}
                  incProduct={incProduct}
                  decProduct={decProduct}
                  removeProduct={removeProduct}
                />
              )
            })}
          </div>
          <h3 className="title-cart">{`Total amount of the order: ${totalAmount} $`}</h3>
        </div>
      ) : (
        <div className="wrapper__image">
          <div className="image-empty-cart" />
        </div>
      )}
    </div>
  )
}

export default connect(
  state => ({
    cartProducts: state.cart,
  }),
  dispatch => ({
    incProduct: productId => dispatch(incCountProduct(productId)),
    decProduct: productId => dispatch(decCountProduct(productId)),
    removeProduct: productId => dispatch(remove(productId)),
  })
)(Cart)
