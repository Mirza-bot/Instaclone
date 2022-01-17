import { createRouter, createWebHistory } from "vue-router";
import Main from "./pages/Main.vue";
import Home from "./pages/Home.vue";
import Inbox from "./pages/Inbox.vue";
import Explore from "./pages/Explore.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import ProfilePage from "./pages/ProfilePage.vue"

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
        { path: "/profile", component: ProfilePage}
      ],
    },
    { path: "/login", component: Login },
    { path: "/register", component: Register}
  ],
});

export default router;
