import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import { useSelector, useDispatch } from 'react-redux'
import { actionsCart } from '../../store/cart/actions'
import { RootState } from '../../store/rootReducer'

export const Cart = () => {
  const dispatch = useDispatch()

  const cart = useSelector((state: RootState) => state.cartState.cart)
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
            <Grid item xs={12} sm={6} key={item.id}>
              <Paper elevation={14}>
                <Box textAlign='center' py={1}>
                  <Typography variant='h4'>{item.name}</Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Typography variant='h5' color='textPrimary'>
                      Name:
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant='h6' component='h2' color='textSecondary'>
                      {item.price}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Typography variant='h5' color='textPrimary'>
                      Amount:
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant='h6' component='h2' color='textSecondary'>
                      {item.amount}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Button
                  size='small'
                  color='primary'
                  onClick={() => onDeleteItem(item.id)}>
                  delete
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs>
        <Divider />
      </Grid>
    </Grid>
  )
}
