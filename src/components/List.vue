<template>
  <div v-for="(a, i) in blogData" :key="i">
    <h5 @click="goDetail(i)">{{ blogData[i].title }}</h5>
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
  methods: {
    goDetail() {

    }
  },

}
</script>

<style>

</style>