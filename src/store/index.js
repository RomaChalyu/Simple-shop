import { createStore } from 'redux'

const HANDLER_FAVORITE = 'HANDLER_FAVORITE'
const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const HANDLER_FILTER = 'HANDLER_FILTER'
const INC_COUNT_PRODUCT = 'INC_COUNT_PRODUCT'
const DEC_COUNT_PRODUCT = 'DEC_COUNT_PRODUCT'

const initialState = {
  products: [
    {
      id: 11700,
      title: `hoody`,
      description:
        'Standard Collar, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ',
      image: require('../images/hoody-1.jpeg'),
      price: '60 $',
      isFavorite: false,
      categoryID: 110033,
    },
    {
      id: 11701,
      title: 'hoody',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      image: require('../images/hoody-2.jpeg'),
      price: '64 $',
      isFavorite: false,
      categoryID: 110033,
    },
    {
      id: 11702,
      title: 'hoody warm',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      image: require('../images/hoody-warm-1.jpeg'),
      price: '80 $',
      isFavorite: false,
      categoryID: 110033,
    },
    {
      id: 11703,
      title: 'hoody warm',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      image: require('../images/hoody-warm-2.jpeg'),
      price: '50 $',
      isFavorite: false,
      categoryID: 110033,
    },
    {
      id: 11704,
      title: `jacket`,
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: require('../images/jacket-1.jpeg'),
      price: '90 $',
      isFavorite: false,
      categoryID: 110044,
    },
    {
      id: 11705,
      title: 'jacket',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: require('../images/jacket-2.jpeg'),
      price: '92 $',
      isFavorite: false,
      categoryID: 110044,
    },
    {
      id: 11706,
      title: 'jacket sport',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: require('../images/jacket-sport-1.jpeg'),
      price: '100 $',
      isFavorite: false,
      categoryID: 110044,
    },
    {
      id: 11707,
      title: 'jacket sport',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: require('../images/jacket-sport-2.jpeg'),
      price: '110 $',
      isFavorite: false,
      categoryID: 110044,
    },
    {
      id: 11708,
      title: `jeans`,
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: require('../images/jeans-1.jpeg'),
      price: '40 $',
      isFavorite: false,
      categoryID: 110055,
    },
    {
      id: 11709,
      title: 'jeans',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: require('../images/jeans-2.jpeg'),
      price: '50 $',
      isFavorite: false,
      categoryID: 110055,
    },
    {
      id: 11710,
      title: 'jeans warmed',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      image: require('../images/jeans-warmed-1.jpeg'),
      price: '55 $',
      isFavorite: false,
      categoryID: 110055,
    },
    {
      id: 11711,
      title: 'jeans warmed',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      image: require('../images/jeans-warmed-2.jpeg'),
      price: '60 $',
      isFavorite: false,
      categoryID: 110055,
    },
    {
      id: 11712,
      title: `polo t-shirt`,
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: require('../images/polo-t-shirt-1.jpeg'),
      price: '30 $',
      isFavorite: false,
      categoryID: 110066,
    },
    {
      id: 11713,
      title: 'polo t-shirt',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: require('../images/polo-t-shirt-2.jpeg'),
      price: '30 $',
      isFavorite: false,
      categoryID: 110066,
    },
    {
      id: 11714,
      title: 'T-shirt',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      image: require('../images/T-shirt-1.jpeg'),
      price: '33 $',
      isFavorite: false,
      categoryID: 110066,
    },
    {
      id: 11715,
      title: 'T-shirt',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      image: require('../images/T-shirt-2.jpeg'),
      price: '32 $',
      isFavorite: false,
      categoryID: 110066,
    },
    {
      id: 11716,
      title: `sweater`,
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: require('../images/sweater-1.jpeg'),
      price: '44 $',
      isFavorite: false,
      categoryID: 110077,
    },
    {
      id: 11717,
      title: 'sweater',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: require('../images/sweater-2.jpeg'),
      price: '50 $',
      isFavorite: false,
      categoryID: 110077,
    },
    {
      id: 11718,
      title: 'warm sweater',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: require('../images/warm-sweater-1.jpeg'),
      price: '60 $',
      isFavorite: false,
      categoryID: 110077,
    },
    {
      id: 11719,
      title: 'warm sweater',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: require('../images/warm-sweater-2.jpeg'),
      price: '64 $',
      isFavorite: false,
      categoryID: 110077,
    },
  ],
  filter: null,
  cart: [],
}

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case HANDLER_FAVORITE: {
      return { ...state, products: action.product }
    }
    case ADD_PRODUCT: {
      const pIndex = state.cart.findIndex(p => p.id === action.productId)
      const product = state.products.find(prod => prod.id === action.productId)
      const newCart = [...state.cart]
      if (state.cart.length === 0 || pIndex === -1) {
        newCart.push({ ...product, count: 1 })
      } else {
        const count = newCart[pIndex].count || 0
        newCart[pIndex].count = count + 1
      }

      return { ...state, cart: newCart }
    }
    case INC_COUNT_PRODUCT: {
      const newCart = [...state.cart]
      const pIndex = state.cart.findIndex(p => p.id === action.productId)
      newCart[pIndex].count += 1
      return { ...state, cart: newCart }
    }

    case DEC_COUNT_PRODUCT: {
      const newCart = [...state.cart]
      const pIndex = state.cart.findIndex(p => p.id === action.productId)
      newCart[pIndex].count =
        newCart[pIndex].count > 1 ? (newCart[pIndex].count -= 1) : newCart.splice(pIndex, 1)
      return { ...state, cart: newCart }
    }
    case REMOVE_PRODUCT: {
      const newCart = [...state.cart]
      const pIndex = state.cart.findIndex(p => p.id === action.productId)
      newCart.splice(pIndex, 1)
      return { ...state, cart: newCart }
    }

    case HANDLER_FILTER: {
      if (action.categoriesId.length === 0) return { ...state, filter: null }
      const { products } = state
      const newFilter = []
      action.categoriesId.map(id => {
        for (let i = 0; i < products.length; i += 1) {
          if (products[i].categoryID === id) newFilter.push(products[i])
        }
        return null
      })
      return { ...state, filter: newFilter }
    }

    default:
      return state
  }
}

export const handlerFavorite = product => ({ type: HANDLER_FAVORITE, product })
export const addProduct = productId => ({ type: ADD_PRODUCT, productId })
export const decCountProduct = productId => ({ type: DEC_COUNT_PRODUCT, productId })
export const removeProduct = productId => ({ type: REMOVE_PRODUCT, productId })
export const incCountProduct = productId => ({ type: INC_COUNT_PRODUCT, productId })
export const handlerFilter = categoriesId => ({ type: HANDLER_FILTER, categoriesId })
const store = createStore(reduser)
export default store
