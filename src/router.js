import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/components/Main-Component.vue'
import LoginPage from '@/components/LoginPage.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/', component: MainComponent },
  { path: '/login', component: LoginPage },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
