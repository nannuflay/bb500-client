<template>
  <div class="w-full bg-base-200 p-10 flex justify-center">
    <div class="w-3/6">
      <div className=" p-4 bg-white w-full rounded-lg shadow-lg">
        <h1 v-if="!success" class="font-bold text-3xl text-center my-5">
          Create Profile
        </h1>

        <div v-if="success">
          <h1 class="font-bold text-3xl text-center my-5">
            You have successfully signup, you will be redirected to Log-in
          </h1>
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
            <div class="form-control w-full">
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
          </div>
          <div class="flex items-center justify-between" style="padding-top: 25px; padding-bottom: 15px;">
            <div class="form-control w-1/5">
              <label class="label">
                <span class="label-text font-bold">Category</span>
              </label>
            </div>
            <div class="form-control w-1/5">
              <input type="checkbox" id="producer" v-model="producer">
              <label for="producer">Producer</label>
            </div>
            <div class="form-control w-1/5">
              <input type="checkbox" id="songwriter" v-model="songwriter">
              <label for="songwriter">Songwriter</label>
            </div>
              <div class="form-control w-1/5">
              <input type="checkbox" id="musician" v-model="musician">
              <label for="musician">Musician</label>
            </div>
              <div class="form-control w-1/5">
              <input type="checkbox" id="executive" v-model="executive">
              <label for="executive">Executive</label>
            </div>
              <div class="form-control w-1/5">
              <input type="checkbox" id="singer" v-model="singer">
              <label for="singer">Singer</label>
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
          <div class="flex flex-col">
            <div class="alert alert-info mb-4 mt-10">
              <div class="flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 mx-2 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <label>Drag the marker to the position you want</label>
              </div>
            </div>
            <div
              class="shadow-2xl rounded-lg w-full overflow-hidden mx-auto mb-10"
            >
              <GoogleMap
                api-key="AIzaSyC_6hw4jl5QTB3gOgP--RC_ZGL6odyoWSo"
                style="width: 100%; height: 80vh"
                class="mx-auto"
                :center="center"
                :zoom="4"
              >
                <Marker
                  clickable
                  :options="{
                    position: center,
                    clickable: true,
                    draggable: true,
                  }"
                  @drag="handleMarkerDrag"
                />
              </GoogleMap>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-center my-4 text-sm  font-Roboto font-medium text-gray-600"
          >
            <button
              @submit="save"
              type="submit"
              className="w-5/6 btn btn-success my-8"
            >
              Sign up
            </button>

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
      center: { lat: 40.73061, lng: -73.935242 },
      user: {
        name: '',
        email: '',
        password: '',
        address: '',
        about: '',
        categories: [],
        lat: null,
        lng: null,
        available: true
      },
      options: ['Songwriter', 'Musician', 'Vocal'],
      selectedCategories: [],
      singer: null,
      songwriter: null,
      executive: null,
      musician: null,
      producer: null
    };
  },
  mounted() {
    let location = localStorage.getItem('location');
    if(location) {
      let locationObject = JSON.parse(location);
      if(locationObject.lat && locationObject.lng) {
        this.center = {lat: locationObject.lat, lng: locationObject.lng}
      }
    }
  },
  methods: {
    handleMarkerDrag(options) {
      this.user.lat = options.latLng.lat();
      this.user.lng = options.latLng.lng();
    },
    save() {
      if(this.producer)
        this.user.categories.push('producer');
      if(this.songwriter)
        this.user.categories.push('songwriter');
      if(this.musician)
        this.user.categories.push('musician');
      if(this.executive)
        this.user.categories.push('executive');
      if(this.singer)
        this.user.categories.push('singer');
      let context = this;

      let url = '/addProfile';
      this.axios.post(url, this.user).then((response) => {
        this.success = true;
        setTimeout(function () {
          context.$router.push({ name: 'Login' });
        }, 3000);
      });
    },
  }
};
</script>
