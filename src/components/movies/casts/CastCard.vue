<script setup>
const props = defineProps(["movie"]);
</script>

<template>
	<div class="cast-card">
		<div class="h-[100%] overflow-hidden rounded-full">
			<RouterLink to="/casts/someone">
				<img :src="movie.poster" alt="" />
			</RouterLink>
		</div>
		<div class="h-[10%]">
			<h1
				class="text-sm lg:text-lg text-gray-400 font-medium text-center"
			>
				Cast Name
			</h1>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.cast-card {
	aspect-ratio: 1/1;
	img {
		@apply w-full min-h-full object-cover object-center;
	}
}
</style>
