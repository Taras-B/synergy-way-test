import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { ICart } from '../../../store/cart/types'

interface IProps {
  item: ICart
  onDeleteItem: (id: number) => void
}
export const CartItem = ({ item, onDeleteItem }: IProps) => {
  return (
    <Grid item xs={12} sm={6}>
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
        <Button size='small' color='primary' onClick={() => onDeleteItem(item.id)}>
          delete
        </Button>
      </Paper>
    </Grid>
  )
}
