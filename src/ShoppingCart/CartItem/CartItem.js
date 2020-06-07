import React, { useState } from 'react'
import { Grid, Box, Typography } from '@material-ui/core';
import ItemQuantityModifier from './ItemQuantityModifier';

const CartItem = ({product}) => {
  let [deleteButtonHoverClass, setDeleteButtonHoverClass] = useState([]);
  return (
    <Grid container className={"cart-item-product "+deleteButtonHoverClass.join(" ")}>
        <Grid item xs={12}>
      <Box p={2} pr={3}>
          <Grid container>
            <Grid item xs={2}>
              <img src={require(`../../static/products/${product.sku}_2.jpg`)} style={{width: "100%"}} alt=""/>
            </Grid>
            <Grid item xs={8}>
              <Box pl={1} pr={2} mt={1}>
                <Typography style={{color: '#ececec'}} className={deleteButtonHoverClass.join(" ")}>
                  {product.title}
                </Typography>
                <Typography style={{color: '#5b5a5e'}} className={deleteButtonHoverClass.join(" ")}>
                  {product.availableSizes[0]} | {product.style} 
                </Typography>
                <Typography style={{color: '#5b5a5e'}} className={deleteButtonHoverClass.join(" ")}>
                  Quantity: {product.count}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <ItemQuantityModifier product={product} setDeleteButtonHoverClass={setDeleteButtonHoverClass} />
            </Grid>
          </Grid>
    </Box>
        </Grid>
      </Grid>
  );
}
 
export default CartItem;