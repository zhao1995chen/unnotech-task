import { createRouter, createWebHashHistory } from 'vue-router'
import BookList from '../components/BookList.vue'
import BookDetail from '../components/BookDetail.vue'

const routes = [
  {
    path: '/books',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/books/:id',
    name: 'BookDetail',
    component: BookDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes 
})

export default router