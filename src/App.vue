<template>
	<div>
		<RouterView />
	</div>
</template>

<script>
export default {
	name: 'App',
	created() {
		this.$store.dispatch("initializeBoard1");
		this.$store.dispatch("initializeBoard2");
	},
}
</script>
