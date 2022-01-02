<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

let counter = ref(0)

setInterval(() => {
  counter.value++
}, 1000)
</script>

<template>
  <div>
    <Navbar/>
    <main>
      <router-view />
    </main>
    <Footer/>
  </div>
</template>
