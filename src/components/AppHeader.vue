<script>
import { useAuthStore } from "../store/AuthStore";
import { mapActions, mapState } from "pinia";
export default {
    methods: {
        ...mapActions(useAuthStore, {
            logout: "logout"
        })
    },
    computed: {
        ...mapState(useAuthStore, {
            isAuth: 'isAuth',
        }),
    }
}
</script>
<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng Quản lý danh bạ</a>
        <ul class="mr-auto navbar-nav" v-if="isAuth">
            <li class="nav-item">
                <router-link :to="{ name: 'contactbook' }" class="nav-link">
                    Danh bạ
                    <i class="fas fa-address-book"></i>
                </router-link>
            </li>
        </ul>
        <ul class="ml-auto navbar-nav" v-if="isAuth">
            <li class="nav-item p-2 ">
                <button class="btn btn-primary" @click="logout">Đăng xuất</button>
            </li>
        </ul>
        <ul class="ml-auto navbar-nav" v-else>
            <li class="nav-item btn btn-primary">
                <router-link :to="{name: 'login'}" class="text-white">
                    Đăng nhập
                </router-link>
            </li>
            <li class="nav-item btn  btn-outline-primary ml-2 btn-light text-dark">
                <router-link :to="{name: 'register'}" >Đăng ký</router-link>
            </li>
        </ul>
    </nav>
</template>

