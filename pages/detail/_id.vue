<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">장바구니 추가</button>
        <!--  -->
      </div>
    </div>
  </div>
</template>


<script>

import { fetchProductById, createCartItem } from '../../api/index'

export default {

  async asyncData({params}) {
    // const id = this.$route.id; // => params.id asyncData에서는 this를 접근하지 못하기 때문에 params를 받아와서 사용
    const response = await fetchProductById(params.id);
    const product = response.data;
    return{product};
    
  },
  // meta 데이터
  head: {
    title: 'Shopping Item',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `이 상품은 00입니다.`,
      },
    ],
  },
  created(){
    console.log(this.$route);
  },

  methods: {
    async addToCart(){
      const res = await createCartItem(this.product);
      console.log(res);
      await this.$store.commit('addCartItem', this.product);
      this.$router.push('/cart');
    }
  }
}
</script>
<style scoped>
  .container {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
  .product-image {
    width: 500px;
    height: 375px;
  }
  .side-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 220px;
    text-align: center;
    padding: 0 1rem;
  }
</style>
