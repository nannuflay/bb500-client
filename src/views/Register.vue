<template>
  <div class="w-full bg-base-200 p-10 flex justify-center">
    <div class="w-3/6">
      <div className=" p-4 bg-white w-full rounded-lg shadow-lg">
        <h1 v-if="!success" class="font-bold text-3xl text-center my-5">Create Profile</h1>

        <div v-if="success">
          <h1 class="font-bold text-3xl text-center my-5">You have successfully signup, you will be redirected to Log-in</h1>
        </div>
        <form v-else @submit.prevent="save" className=" mx-auto my-10">
          <div class="flex items-center w-full justify-between">
            <div class="form-control w-2/6">
              <label class="label">
                <span class="label-text font-bold">Full name</span>
              </label>
              <input
                required
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
                required
                v-model="user.email"
                type="text"
                placeholder="Email"
                class="input bg-slate-100 text-lg font-medium"
              />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text font-bold">Password</span>
              </label>
              <input
                required
                v-model="user.password"
                type="password"
                placeholder="Password"
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
                required
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
                required
                class="select select-bordered w-full max-w-xs bg-slate-100"
                v-model="user.categories"
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
          <div class="flex items-center justify-between">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text font-bold">About</span>
              </label>
              <textarea
                required
                v-model="user.about"
                type="text"
                placeholder="Write something nice about you"
                class="input bg-slate-100 text-lg font-medium"
              >
              </textarea>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="shadow-2xl rounded-lg w-full overflow-hidden mx-auto my-10">
              <GoogleMap
                api-key="AIzaSyC_6hw4jl5QTB3gOgP--RC_ZGL6odyoWSo"
                style="width: 100%; height: 80vh"
                class="mx-auto"
                :center="center"
                :zoom="15"
              >

                <Marker
                  :options="{ position: { lat: 40.689247, lng: -74.044502 }, clickable:true, draggable:true  }"
                  @drag="handleMarkerDrag"
                />
              </GoogleMap>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-center my-4 text-sm  font-Roboto font-medium text-gray-600"
          >
            <button @submit="save" type="submit" className="w-5/6 btn btn-success my-8">Sign up</button>

            <span>
              Do you already have an account?
              <a href="/login" className="link-primary"> Login </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map';

export default {
  components: { GoogleMap, Marker },
  name: 'pink-tabs',
  data() {
    return {
      success: false,
      user: {
        name: '',
        email: '',
        password: '',
        address: '',
        about: '',
        categories: null,
        lat: null,
        lng: null,
        available: true
      },
    };
  },
  methods: {
    handleMarkerDrag(options) {
      this.user.lat = options.latLng.lat();
      this.user.lng = options.latLng.lng();
    },
    save() {
      this.user.categories = [this.user.categories];
      let context = this;

      let url = '/addProfile';
      this.axios.post(url, this.user).then(response => {
        this.success = true;
        setTimeout(function() {
          context.$router.push({ name: 'Login' })
        }, 3000);
      });
    }
  }
};
</script>
