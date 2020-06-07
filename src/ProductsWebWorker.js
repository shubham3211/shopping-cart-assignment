// this.onmessage((products) => {
// })
export default function() {
  this.addEventListener('message', (products) => {
    console.log("in product web worker")
    let productHash = {};
    products.products.forEach(product => {
      product.availableSizes.forEach((size) => {
        product.count = 0;  
        productHash[size] ? productHash[size].push(product) : productHash[size] = [product];
      })
    })
    this.postMessage(productHash);
    // console.log("in product web worker")
    // let productHash = {};
    // products.products.forEach(product => {
    //   product.availableSizes.forEach((size) => {
    //     product.count = 0;
    //     productHash[size] ? productHash[size].push(product) : productHash[size] = [product];
    //   })
    // })
    // return productHash;
    
  })
}