import { createWebHistory, createRouter } from "vue-router"
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

const routes = [ // 위에 쓸수록 우선순위
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id",
    // path: "/detail/:id(\\d+)", // 정수만 입력하도록 함. 정규식
    component: Detail,
  },
  {
    path: "/:anything(.*)", // 모든 문자라는 뜻의 정규식
    component: Home, // 보통 404 페이지
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 