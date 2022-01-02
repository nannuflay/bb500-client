<template>
  <div class="w-full h-16 flex items-center justify-between px-20">
    <!-- logo -->
    <div class="logo">
      <!-- <img
        class="w-24"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhz63p7ViB1o-WPsSrqafDBkIqc-vrJTuT1ZxCqRspL-zleZ4f4Iw9QaD-CJoJ-WwShY&usqp=CAU"
        alt=""
      /> -->
      <span class="text-2xl  text-primary tracking-wider font-bold">BillBoard</span>
      <span class="text-2xl font-bold text-gray-700">500</span>
    </div>
    <div class="mx-5 flex items-center">
      <!-- nav items if !user  -->
      <div v-if="!user">
        <AvatarDropDown />
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
      user: false,
    };
  },
  mounted() {
    this.isLogged();
  },
  methods: {
    //  check if user logged
    isLogged() {
      let login = localStorage.getItem('login') || null;
      let userLogged = JSON.parse(login);
      if (!userLogged) {
        return (this.user = true);
      }
      this.user = false;
    },
  },
};
</script>
