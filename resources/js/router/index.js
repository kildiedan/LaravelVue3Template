import {createRouter, createWebHistory} from 'vue-router'

import { useAuthStore } from '../store/auth.js';

import OverviewCategory from '../pages/categorieën/Overview.vue'
import EditCategory from '../pages/categorieën/edit.vue'
import CreateCategory from '../pages/categorieën/create.vue'

import OverviewTicket from '../pages/ticket/Overview.vue'
import AssignTicket from '../pages/ticket/assign.vue'
import CreateTicket from '../pages/ticket/create.vue'
import EditTicket from '../pages/ticket/edit.vue'
import ShowTicket from '../pages/ticket/show.vue'

import EditResponse from '../pages/response/edit.vue'

import OverviewUser from '../pages/user/userhome.vue'
// import Login from '../pages/auth/login.vue'
// import Register from '../pages/auth/register.vue'



export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
   routes: [
    { path: '/', redirect: {name: 'ticket'} },
  { path: '/tickets', name: 'ticket', component: OverviewTicket },
  { path: '/ticket/assign', name: 'ticketAssign', component: AssignTicket},
  { path: '/ticket/edit/:id', name: 'ticketEdit', component: EditTicket},
  { path: '/ticket/create', name: 'ticketCreate', component: CreateTicket},
  { path: '/ticket/show/:id', name: 'ticketShow', component: ShowTicket},

  { path: '/category', name: 'category', component: OverviewCategory },
  { path: '/category/edit/:id', name: 'categoryEdit', component: EditCategory },
  { path: '/category/create', name: 'categoryCreate', component: CreateCategory },

  { path: '/response/edit/:id', name: 'responseEdit', component: EditResponse },

  { path: '/user', name: 'userHome', component: OverviewUser },
  // { path: '/account/login', name: 'login', component: Login },
  // { path: '/account/register', name: 'register', component: Register },
  
]
});



// router.beforeEach(async (to) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/account/login'];
//   const authRequired = !publicPages.includes(to.path);
//   const auth = useAuthStore();

//   if (authRequired && !auth.user) {
//       auth.returnUrl = to.fullPath;
//       return '/account/login';
//   }
// });