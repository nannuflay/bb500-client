<script>
import {
  UserIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LightningBoltIcon,
} from '@heroicons/vue/solid';
import ProfileMap from '@/components/ProfileMap.vue';
export default {
  components: {
    UserIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LightningBoltIcon,
    ProfileMap,
  },
  data() {
    return {
      id: null,
      user: {
        categories: [],
      },
      success: false,
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {
      this.id = JSON.parse(localStorage.getItem('user')).id;
      let context = this;
      let url = '/findProfile?id=' + context.id;
      this.axios.get(url).then((res) => {
        context.user = res.data;
        console.log(res);
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
        console.log(res);
        this.success = true;
      });
    },
  },
};
</script>

<template>
  <div class="w-full px-28 pt-10 bg-base-200">
    <div class="flex justify-between">
      <div
        class="w-full border border-gray-300 bg-white shadow-md rounded-lg p-6"
      >
        <h1 class="w-4/6 text-xl font-extrabold mb-10">Profile settings</h1>
        <div class="flex items-center w-full justify-between">
          <div class="form-control w-2/6">
            <label class="label">
              <span class="label-text font-bold">Full name</span>
            </label>
            <input
              v-model="user.name"
              type="text"
              placeholder="Full name"
              class="input bg-slate-100 text-lg font-medium"
            />
          </div>
          <div class="form-control w-3/5">
            <label class="label">
              <span class="label-text font-bold">Email</span>
            </label>
            <input
              v-model="user.email"
              type="text"
              placeholder="Email"
              class="input bg-slate-100 text-lg font-medium"
            />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="form-control w-3/5">
            <label class="label">
              <span class="label-text font-bold">Address</span>
            </label>
            <input
              v-model="user.address"
              type="text"
              placeholder="Address"
              class="input bg-slate-100 text-lg font-medium"
            />
          </div>
          <div class="form-control w-1/5 flex-1 ml-5">
            <label class="label">
              <span class="label-text font-bold">Category</span>
            </label>
            <select
              class="select select-bordered w-full max-w-xs bg-slate-100"
              v-model="user.categories[0]"
            >
              <option disabled="disabled" selected="selected">
                Choose your category
              </option>
              <option>Artist</option>
              <option>option 2</option>
              <option>option 3</option>
            </select>
          </div>
        </div>
        <div>
          <div class="form-control">
            <label class="label">
              <span class="label-text font-bold">Your bio</span>
            </label>
            <textarea
              v-model="user.about"
              class="textarea h-28 textarea-bordered bg-slate-100 text-lg font-medium"
              placeholder="Bio"
            ></textarea>
          </div>
        </div>
        <div class="w-full rounded-lg overflow-hidden my-5">
          <h1 class="w-4/6 text-xl font-extrabold mb-10">Map settings</h1>
          <div v-if="user.lat && user.lng">
            <ProfileMap
              @positionChange="handlePositionChange"
              :lat="user.lat"
              :lng="user.lng"
            />
          </div>
        </div>
        <div class="w-full flex justify-between mt-10 items-center">
          <label for="my-modal-2" class="link link-primary"
            >Change password</label
          >
          <input type="checkbox" id="my-modal-2" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box">
              <div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text font-bold">Current password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="*******"
                    class="input bg-slate-100 text-lg font-medium"
                  />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text font-bold">New password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="*********"
                    class="input bg-slate-100 text-lg font-medium"
                  />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text font-bold">Confirm password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="**********"
                    class="input bg-slate-100 text-lg font-medium"
                  />
                </div>
              </div>
              <div class="modal-action">
                <label for="my-modal-2" class="btn">Close</label>
                <label for="my-modal-2" class="btn btn-primary"
                  >Save changes</label
                >
              </div>
            </div>
          </div>

          <div class="alert alert-success" v-if="success">
            <div class="flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <label>Your profile updated successfully!</label>
            </div>
          </div>

          <button @click="save" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
  <!-- user card  -->
</template>
