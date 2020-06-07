import React, { useContext, createContext, useState } from 'react';

const SelectProductContext = createContext();
const GetProductsContext = createContext();

function useSelectedProductContext(){
  let context = useContext(SelectProductContext);
  if(context === undefined){
    throw new Error('useSelectedProductContext must be used inside ShoppingCartContext')
  }
  return context;
}

function useGetProductsContext(){
  let context = useContext(GetProductsContext);
  if(context === undefined){
    throw new Error('useGetProductsContext must be used inside ShoppingCartContext')
  }
  return context;
}

function ShoppingCartContext({children}) {
  let allProducts = {};
  if(localStorage.getItem("products")){
    allProducts = JSON.parse(localStorage.getItem("products"));
  }
  const [products, setProducts] = useState(allProducts);
  return (
    <SelectProductContext.Provider value={setProducts}>
      <GetProductsContext.Provider value={products}>
        {children}
      </GetProductsContext.Provider>
    </SelectProductContext.Provider>
  )
}

export {ShoppingCartContext, useSelectedProductContext, useGetProductsContext};