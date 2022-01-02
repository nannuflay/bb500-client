<template>
  <div class="w-full bg-base-200 p-10 flex justify-center">
  </div>
</template>

<script>
export default {
  name: 'Logout',
  data() {
    return {
      user: {
        logged: false,
        name: null
      }
    };
  },
  mounted() {
    localStorage.setItem('user', JSON.stringify(this.user));
    window.location.href = '/login';
  }
};
</script>
