<template>
  <div class="mx-auto bg-base-200 w-full">
    <!--  this will be shown only if openWindow = true -->
    <div class="overlay" v-if="openWindow" />
    <!-- START -- popup -->
    <div
      v-if="openWindow"
      class="popup bg-white dark:bg-slate-800 md:w-3/5 w-4/5 flex justify-between p-5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        @click="openWindow = false"
        class="h-6 w-6 absolute top-3 right-3 hover:text-primary cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
      <div class="w-4/6">
        <h2 class="header text-5xl font-bold">Welcome to Billboard 500</h2>
        <p class="text-gray-700 my-7 text-lg">
          we use your location to determine where to suggest artists nearby you,
          please accept the prompt in order for us to best serve you
        </p>
        <button @click="getLocation()" class="btn mt-10 w-48 btn-primary font-bold capitalize">
          Accept
        </button>
      </div>
      <div class="w-3/6 mx-10">
        <img class="w-full" src="public/assets/images/markers.svg" alt="" />
      </div>
      <div></div>
    </div>
    <!-- END -- popup -->

    <div class="shadow-2xl rounded-lg w-full overflow-hidden mx-auto">
      <GoogleMap
        api-key="AIzaSyC_6hw4jl5QTB3gOgP--RC_ZGL6odyoWSo"
        style="width: 100%; height: 80vh; z-index: 55"
        class="mx-auto"
        :center="center"
        :zoom="7"
      >
        <Marker
          clickable
          title=""
          v-for="(profile, index) in profiles"
          :key="profile.profileId"
          @click="viewProfile(index)"
          :options="{ position: profile, icon: getProfileIcon(index) }"
        >
          <GMapInfoWindow :opened="true">
            <div>I am in info window <MyComponent /></div>
          </GMapInfoWindow>
        </Marker>
      </GoogleMap>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  data() {
    return {
      profiles: [],
      openWindow: false,
      location: null,
      center: { lat: 40.689247, lng: -74.044502 },
    };
  },
  created() {
    this.getProfiles();
    let location = localStorage.getItem("location");
    if (location) {
      let locationObject = JSON.parse(location);
      if (locationObject.lat && locationObject.lng) {
        this.center = { lat: locationObject.lat, lng: locationObject.lng };
      }
    } else {
      let user = JSON.parse(
        localStorage.getItem("user") || '{"logged": false, "name": null}'
      );
      if (!user.logged) {
        this.openWindow = true;
      }
    }
  },
  methods: {
    getProfiles() {
      let context = this;
      let url = "/getProfiles";
      this.axios.get(url).then((res) => {
        context.profiles = res.data;
      });
    },
    viewProfile(index) {
      this.$router.push({
        name: "ArtistProfile",
        params: { id: this.profiles[index].profileId },
      });
    },
    getProfileIcon(index) {
      let cat = this.profiles[index].categories[0]
        ? this.profiles[index].categories[0]
        : "musician";
      return {
        url:
          "./../../public/assets/images/" +
          this.profiles[index].categories[0] +
          ".png",
        size: { width: 32, height: 50, f: "px", b: "px" },
        scaledSize: { width: 30, height: 45, f: "px", b: "px" },
      };
    },
    getLocation() {
      this.openWindow = false;
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.gettingLocation = false;
          this.location = pos;
          let jsonLocation = JSON.stringify({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          localStorage.setItem("location", jsonLocation);
        },
        (err) => {
          this.gettingLocation = false;
          this.errorStr = err.message;
        }
      );
    },
  },
});
</script>
<style scoped>
.overlay {
  position: fixed;
  opacity: 1;
  top: 0;
  width: 100%;
  height: 100%;
  bottom: 0;
  z-index: 5555555544444444444;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
}

.popup {
  margin: 70px auto;
  padding: 30px;
  border-radius: 5px;
  z-index: 5555555555555555555555;
  position: absolute;
  right: 0;
  left: 0;
  transition: all 200ms;
}
</style>
