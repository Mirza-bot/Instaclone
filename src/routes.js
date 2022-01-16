import { createRouter, createWebHistory } from "vue-router";
import Main from "./pages/Main.vue";
import Home from "./pages/Home.vue";
import Inbox from "./pages/Inbox.vue";
import Explore from "./pages/Explore.vue";
import Login from "./pages/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
      {path : "/", redirect: "/login"},
    {
      path: "/main",
      component: Main,
      name: "main-page",
      children: [
        { path: "/home", component: Home },
        { path: "/inbox", component: Inbox },
        { path: "/explore", component: Explore },
      ],
    },
    { path: "/login", component: Login },
  ],
});

export default router;
