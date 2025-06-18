import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "@/views/Blogs.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import Profile from "@/views/Profile.vue";
import Admin from "@/views/Admin.vue";
import {getAuth} from "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Welcome",
      requiresAdmin: false
    }
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta: {
      title: "Blogs",
      requiresAdmin: false

    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      requiresAdmin: false

    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
      requiresAdmin: false

    }
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "Forgot Password",
      requiresAdmin: false

    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title: "Profile",
      requiresAuth: true
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      title: "Admin",
      requiresAdmin: true
    }
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: () => import("@/views/CreatePost.vue"),
    meta: {
      title: "Create Post",
      requiresAdmin: true
    }
  },
  {
    path: "/blog-preview",
    name: "BlogPreview",
    component: () => import("@/views/BlogPreview.vue"),
    meta: {
      title: "Blog Preview",
      requiresAdmin: true
    }
  },
  {
    path: "/view-blog/:blogid",
    name: "ViewBlog",
    component: () => import("@/views/ViewBlog.vue"),
    meta: {
      title: "Blog view",
    },
  },
  {
    path: "/edit-blog/:blogid",
    name: "EditBlog",
    component: () => import("@/views/EditBlog.vue"),
    meta: {
      title: "Blog edit",
      requiresAdmin: true
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + " | FireBlogs";
  next();
});

router.beforeEach(async (to, from, next) => {
  const firebaseAuth = getAuth()
  const currentUser = firebaseAuth.currentUser

  if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (!currentUser) {
      next({name: "Login"})
    } else {
      try {
        const tokenResults = await currentUser.getIdTokenResult()
        if (tokenResults.claims.admin) {
          next()
        } else {
          next({name: "Home"})
        }
      } catch (error) {
        console.error("Error checking admin claims:", error)
        next({name: "Home"})
      }
    }
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!currentUser) {
      next({name: "Login"})
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router;
