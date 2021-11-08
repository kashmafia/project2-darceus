import React from 'react';
import { Grid } from '@material-ui/core';

import chair from './images/chair.jpeg';
import Product from './Product/Product';

const products = [
    {
        id: 1,
        name: 'chair',
        price: 1000.00,
        description: 'Ergonomic chair',
        image: chair
    }
];

const Products = () => {
    return (
        <main>
        <Grid container jusify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )

}

export default Products;