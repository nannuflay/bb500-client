<template>
  <div class="w-full h-16 flex items-center justify-between px-20">
    <!-- logo -->
    <div class="logo">
      <a href="/">
        <span class="text-2xl  text-primary tracking-wider font-bold">BillBoard</span>
        <span class="text-2xl font-bold text-gray-700">500</span>
      </a>
    </div>
    <div class="mx-5 flex items-center">
      <!-- nav items if !user  -->
      <div v-if="user.logged">
        <AvatarDropDown :user="user" />
      </div>
      <div v-else class="mx-4">
        <router-link to="/login">
          <button class="btn btn-primary">Login</button>
        </router-link>
        <router-link to="/register">
          <button class="btn bg-slate-200 btn-outline border-none ml-4">
            Register
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AvatarDropDown from './AvatarDropDown.vue';
export default {
  components: { AvatarDropDown },
  data() {
    return {
    };
  },
  created() {
    console.log("user", this.user);
  },
  computed: {
    user() {
      return this.user = JSON.parse(localStorage.getItem('user') || '{"logged": false, "name": null}');
    }
  }
};
</script>
