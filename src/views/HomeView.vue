<script setup>
import Wave from '../components/Wave.vue';
import BtnPlay from '../components/BtnPlay.vue';
</script>
<template>
    <Wave />
    <BtnPlay />
  </template>
  
  <script >
  export default {
  components: { Wave, BtnPlay 
  },
    name: 'HomeView',
  }
  </script>
  