import React from 'react';
import products from './data/products.json';
import { Grid } from '@material-ui/core';
import Product from './Product';

let productHash = {};
products.products.forEach(product => {
  product.availableSizes.forEach((size) => {
    product.count = 0;
    productHash[size] ? productHash[size].push(product) : productHash[size] = [product];
  })
})

function getProducts(size, filter, setOpenCart){
  let pros = {};
  for(let item in size){
    productHash[item].forEach((ele) => {
      pros[ele.id]=ele;
    })
  }
  if(Object.keys(size).length===0){
    Object.values(productHash).forEach((product)=> {
      product.reduce((a, c) => {
        a[c.id]=c;
        return a;
      }, pros)
    })
  }

  let products = Object.values(pros).map((ele) => ele);
  if(filter === 'increase'){
    products.sort((a, b) => a.price<b.price ? -1 : 0)
  }else if(filter === 'decrease'){
    products.sort((a, b) => a.price>b.price ? -1 : 0)
  }
  return products.map((product) => (
    <Grid item xs={6} sm={4} md={3} key={product.id}>
        <Product product={product} setOpenCart={setOpenCart} />
    </Grid>
  ))
}
  
const Products = ({size, filter, setOpenCart}) => {
  return (
    <Grid container>
      {getProducts(size, filter, setOpenCart)}
    </Grid>
  );
}
 
export default Products;