import React from 'react'
import { Route, Switch, Router as BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ErrorPage from '../pages/404'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const customHistory = createBrowserHistory()

const Router = () => {
  return (
    <BrowserRouter history={customHistory}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="*" component={ErrorPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
export default Router
