<template>
	<div class="grid grid-rows-10 grid-flow-col h-[470px] w-[472px] border-2 border-[#064c81] p-1 backgroud-board">
		<template v-for="(cell, index) in dataBoard" :key="index">
			<div class="grid grid-rows-3 grid-flow-col h-[46px] w-[46px] border-[0.5px] relative border-[#789bb9] hover:bg-cyan-500 cursor-pointer"
				@click="clickCell(cell)">
				<template v-for="i in 9" :key="i">
					<div class="h-[15px] w-[15px] border-[0.5px] border-gray-300 relative"></div>
				</template>
			</div>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'Board',
		props: {
			dataBoard: Array
		},
		data: function() {
			return {

			}
		},
		computed: {

		},
		methods: {
			clickCell(cellData) {
				console.log(cellData);
			}
		}
	}
</script>

<style scoped>
.backgroud-board {
	background-color: rgba(224 , 232, 242, 0.7);
}
</style>