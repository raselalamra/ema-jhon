import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  const productData = await fetch("products.json");
  const products = await productData.json();

  const savedCart = getStoredCart();
  const initialCart = []
  for (const id in savedCart) {
    const addedProduct = products.find(product => product.id === id)
    // console.log(addedProduct)
    if(addedProduct){
        const quantity = savedCart[id];
        addedProduct.quantity = quantity
        initialCart.push(addedProduct)
    }
  }
  return {products, initialCart};
};
