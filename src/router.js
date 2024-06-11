import { createWebHistory, createRouter } from "vue-router"
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import Author from './components/Author.vue'
import Comment from './components/Comment.vue'

// nested routes 만들기
// 1. routes 안에 children: [] 생성
// 2. children: [] 안에 기존의 routes 와 같은 형식으로 작성(path, component)
// 3. 어디서 보여줄 지 설정. 보통 해당 children의 부모 컴포넌트에서 router-view

const routes = [ // 위에 쓸수록 우선순위
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
    // named view : 컴포넌트에 object 형식으로 작성함으로써 여러개의 컴포넌으틀 보일 수 있음
  },
  {
    path: "/detail/:id",
    // path: "/detail/:id(\\d+)", // 정수만 입력하도록 함. 정규식
    component: Detail,
    children: [ // nested routes
    // nested routes의 path 는 상대경로로 적어줘야 한다
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ],
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