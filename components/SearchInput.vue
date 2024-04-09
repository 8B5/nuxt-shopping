<template>
  <div class="input-wrapper flex">
    <input
    type="text" 
    class="search-input"
    :value="searchKeyword"
    @input="$emit('input', $event.target.value)"
    @keyup.enter.exact="$emit('search')">
    <!-- input에 움직임이 있을 때마다 $event.target.value 실행 -->
    <button class="btn" @click="$emit('search')">Search</button>
  </div>
</template>

<script>
export default {
  props: {
    searchKeyword: {
      type: String,
      default: () => ''
    },
  },
}
</script>

<style scoped>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>