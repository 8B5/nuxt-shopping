<template>
  <div>
    
  </div>
</template>

<script>
// import axios from 'axios';
// import ProductList from '../components/ProductList.vue';
// import SearchInput from '../components/SearchInput.vue';
// import { fetchProductByKeyword } from '../api';
export default {
    // components:{
    //     ProductList,
    //     SearchInput,
    // },
    // async asyncData() {
    //   const res =  await axios.get('http://localhost:3000/products');
    //   console.log('res',res);
    //   // this.products = res.data; // this를 했을 때 컴포넌트에 접근할 수 있는 this가 아님.
    //   const products = res.data.map((item) => {
    //     return{
    //       ...item,
    //       imageUrl: `${item.imageUrl}?text=${Math.random()}`
    //     }
    //   });
    //   return { products }; // res.data.products
    //   // return 해주었기 때문에 컴포넌트에서 접근 가능.

    // },
    // data(){
    //   return{
    //     product: [],
    //     searchKeyword:'',
    //   }
    // },

    // async created(){},
    // methods:{
    //   moveToDetailPage(id){
    //     console.log(id);
    //     this.$router.push(`detail/${id}`);
    //   },
    //   async searchProduct(){
    //     const response = await fetchProductByKeyword(this.searchKeyword)
    //     this.products = response.data.map((item) => ({
    //       ...item,
    //       imageUrl: `${item.imageUrl}?text=${Math.random()}`
    //     })
    //     )
    //   },
    //   moveTocarPage(){
    //     this.$router.push(`/cart`);
    //   },
    // },
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