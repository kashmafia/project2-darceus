import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'

// TODO: Pass in a "shopping cart" to const Cart
const Cart  = (/*{cart} */)  => {

    // Depending on whether the shopping cart is empty or not, display certain cart content
    const isEmpty = ''/*cart.length == 0 */;

    const EmptyCart = () => (
        <Typography variant="subtitle1">Your Shopping Cart is Empty!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>

                {/* Map the cart here */}

            </Grid>
        </>
    );

    return (
        <Container>
            {/* <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography> */}

        
            {isEmpty ? <EmptyCart/> : <FilledCart/>}
        </Container>


    )
}

export default Cart
