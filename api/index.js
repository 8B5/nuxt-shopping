import axios from 'axios'


const instance = axios.create({
  baseURL: process.env.baseURL, // 'http://localhost:3000',
})

function fetchProductById(id){
  return instance.get(`products/${id}`)
}

function fetchProductByKeyword(keyword){
  return instance.get(`/products`,{
    params:{
      name_like : keyword,
    }
  });
  // /products?name_like=${keyword}
}

// cart 조회
function fetchCartItem(){
  return instance.get('/carts')
}
// cart 저장
function createCartItem(cartItem){
  return instance.post('/carts', cartItem)
}

export {fetchProductById, fetchProductByKeyword, fetchCartItem, createCartItem}