<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" class="flex items-center hover:text-primary cursor-pointer">
      <span class="font-bold font">{{ user.name }}</span>
      <ChevronDownIcon class="w-5 h-5" />
    </div>
    <ul
      tabindex="0"
      class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
    >
    <router-link to="/profile">
      <li class="flex hover:text-primary">
        <a href="/profile">
          <UserIcon class="w-5 h-5 mr-2" />
          My Profile</a
        >
      </li>

    </router-link>
      <li class="flex hover:text-primary">
        <a href="/logout">
          <LogoutIcon class="w-5 h-5 mr-2" />
          Log out</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { ChevronDownIcon, UserIcon } from '@heroicons/vue/solid';
import { LogoutIcon } from '@heroicons/vue/outline';
export default {
  props: {
    user: Object,
    default: {}
  },
  components: {
    ChevronDownIcon,
    UserIcon,
    LogoutIcon,
  },
  data() {
    return {
    }
  },
};
</script>

<style></style>
