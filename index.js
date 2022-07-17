import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = { template: '<div>Home</div>' };
const Foo = { template: '<div>Foo</div>' };
const Login = { template: '<div>Login</div>' };
const Login1 = { template: '<div>Login</div>' };

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/home', name: 'home', component: Home },
    { path: '/foo', name: 'foo', component: Foo },
    { path: '/login', name: 'login', component: Login },
    { path: '/login1', name: 'login1', component: Login },
    { path: '*', redirect: '/login' },
  ],
});

router.beforeEach((to, from, next) => {
  console.log('from', from.name);
  console.log('to', to.name);
  if (to.name === 'login' || to.name === 'home' || to.name === 'foo') {
    return next();
  }
  console.log('here');
  next('/login');
});

Vue.use(VueRouter);

new Vue({
  router,
  el: '#app',
});
