<template>
  url 에 입력한 파라미터를 사용하기위해 $route.params 사용
  <div>
    <h2>{{ blogData[$route.params.id].title }}</h2>
    <p>{{ blogData[$route.params.id].date }}</p>
    <p>{{ blogData[$route.params.id].content }}</p>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    blogData: Array,
  },

}
</script>

<style>

</style>