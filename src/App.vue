<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import BtnPlay from './components/BtnPlay.vue';
import Wave from './components/Wave.vue';

</script>

<template>
      <Header />
       <div>
        <Wave  />
       </div>
        <BtnPlay />
      <Footer />
</template>
<script>
export default {
  components:{
    Header,
    Wave,
    BtnPlay,
    Footer,

  }
}
</script>
