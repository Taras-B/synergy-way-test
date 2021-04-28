import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { Box } from '@material-ui/core'

import { CartItem } from './components/CartItem'

import { useSelector, useDispatch } from 'react-redux'
import { actionsCart } from '../../store/cart/actions'
import { cartList, totalPriceSelector } from '../../store/cart/selector'

export const Cart = () => {
  const dispatch = useDispatch()

  const cart = useSelector(cartList)
  const totalPrice = useSelector(totalPriceSelector)

  const onDeleteItem = (id: number) => {
    dispatch(actionsCart.delete(id))
  }
  if (cart.length < 1) {
    return (
      <Grid item xs={12}>
        <Box textAlign='center'>
          <Typography variant='h6'>Cart is empty</Typography>
        </Box>
      </Grid>
    )
  }
  return (
    <Grid container justify='center' spacing={3}>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Box mt={4} mb={2} textAlign='center'>
            <Typography variant='h4'>Cart</Typography>
          </Box>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} onDeleteItem={onDeleteItem} />
          ))}
        </Grid>
      </Grid>
      <Grid item xs>
        <Divider />
        <Typography variant='h4'>Total: {totalPrice}</Typography>
      </Grid>
    </Grid>
  )
}
