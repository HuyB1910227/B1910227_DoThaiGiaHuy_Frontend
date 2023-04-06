import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import { useAuthStore } from "@/store/AuthStore";
const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/contacts",
        children: [
            {
                path: "add",
                name: "contact.add",
                component: () => import("@/views/ContactAdd.vue"),
            },
            {
                path: ":id",
                name: "contact.edit",
                component: () => import("@/views/ContactEdit.vue"),
                props: true
            }
        ]
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/Register.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/UserLogin.vue"),
    },
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, _from, next) => {
    const authStore = useAuthStore();
    if (!authStore.isAuth && to.name !== 'login' && to.name !== 'register') {
      next('/login');
    } else {
      next();
    }
});

export default router;
