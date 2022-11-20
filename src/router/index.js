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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
