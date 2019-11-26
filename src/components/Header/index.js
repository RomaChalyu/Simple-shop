import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './styles.scss'

const Header = props => {
  const { cart } = props

  return (
    <div className="header">
      <div className="wrapper__title">
        <h1 className="header__title">Online Clothing Store</h1>
      </div>
      <div className="g-container">
        <div className="wrapper__links">
          <div className="footer__link-block">
            <Link className="header__link" to="/">
              <div className="image-home" />
              home
            </Link>
          </div>
          <div className="footer__link-block">
            <Link className="header__link" to="cart">
              <div>
                {!!cart.length && <div className="count-product">{cart.length}</div>}
                <div className="image-cart" />
              </div>
              cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default connect(state => ({
  cart: state.cart,
}))(Header)
