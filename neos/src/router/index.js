import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";
import Contact from "../views/Contact.vue";
import Blog from "../views/Blog.vue";
import Faq from "../views/Faq.vue";
import Testimonials from "../views/Testimonials.vue";
import Services from "../views/Services.vue";
import Single from "../views/Single.vue";
import NotFound from "../views/NotFound.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq
  },
  {
    path: "/services",
    name: "Services",
    component: Services
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials
  },
  {
    path: "/blog/:id",
    name: "Single",
    component: Single
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
