import { fetchCartItem } from "../api";

// constants
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

export const state = () => ({
  cartItems : [],
})

export const mutations = {
  addCartItem(state, cartItem){
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?text=${Math.random()}`
    }
    state.cartItems.push(newCartItem);
  },
  setCartItems(state, cartItems){
    state.cartItems = cartItems
  },
}

export const actions = {
  async [FETCH_CART_ITEMS]({commit}){
    const { data } = await fetchCartItem();
    commit('setCartItems', data.map(item =>({
      ...item,
      imageUrl: `${item.imageUrl}?text=${Math.random()}`
      })
    ));
  },
  // nuxtServerInit은 호출하지 않더라도 자동적으로 nuxt APP이 실행되면서 생성 됨.
  async nuxtServerInit(StoreContext, nuxtContext){
    await StoreContext.dispatch(FETCH_CART_ITEMS); // 아래와 똑같음, 여러개 사용하게 되니까 dispatch 사용해서 불러와서 nuxtServerInit 사용하는게 좋음.
    // const { data } = await fetchCartItem();
    // StoreContext.commit('setCartItems', data.map(item =>({
    //   ...item,
    //   imageUrl: `${item.imageUrl}?text=${Math.random()}`
    //   })
    // ));
  }
}