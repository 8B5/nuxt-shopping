<template>
  <div> 
    {{products}}
  </div>
</template>

<script>
import axios from 'axios';
export default {
   // asyncData()는 pages에서 정의한 컴포넌트에서만 쓸 수 있음
    async asyncData() {
      const res =  await axios.get('http://localhost:3000/products');
      console.log('res',res);
      // this.products = res.data; // this를 했을 때 컴포넌트에 접근할 수 있는 this가 아님.
      const products = res.data;
      return { products }; // res.data.products
      // return 해주었기 때문에 컴포넌트에서 접근 가능.

    },
}
</script>

<style>

</style>