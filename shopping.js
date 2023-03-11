const addProduct = () => {
  // console.log("Please provide a item");
  const productField = document.getElementById('product-name');
  const quantityField = document.getElementById('product-quantity');
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = " ";
  quantityField.value = " ";
  console.log(product,quantity);
  displayProduct(product,quantity);
  saveProductTotalStorage(product,quantity);

}

const displayProduct = (product, quantity) => {
  const ul = document.getElementById('product-container');
  const li = document.createElement('li');
  li.innerText = `${product}: ${quantity}` 
  ul.appendChild(li)

}


const getstorageShopingCart = () => {
  let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
      cart = JSON.parse(storedCart);
    }
    return cart;
    
}


saveProductTotalStorage = (product,quantity) => {
   const cart = getstorageShopingCart();
   cart[product] = quantity;
   const cartStringfied = JSON.stringify(cart);
   localStorage.setItem('cart', cartStringfied);
   console.log(cart);
}

const displayProductsFromLocalStorage = () => {
  const saveCart = getstorageShopingCart();
  console.log(saveCart);
  for(const product in saveCart){
    const quantity = saveCart[product];
    console.log(product, quantity);
    displayProduct(product,quantity)
  }
}
displayProductsFromLocalStorage();