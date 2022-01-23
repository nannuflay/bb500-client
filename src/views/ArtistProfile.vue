<template>
  <div class="w-full px-20 pt-10 bg-base-200 h-screen">
    <div class="w-full items-center flex justify-center">
      <div
        class="bg-white overflow-hidden w-4/6 rounded-lg shadow-md border flex justify-center p-7"
      >
        <div class="flex-col flex w-full">
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <span class="text-5xl font-bold capitalize">{{ user.name }}</span>
              <div class="font-bold text-warning">
                {{ user.categories[0] }}
              </div>
            </div>

            <div
              :class="user.available ? 'badge-success' : ' badge-error'"
              class="badge badge-lg"
            >
              {{ user.available ? 'Available' : 'Unvailable' }}
            </div>
          </div>

          <p class="text-sm mt-3 text-gray-500">{{ user.about }}</p>

          <div class="flex items-center mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-lg">{{ user.address }}</span>
          </div>
          <div class="flex items-center my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <span class="text-lg">{{ user.email }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileMap from '@/components/ProfileMap.vue';
export default {
  data() {
    return {
      id: this.$route.params.id,
      user: {
        categories: [],
      },
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {
      let context = this;
      let url = '/findProfile?id=' + context.id;
      this.axios.get(url).then((res) => {
        context.user = res.data;
      });
    },
    handlePositionChange(position) {
      this.user.lat = position.lat();
      this.user.lng = position.lng();
    },
    save() {
      this.user.categories = [this.user.categories[0]];
      let url = '/updateProfile';
      this.axios.put(url, this.user).then((res) => {
        this.success = true;
      });
    },
  },
  components: { ProfileMap },
};
</script>

<style></style>
