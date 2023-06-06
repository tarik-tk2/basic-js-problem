const submitProduct = () => {
  const productInput = document.getElementById("product-input");
  const quantityInput = document.getElementById("quantity-input");
  const product = productInput.value;
  const quantity = quantityInput.value;
  displayProduct(product, quantity);
  setStorage(product, quantity);
  productInput.value = " ";
  quantityInput.value = " ";
};

const displayProduct = (product, quantity) => {
  const container = document.getElementById("product-container");
  const createLi = document.createElement("li");
  createLi.innerText = `Name:${product} quantity:${quantity}`;
  container.appendChild(createLi);
};

const getLocalStorageData = () => {
  let cart = {};
  const storeCart = localStorage.getItem("cart");
  if (storeCart) {
    cart = JSON.parse(storeCart);
  }
  return cart;
};
const setStorage = (product, quantity) => {
  const cart = getLocalStorageData();
  cart[product] = quantity;

  const stringyCart = JSON.stringify(cart);

  localStorage.setItem("cart", stringyCart);
};
const storeDataDisplay = () => {
  const cart = getLocalStorageData();
  for (const key in cart) {
    displayProduct(key, cart[key]);
  }
};
storeDataDisplay();
