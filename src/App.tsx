import React from 'react'
import './App.css'
import { Container } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Products } from './pages/Products/Products'
import { Cart } from './pages/Cart/Cart'
import { useDispatch } from 'react-redux'
import { actionsCart } from './store/cart/actions'

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const loadCart = JSON.parse(localStorage.getItem('cart-state') || '')
    console.log(loadCart)

    dispatch(actionsCart.load(loadCart))
  }, [])
  return (
    <div className='App'>
      <Header />
      <Container maxWidth='md'>
        <Switch>
          <Route exact path='/' component={Products} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
