<template>
  <div class="w-full h-16 flex items-center justify-between px-20 header">
    <!-- logo -->
    <div class="logo">
      <a href="/">
        <img width="63" src="/assets/images/logo.jpeg" />
      </a>
    </div>
    <div class="mx-5 flex items-center">
      <div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox">
          <input type="checkbox" id="checkbox" @change="darkThemeSwitch"/>
          <div class="slider round"></div>
        </label>
      </div>
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
import themeChanger from "./../theme.js";
import ToggleButton from 'vue-js-toggle-button'

export default {
  components: { AvatarDropDown, ToggleButton },
  data() {
    return {
      themeChanger: null,
      myDataVariable: false
    };
  },
  created() {
    this.themeChanger = new themeChanger();
  },
  methods: {
    darkThemeSwitch() {
      this.themeChanger._darkThemeSwitch();
    }
  },
  computed: {
    user() {
      return this.user = JSON.parse(localStorage.getItem('user') || '{"logged": false, "name": null}');
    }
  }
};
</script>
<style scoped>
/*slider switch css */
.theme-switch-wrapper {
  display: flex;
  align-items: center;
}
.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}

.theme-switch input {
  display:none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: .4s;
  width: 26px;
}

input:checked + .slider {
  background-color: #66bb6a;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>