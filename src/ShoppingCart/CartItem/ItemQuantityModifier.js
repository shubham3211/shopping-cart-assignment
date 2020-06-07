import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import '../ShoppingCart.css';
import { useSelectedProductContext }  from '../../ShoppingCartContext';  

const modifyItemQuantity = (products, product, incrementProduct) => {
  let tempProducts = {...products}
  if(incrementProduct){
    tempProducts[product.id].count++;
  }else{
    if(tempProducts[product.id].count !== 1){
      tempProducts[product.id].count--;
    }
  }
  localStorage.setItem("products", JSON.stringify(tempProducts));
  return tempProducts;
}

const ItemQuantityModifier = ({setDeleteButtonHoverClass, product}) => {
  const [classes, setClasses] = useState(["delete-button"]);
  const [isDisabled, setIsDisabled] = useState(product.count <= 1 ? true : false);
  useEffect(() => {
    product.count <= 1 ? setIsDisabled(true) : setIsDisabled(false);
  }, [product.count])
  let selectProduct = useSelectedProductContext();
  return (
    <Grid 
      container 
      spacing={1} 
      style={{position: 'relative'}}>
      <Grid 
        item
        style={{position: 'absolute', right: '5px'}}
        className={classes.join(" ")}
        onMouseOver={() => {
          setClasses((classes) => [...classes, "delete-button-hover"]);
          setDeleteButtonHoverClass((classes) => [...classes, "delete-button-hover-text-decor"])
        }}
        onMouseOut={() => {
          setClasses((classes) => [...classes.slice(0, 1)])
          setDeleteButtonHoverClass(() => [])
        }}
        onClick={() => selectProduct((products) => {
          delete products[product.id];
          localStorage.setItem("products", JSON.stringify(products))
          return {...products};
        })}>
      </Grid>
      <Grid item xs={12}  style={{marginTop: '20px', marginBottom: '10px'}} className="product-price">
        $ {product.price}
      </Grid>
      <Grid item xs={12}>
        <button 
          className="quantity-button" 
          onClick={() => {
            selectProduct((products) => modifyItemQuantity(products, product, true))
          }}>+</button>
        <button 
          className="quantity-button" 
          disabled={isDisabled}
          onClick={
            () => {
              selectProduct(products => modifyItemQuantity(products, product, false))
            }
          }>-</button>
      </Grid>
    </Grid>
  );
}
 
export default React.memo(ItemQuantityModifier);