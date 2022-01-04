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
      user: {},
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {
      this.id = JSON.parse(localStorage.getItem('user')).id;
      let context = this;
      let url = '/findProfile';
      // this.axios.get(url, { params: { id: context.id } }).then((res) => {
      //   context.user = res.data;
      //   console.log(context.user);
      // });
      try {
        let response = await this.axios.get(url, { params: { "id": 1 } });
        context.user = response.data;
        console.log(context.user);
      } catch (error) {
        console.log(error);
      }
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
              v-model="user.category"
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
              v-model="user.bio"
              class="
                textarea
                h-28
                textarea-bordered
                bg-slate-100
                text-lg
                font-medium
              "
              placeholder="Bio"
            ></textarea>
          </div>
        </div>
        <div class="w w-full flex items-center justify-between flex-wrap mt-6">
          <h1 class="w-4/6 text-xl font-extrabold mb-10">Map settings</h1>
          <div class="form-control w-2/5">
            <label class="label">
              <span class="label-text font-bold">Lat</span>
            </label>
            <input
              v-model="user.lat"
              type="number"
              placeholder="Address"
              class="input bg-slate-100 text-lg font-medium"
            />
          </div>
          <div class="form-control w-2/5">
            <label class="label">
              <span class="label-text font-bold">Lng</span>
            </label>
            <input
              v-model="user.lng"
              type="number"
              placeholder="Address"
              class="input bg-slate-100 text-lg font-medium"
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
          <button class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
    <div class="w-full bg-zinc-100 shadow-md rounded-lg overflow-hidden my-5">
      <div>
        <ProfileMap />
      </div>
    </div>
  </div>
  <!-- user card  -->
</template>
