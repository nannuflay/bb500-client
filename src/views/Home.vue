<template>
  <div class="mx-auto bg-base-200 w-full">
    <div class="w-5/6 mx-auto py-10">
      <h1 class="text-4xl font-bold">Explore all artists</h1>
      <p class="text-lg text-gray-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
        similique dolorem ex commodi necessitatibus adipisci consequatur beatae
        impedit blanditiis.
      </p>
    </div>
    <div class="shadow-2xl rounded-lg w-5/6 overflow-hidden mx-auto my-10">
      <GoogleMap
        api-key="AIzaSyC_6hw4jl5QTB3gOgP--RC_ZGL6odyoWSo"
        style="width: 100%; height: 80vh"
        class="mx-auto"
        :center="center"
        :zoom="2"
      >
        <Marker
          clickable
          v-for="profile in profiles"
          :key="profile.profileId"
          @click="openMarker()"
          :options="{ position: profile }"
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
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };

    return { center };
  },
  data() {
    return {
      profiles: [],
      openWindow: false,
    };
  },
  created() {
    this.getProfiles();
  },
  methods: {
    getProfiles() {
      let context = this;
      let url = '/getProfiles';
      this.axios.get(url).then((res) => {
        context.profiles = res.data;
        console.log(context.profiles);
      });
    },
    openMarker() {
      window.alert('ddddddddd');
      this.openWindow = true;
    },
  },
});
</script>
