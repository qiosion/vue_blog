<template>
  <div v-for="(a, i) in blogData" :key="i">
    <h5>{{ blogData[i].title }}</h5>
    <p>{{ blogData[i].date }}</p>
  </div>
  
</template>

<script>

export default {
  name: 'List',
  props: {
    blogData: Array,

  },
  data() {

  },
}
</script>

<style>

</style>