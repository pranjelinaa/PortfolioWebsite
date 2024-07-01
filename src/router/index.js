import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import BlogPost from '../pages/BlogPost.vue';
import LoginPage from '../pages/LoginPage.vue';
import PageNotFound from '../pages/PageNotFound.vue';
import AboutPage from '../pages/AboutPage.vue';
import ComingSoonPage from '../pages/ComingSoonPage.vue';
import RegistrationPage from '../pages/RegistrationPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/blog', component: BlogPost },
    { path: '/login', component: LoginPage },
    { path: '/about', component: AboutPage },
    { path: '/coming-soon', component: ComingSoonPage },
    { path: '/register', component: RegistrationPage },
    { path: '*', component: PageNotFound }
  ]
});
