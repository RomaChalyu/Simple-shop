import React, { useState } from 'react'
import './styles.scss'

let categoriesFilter = [
  { name: 'Hoody', id: 110033, checked: false },
  { name: 'Jacket', id: 110044, checked: false },
  { name: 'Jeans', id: 110055, checked: false },
  { name: 'T-shirt', id: 110066, checked: false },
  { name: 'T-sweater', id: 110077, checked: false },
  { name: 'Show all categories', id: 110000, checked: true },
]

const Sidebar = props => {
  const [categories, setCategories] = useState([])
  const { allProducts, setProducts, setShowFavorite, showFavorite, products } = props
  const toggleFavorite = boolean => {
    setShowFavorite(!boolean)
    if (boolean) return setProducts(allProducts)

    const favoriteProducts = products.filter(product => product.isFavorite)
    return setProducts(favoriteProducts)
  }

  const clearFilter = () => {
    categoriesFilter = categoriesFilter.map(category => {
      return category.id === 110000
        ? { ...category, checked: true }
        : { ...category, checked: false }
    })
    props.handlerFilter([])
    setCategories([])
  }

  const showCategory = category => {
    if (category.id === 110000) return clearFilter()
    let countIncludedFilters = 0
    categoriesFilter = categoriesFilter.map(categoryFilter => {
      if (categoryFilter.id === 110000) {
        categoryFilter.checked = !countIncludedFilters
      } else if (categoryFilter.id === category.id) {
        categoryFilter.checked = !categoryFilter.checked
      }
      if (categoryFilter.checked) countIncludedFilters += 1
      return categoryFilter
    })
    if (countIncludedFilters === 5) {
      categoriesFilter = categoriesFilter.map(categoryFilter => {
        categoryFilter.checked = categoryFilter.id === 110000
        return categoryFilter
      })
      props.handlerFilter([])
      return setCategories([])
    }
    const filterId = category.checked
      ? [...categories, category.id]
      : categories.filter(id => id !== category.id)

    props.handlerFilter(filterId)
    return setCategories(filterId)
  }

  return (
    <div className="sidebar">
      <div className="block__button">
        {categories.length ? <div className="toggle-show" /> : ''}
        <button
          className={`btn ${showFavorite ? 'btn-active' : ''}`}
          onClick={() => toggleFavorite(showFavorite)}
          type="button">
          Show Favorite
        </button>
      </div>
      <h3 className="title-category">Show Category</h3>
      <div className="block__filter">
        {showFavorite ? <div className="toggle-show" /> : ''}
        {categoriesFilter.map(category =>
          category.id === 110000 && category.checked ? (
            <p key={category.id} className="category-info">
              All categories shown
            </p>
          ) : (
            <label className="checkbox" key={category.id}>
              <input
                onChange={() => showCategory(category)}
                type="checkbox"
                checked={category.checked}
                name={category.name}
              />
              <p className="checkbox__text">{category.name}</p>
            </label>
          )
        )}
      </div>
    </div>
  )
}

export default Sidebar
