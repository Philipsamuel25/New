import React from "react";
import {Grid} from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from './styles';

const Products = ({products, onAddToCart}) =>{
    const classes = useStyles();
    return (


        <div className="row justify-content-center col-mb-50 mb-0">
            {/* <div className={classes.toolbar} /> */}
            {/* <Grid container justify={'center'} spacing={4}> */}
                {products.map((product) => (
                    // <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                       
                        <Product product={product} key={product.id} onAddToCart={onAddToCart}/>
                       
                    // </Grid>
                ))}
            {/* </Grid> */}
        </div>
        );

}

export default Products
