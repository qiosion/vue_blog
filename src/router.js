import { createWebHistory, createRouter } from "vue-router"
import List from './components/List.vue'

const routes = [
  {
    path: "/list", // 경로
    component: List, // import해온 컴포넌트
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 