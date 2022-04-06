import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetailBeritaView from '../views/DetailBeritaView.vue'
import DescView from '../views/DescView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/berita'
  },
  {
    path: '/berita',
    component: DescView,
    children: [
      {
        path: '',
        name: 'Berita',
        component: Home
      },
      {
        path: '/:slug',
        name: 'Detail Berita',
        component: DetailBeritaView
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
