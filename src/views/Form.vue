<template>
	<Wave />
	<main class="flex justify-center align-center z-10 pb-24 mx-8 form-select">
		<section class="flex items-center h-[80vh]" style="opacity: 1;">
			<div class="flex flex-col items-center gap-4">
				<!-- <h1 class="font-display text-2xl font-bold block">Play a quick round of battleships</h1> -->
				<form @submit.prevent="submitForm"
					class="flex flex-col items-center gap-4 bg-slate-50 shadow-lg rounded-lg p-4 max-w-3xl">
					<div>
						<i class=""></i>
						<h1>Battleship</h1>
					</div>
					<fieldset class="undefined w-full">
						<ul class="grid w-full gap-4 md:grid-cols-2">
							<li>
								<input v-model="selectedGame" id="local" type="radio" class="hidden peer" required=""
									name="gameFormat" value="local">
								<label for="local"
									class="font-body gap-8 duration-200 w-full inline-flex items-center justify-between p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-indigo-600 peer-checked:text-indigo-600 hover:text-gray-600 hover:bg-gray-100">
									<div class="block">
										<div class="w-full text-lg font-semibold">Local</div>
										<div class="w-full">Play Locally</div>
									</div>
									<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
										aria-hidden="true" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
									</svg>
								</label>
							</li>
							<li>
								<input v-model="selectedGame" id="computer" type="radio" class="hidden peer" required=""
									name="gameFormat" value="computer">
								<label for="computer"
									class="font-body gap-8 duration-200 w-full inline-flex items-center justify-between p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-indigo-600 peer-checked:text-indigo-600 hover:text-gray-600 hover:bg-gray-100">
									<div class="block">
										<div class="w-full text-lg font-semibold">Computer</div>
										<div class="w-full">Play AI</div>
									</div>
									<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
										aria-hidden="true" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
									</svg>
								</label>
							</li>
						</ul>
					</fieldset>
					<button :disabled="!selectedGame" class="w-full bg-indigo-500 text-white rounded-lg py-2 px-3 hover:bg-indigo-200 hover:text-indigo-500 m-1 text-sm font-body ease-out duration-200 font-bold hover:scale-[102%] shadow-inner hover:shadow-md disabled:bg-indigo-100 disabled:text-indigo-300 disabled:hover:shadow-none" type="submit">Next</button>
				</form>
			</div>
		</section>
	</main>
	<Footer />
</template>

<script>
import Footer from '../components/Footer.vue';
import Wave from '../components/Wave.vue';
export default {
	components: {
		Wave,
		Footer
	},
	data() {
		return {
			selectedGame: null,
		};
	},
	methods: {
		submitForm() {
			if (this.selectedGame === 'local') {
				this.$router.push({ name: 'ScreenSetUp' });
			}
			if (this.selectedGame === 'computer') {
				this.$router.push({ name: 'TestRouter2' });
			}
		},
	},

}
</script>
<style>
.form-select {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.form-select h1 {
	font-family: 'BenchNine', Arial, sans-serif;
	font-size: 1.125rem;
	font-weight: 700;
	color: #F4A460;
}

form {
	background: url(../assets/path/form-bgr.jpg);
}
</style>