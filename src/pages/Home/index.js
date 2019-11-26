import React from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import Sidebar from '../../components/Sidebar'
import Products from '../../components/Products'
import {
  handlerFavorite as handler_favorite,
  handlerFilter as handler_filter,
  addProduct as add_product,
} from '../../store'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { products: props.filterProducts || props.allProducts, showFavorite: false }
  }

  componentWillReceiveProps(newProps) {
    return newProps.filterProducts
      ? this.setState({ products: newProps.filterProducts })
      : this.setState({ products: newProps.allProducts })
  }

  setProducts = product => {
    return this.setState({ products: [...product] })
  }

  setShowFavorite = boolean => {
    return this.setState({ showFavorite: boolean })
  }

  render() {
    const { allProducts, handlerFilter, handlerFavorite, addProduct } = this.props
    const { products, showFavorite } = this.state
    return (
      <div className="g-wrapper">
        <div className="g-container">
          <div className="home__contain">
            <Sidebar
              products={products}
              allProducts={allProducts}
              setProducts={this.setProducts}
              handlerFilter={handlerFilter}
              setShowFavorite={this.setShowFavorite}
              showFavorite={showFavorite}
            />
            <Products
              allProducts={allProducts}
              products={products}
              handlerFavorite={handlerFavorite}
              addProduct={addProduct}
              showFavorite={showFavorite}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    allProducts: state.products,
    filterProducts: state.filter,
  }),
  dispatch => ({
    handlerFavorite: product => dispatch(handler_favorite(product)),
    handlerFilter: categoriesId => dispatch(handler_filter(categoriesId)),
    addProduct: productId => dispatch(add_product(productId)),
  })
)(Home)
