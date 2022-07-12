import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/BlogCategoryListView.vue"),
  },
  {
    path: "/blog/:category",
    name: "blogByCategory",
    component: () => import("../views/BlogCategoryView.vue"),
  },
  {
    path: "/blog/:category/:id",
    name: "blogByCategoryAndId",
    component: () => import("../views/BlogView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
