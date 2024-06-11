<template>
<!-- 
    현재 url 관련 -> $route
        $route.params.파라미터명 : url 에 입력한 파라미터를 사용하기위해 사용
        $route.fullPath : 전체 url

    페이지 이동 등 라우터 관련 -> $router
        $router.go() : 앞으로 한 페이지 이동
        $router.go(-1) : 뒤로가기
        $router.puth('경로') : 지정 경로로 페이지 이동
-->
  <div>
    <h2>{{ blogData[$route.params.id].title }}</h2>
    <p>{{ blogData[$route.params.id].date }}</p>
    <p>{{ blogData[$route.params.id].content }}</p>
    <router-view></router-view>
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