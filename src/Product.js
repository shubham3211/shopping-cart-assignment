import React, { useRef } from 'react';
import { Grid, Typography, Box, Button,  } from '@material-ui/core';
import './Product.css';
import { useSelectedProductContext } from './ShoppingCartContext';

const setProducts = (prevProducts, product) => {
  let productLength = Object.keys(prevProducts).length+1;
  if(prevProducts[product.id]){
    prevProducts[product.id].count++
  }else{
    prevProducts[product.id]=product;
    prevProducts[product.id].count=1
    prevProducts[product.id].insertionId = productLength;
  }
  localStorage.setItem('products', JSON.stringify(prevProducts));
  return {...prevProducts};
}

const Product = ({product, setOpenCart}) => {
  const buttonEle = useRef(null);
  const selectProduct = useSelectedProductContext();
  return (
    <Box
      mb={5}
      className="product-hover"
      onClick={() => {
        selectProduct((prevProducts) => setProducts(prevProducts, product))
        setOpenCart(true);
      }}>
      <Grid 
        onMouseEnter={() => buttonEle.current.style.backgroundColor="#eabf00"}
        onMouseLeave={() => buttonEle.current.style.backgroundColor="#1b1a20"}
        container
        style={{position: 'relative'}}>
        <Grid item xs={12}>
          <img style={{width: '100%'}} src={require(`./static/products/${product.sku}_1.jpg`)} alt=""/>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" className="product-title">
            {product.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box mt={2}>
            <Typography align="center">
              {product.currencyFormat} <b><big>{Math.floor(product.price)}</big></b>.{(product.price - Math.floor(product.price)).toFixed(2)}
            </Typography>
            <Typography align="center" color="textSecondary">
              or {product.installments} x<b>{product.currencyFormat}{(parseInt(product.price)/parseInt(product.installments)).toFixed(2)}</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={1}>
            <Button
              variant="contained" 
              size="large" 
              disableRipple 
              disableElevation
              className="button-ele"
              ref={buttonEle}
              style={{backgroundColor: '#1b1a20',
                      color: 'white',
                      width: '100%',
                      borderRadius:'0px',
                      textAlign: "center"
              }}>
              Add to cart
            </Button>
          </Box>
        </Grid>
        {product.isFreeShipping ? <Grid className="free-shipping">
          <small>
            Free Shipping
          </small>
        </Grid>: ''}
      </Grid>
    </Box>
  )
}
 
export default Product;