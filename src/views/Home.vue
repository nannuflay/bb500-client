<template>
  <div class="mx-auto bg-base-200 w-full">
    <div v-if="openWindow" id="popup1" class="overlay">
      <div class="popup">
        <h2>Welcome to Billboard 500</h2>
        <a @click="openWindow = false" class="close" href="#">&times;</a>
        <div class="content">
          we use your location to determine where to suggest artists nearby you, please accept the prompt in order for us to best serve you
        </div>
        <button @click="getLocation()" class="button">Accept</button>
      </div>
    </div>

    <div class="shadow-2xl rounded-lg w-full overflow-hidden mx-auto">
      <GoogleMap
        api-key="AIzaSyC_6hw4jl5QTB3gOgP--RC_ZGL6odyoWSo"
        style="width: 100%; height: 80vh"
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
import { defineComponent } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';

export default defineComponent({
  components: { GoogleMap, Marker },
  data() {
    return {
      profiles: [],
      openWindow: false,
      location: null,
      center: { lat: 40.689247, lng: -74.044502 }
    };
  },
  created() {
    this.getProfiles();
    let location = localStorage.getItem('location');
    if(location) {
      let locationObject = JSON.parse(location);
      if(locationObject.lat && locationObject.lng) {
        this.center = {lat: locationObject.lat, lng: locationObject.lng}
      }
    } else {
      let user = JSON.parse(localStorage.getItem('user') || '{"logged": false, "name": null}');
      if(!user.logged) {
        this.openWindow = true;
      }
    }
  },
  methods: {
    getProfiles() {
      let context = this;
      let url = '/getProfiles';
      this.axios.get(url).then((res) => {
        context.profiles = res.data;
      });
    },
    viewProfile(index) {
      this.$router.push({
        name: 'ArtistProfile',
        params: { id: this.profiles[index].profileId },
      });
    },
    getProfileIcon(index) {
      let cat = this.profiles[index].categories[0] ? this.profiles[index].categories[0]  : 'musician';
      return {
        url: './../../public/assets/images/' + this.profiles[index].categories[0] + '.png',
        size: {width: 32, height: 50, f: 'px', b: 'px',},
        scaledSize: {width: 30, height: 45, f: 'px', b: 'px',}
      }
    },
    getLocation() {
      this.openWindow = false;
      navigator.geolocation.getCurrentPosition(pos => {
        this.gettingLocation = false;
        this.location = pos;
        let jsonLocation = JSON.stringify({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
          })
        localStorage.setItem("location", jsonLocation)
      }, err => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      });
    }
  },
});
</script>
<style>
h1 {
  text-align: center;
  font-family: Tahoma, Arial, sans-serif;
  color: #06D85F;
  margin: 80px 0;
}

.box {
  width: 40%;
  margin: 0 auto;
  background: rgba(255,255,255,0.2);
  padding: 35px;
  border: 2px solid #fff;
  border-radius: 20px/50px;
  background-clip: padding-box;
  text-align: center;
}

.button:hover {
  background: #06D85F;
}

.overlay {
  position: fixed;
  opacity: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: -10px;
  right: 5px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06D85F;
}
.popup .content {
  padding-bottom: 15px;
  max-height: 30%;
  overflow: auto;
}

@media screen and (max-width: 700px){
  .box{
    width: 70%;
  }
  .popup{
    width: 70%;
  }
}

.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>