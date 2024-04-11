<template>
    <div class="app">
    <header class="title">
      <nuxt-link class="logo" to="/">Nuxt Shopping</nuxt-link>
    </header>
    <h1>main page</h1>
    <div>
      <div>
        <SearchInput 
        v-model="searchKeyword"
        @search="searchProduct"></SearchInput>
      </div>
      <ul>
        <li
        v-for="product in products" :key="product.id" class="item flex"
        @click="moveToDetailPage(product.id)">
          <img class="product-image" :src="product.imageUrl" :alt="product.name">
          <p>{{product.name}}</p>
          <span>${{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="moveTocarPage">장바구니 바로가기</button>
        <!--  @click="routeToCartPage" -->
      </div>
    </div>
    <ProductList></ProductList>
    <Logo/> 
    <Product></Product>
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';
import SearchInput from '../components/SearchInput.vue';
import { fetchProductByKeyword, fetchProducts } from '../api';
import Product from './product.vue';
import Logo from '@/components/NuxtLogo.vue';

export default {
    components:{
        Logo,
        Product,
        ProductList,
        SearchInput,
    },
    async asyncData() {
      const res =  await fetchProducts(); // axios.get('http://localhost:3000/products');
      console.log('res',res);
      // this.products = res.data; // this를 했을 때 컴포넌트에 접근할 수 있는 this가 아님.
      const products = res.data.map((item) => {
        return{
          ...item,
          imageUrl: `${item.imageUrl}?text=${Math.random()}`
        }
      });
      return { products }; // res.data.products
      // return 해주었기 때문에 컴포넌트에서 접근 가능.

    },
    data(){
      return{
        product: [],
        searchKeyword:'',
      }
    },

    async created(){},
    methods:{
      moveToDetailPage(id){
        this.$router.push(`detail/${id}`);
      },
      async searchProduct(){
        const response = await fetchProductByKeyword(this.searchKeyword)
        this.products = response.data.map((item) => ({
          ...item,
          imageUrl: `${item.imageUrl}?text=${Math.random()}`
        })
        )
      },
      moveTocarPage(){
        this.$router.push(`/cart`);
      },
    },
}
</script>

<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>