import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreatePost from '../views/CreatePost.vue'
import ViewPost from '../views/ViewPost.vue'
import UpdatePost from '../views/UpdatePost.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-post',
    name: 'addPost',
    component: CreatePost
  },
  {
    path: '/view-post/:id',
    name: 'viewPost',
    component: ViewPost
  },
  {
    path: '/update-post/:id',
    name: 'updatePost',
    component: UpdatePost
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
