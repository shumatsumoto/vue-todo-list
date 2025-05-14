import { createWebHistory, createRouter } from "vue-router";

import AboutView from "../views/AboutView.vue";
import TodoView from "../views/TodoView.vue";

const routes = [
  {
    path: "/",
    name: "Todo",
    component: TodoView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
