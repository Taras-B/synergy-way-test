import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import { RootState } from '../../store/rootReducer'
import { actionsCart } from '../../store/cart/actions'
import { ProductT } from '../../store/products/reducer'

const useStyles = makeStyles({
  root: {
    maxWidth: 460,
  },
  wrapper: {
    marginTop: 20,
  },
  cardHeader: { textAlign: 'center' },
})

export const Products = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const products = useSelector((state: RootState) => state.productState.data)

  const onSendCart = (pizza: ProductT) => {
    let addItem = { id: pizza.id, name: pizza.name, price: pizza.price }

    dispatch(actionsCart.add(addItem))
    history.push('/cart')
  }
  return (
    <Grid container justify='center' spacing={3} className={classes.wrapper}>
      {products.map((el) => (
        <Grid key={el.id} item xs={12} md={6} sm={6} className={classes.root}>
          <Card variant='elevation'>
            <CardHeader title={el.name} className={classes.cardHeader} />

            <Divider />
            <CardContent>
              <Typography variant='h6' color='textSecondary'>
                Price: {el.price}
              </Typography>
              <Divider />
              <Grid container>{el.label}</Grid>
              <Divider />
            </CardContent>
            <CardActions>
              <Button color='primary' size='small' onClick={() => onSendCart(el)}>
                add to cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
