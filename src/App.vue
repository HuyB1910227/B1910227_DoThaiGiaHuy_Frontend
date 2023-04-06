<script>
import AppHeader from './components/AppHeader.vue';
import { useAuthStore } from './store/AuthStore';
import Cookies from "js-cookie";

export default {
  components: {
    AppHeader,
  },
  data() {
    const authStore = useAuthStore();
    return {
      authStore,
    }
  },
  methods: {
    tryLogin() {
      const tokenFromCookies = Cookies.get("token");
      if (tokenFromCookies) {
        this.authStore.token = tokenFromCookies;
        this.authStore.isAuth = true;
      } else {
        this.authStore.token = "";
        this.authStore.isAuth = false;
      }
    },
  },
  created () {
    this.tryLogin();
  }
}
</script>

<template>
  <div id="app">
    <AppHeader />
    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>
  
<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>
