import Cookies from "js-cookie";
import { defineStore } from "pinia";
import router from '../router/index';
import UserService from '../services/user.service';
export const useAuthStore = defineStore('AuthStore', {
    state: () => ({
        token: "",
        isAuth: false,
    }),
    actions: {
        async logout () {
            try {
                const headers = {
                    Authorization: `Bearer ${this.token}`
                };
                await UserService.logout({headers});
                Cookies.remove("token");
                this.token = "";
                this.isAuth = false;
                router.push("/login");
            } catch (error) {
                console.log(error);
            }
        }
    }
})

