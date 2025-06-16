import { createRouter, createWebHistory } from 'vue-router'
// import HeaderComponent from "@/components/HeaderComponent.vue";
// import AboutView from '../views/AboutView.vue';
// import ContactView from '@/views/ContactView.vue';
// import MyWorkView from '@/views/MyWorkView.vue';
import HomeView from '@/views/HomeView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      // scroll to element matching the hash after the route is resolved
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            resolve({ el: to.hash });
          } else {
            resolve({ top: 0 });
          }
        }, 300);
      });
    } else {
      // default scroll to top
      return { top: 0 };
    }
  },
});
export default router
