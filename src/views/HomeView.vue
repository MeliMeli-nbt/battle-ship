<script setup>
import Wave from '../components/Wave.vue';
import BtnPlay from '../components/BtnPlay.vue';
import Footer from '../components/Footer.vue';
</script>
<template>
	<Wave />
	<BtnPlay />
	<Footer />
</template>
<script >
export default {
	components: {
		Wave,
		BtnPlay,
		Footer
	},
	name: 'HomeView',
}
</script>