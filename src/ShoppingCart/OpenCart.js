import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { Grid, Box } from '@material-ui/core';
import './ShoppingCart.css';
import CartItem from './CartItem/CartItem';

//see how to use useStyle in material ui

let quantityStyle = {
  bottom: '5px',
  right: '45%',
  color: '#0c0b10',
  position: 'absolute', 
  backgroundColor: '#eabf00',
  borderRadius: '50%',
  textAlign: 'center',
  fontWeight: '700',
  fontSize: '.8em',
  lineHeight: '18px',
  width: '18px',
  height: '18px',
  top: '64px'
}

const getDrawerContent = (productCount, products, setState) => {
  return (
    <Grid container>
      <Grid item xs={12} className="shopping-cart">
        <Grid container id="cart" style={{overflowY: 'scroll', height: window.outerHeight}}>
            <Grid
              item
              className="close-button"
              onClick={() => setState(false)}>
              X
            </Grid>
            <Grid item xs={12} style={{textAlign: "center", position: 'relative'}}>
              <Box pt={5} mb={3}>
                <img src={require('../static/bag-icon.png')} width="40" height="40" alt=""/>
                <Grid style={quantityStyle}>
                  {productCount}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} style={{height: `${Math.max(window.outerHeight, (products.length+2)*132)}px`}}>
              {products.length?  products.map((product) => (
                <Grid key={product.id} container>
                  <Grid item xs={12}>
                    <CartItem product={product} />
                  </Grid>
                </Grid>
              )) : <div className="empty-cart">Add some product in the cart <br/> :)</div>}
            </Grid>
            <Grid
              style={{
                color: 'white',
                position: 'absolute',
                bottom: '0px',
                height: '200px',
                backgroundColor: '#1b1a20',
                width: '100%',
                zIndex: 2
              }}
              item
              xs={12}>
              <Box p={4}>
                <Grid container>
                  <Grid item xs={6} style={{color: '#5b5a5e', lineHeight: '1.5'}}>
                    SUBTOTAL
                  </Grid>
                  <Grid item xs={6} style={{textAlign: "right", fontSize: '22px', color: '#eabf00'}}>
                    $ {Object.values(products).reduce((a, c) => a+(c.price*c.count), 0).toFixed(2)}
                  </Grid>
                  <Grid item xs={12}>
                    <button className="checkout-button" style={{textAlign: "center"}}>
                      checkout
                    </button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const OpenCart = ({state, setState, productCount, products}) => {
  return (
    <Drawer 
      anchor="right" 
      variant={"persistent"}
      open={state}
      onClose={() => setState(false)}
      PaperProps={{
        style: {
          overflow: 'visible',
          backgroundColor: '#1b1a20'
        }
      }}>
      {getDrawerContent(productCount, Object.values(products).sort((a, b) => a.insertionId>b.insertionId ? 1 : -1), setState)}
    </Drawer>
  );
}

export default OpenCart;