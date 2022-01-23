<template>
  <!--<GoogleMap
    api-key="AIzaSyC_6hw4jl5QTB3gOgP--RC_ZGL6odyoWSo"
    style="width: 100%; height: 400px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>-->
  <GoogleMap
    api-key="AIzaSyC_6hw4jl5QTB3gOgP--RC_ZGL6odyoWSo"
    style="width: 100%; height: 80vh"
    class="mx-auto"
    :center="center"
    :zoom="4"
  >
    <Marker
      clickable
      :options="markerOptions"
      @drag="handleMarkerDrag"
    />
  </GoogleMap>
</template>

<script>
import { defineComponent } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';

export default defineComponent({
  components: { GoogleMap, Marker },
  props: {
    lat: Number,
    lng: Number,
    user: {
      type: Object
    }
  },
  data() {
    return {
      markerOptions: {}
    }
  },
  setup() {
    const center = { lat: 40.689247, lng: -1.044502 };

    return { center };
  },
  mounted() {
    this.center.lat = this.lat;
    this.center.lng = this.lng;
    this.markerOptions = {
      position: this.center,
      clickable: true,
      draggable: true,
      icon: {
        labelOrigin: {x: 16, y: -10},
        url: this.markerIconPath,
        size: {width: 32, height: 50, f: 'px', b: 'px',},
        scaledSize: {width: 30, height: 45, f: 'px', b: 'px',},
      }
    };
  },
  methods: {
    handleMarkerDrag(options) {
      this.center.lat = options.latLng.lat();
      this.center.lng = options.latLng.lng();
      this.$emit('positionChange', options.latLng);
    }
  },
  computed: {
    markerIconPath() {
      return './../../public/assets/images/' + this.user.categories[0] + '.png';
    }
  }
});
</script>
