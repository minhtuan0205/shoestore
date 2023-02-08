import Shoes from "../shoes.json";
const fakeAPI = (value) => {
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(value);
    }, 3000);
  });
}

const apiStoreDemo =  {
  getProducts: () => {
    return fakeAPI(Shoes);
  },

  getProduct: (id) => {
    return fakeAPI(Shoes[id]);
  },

  addToCart: (id) => {
    let cart = localStorage.getItem("cart")
      ? Array.from(localStorage.getItem("cart"))
      : [];
    const indexItem = cart.indexOf((x) => x.id === id);
    cart = [
      ...cart,
      indexItem
        ? {
            ...cart[indexItem],
            quality: cart[indexItem].quality ? cart[indexItem].quality++ : 1,
          }
        : { ...Shoes[id], quality: 1 },
    ];
    localStorage.setItem("cart", cart);
    return fakeAPI(cart);
  },

  getListCart: () => {
    const cart = localStorage.getItem("cart")
      ? Array.from(localStorage.getItem("cart"))
      : [];
    return fakeAPI(cart);
  },
};

export default apiStoreDemo
