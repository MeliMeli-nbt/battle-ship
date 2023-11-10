<template>
	<div class="bg-screen-play-game">
		<Board :dataBoard="boardPlayer1"/>
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
	computed: {
		...mapGetters([
			"boardPlayer1",
			"boardPlayer2"
		])
	}
}
</script>

<style>
.bg-screen-play-game {
	background: url(../assets/path/screen-play-game.jpg) center/cover no-repeat;
    width: 100%;
    height: 100vh;
}
</style>