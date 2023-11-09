<template>
	<div>
		<Board/>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Board from '../components/Board.vue';
export default {
	name: 'ScreenPlayGame',
	components: {
		Board
	},
	created() {
		this.$store.dispatch("initializeBoard1");
		this.$store.dispatch("initializeBoard2");
	},
	computed: {
		...mapGetters([
			"boardPlayer1",
			"boardPlayer2"
		])
	}
}
</script>