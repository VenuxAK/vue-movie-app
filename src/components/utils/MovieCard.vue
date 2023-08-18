<script setup>
const props = defineProps(["movie"]);
</script>

<template>
	<div class="movie-card">
		<div class="movie-poster">
			<RouterLink to="/movies/smt" class="">
				<img :src="movie.poster" alt="" class="" />
			</RouterLink>
		</div>
		<div class="movie-overview">
			<RouterLink
				to="/movies/smt"
				class="md:text-lg my-1 font-bold truncate block"
			>
				Movie name Movie name Movie name Movie name
			</RouterLink>
			<p class="text-sm text-gray-500">
				<span class="font-medium">7.8</span>
				<span> | </span>
				<span class="font-bold">
					<span>Genres </span>
					<span>Genres </span>
					<span>Genres </span>
					<span>Genres</span>
				</span>
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.movie-card {
	@apply mx-2 mb-5 md:mx-3 w-44 md:w-52 xl:w-56 h-96 xl:h-[420px] relative;
	.movie-poster {
		@apply w-full h-[85%] rounded-md overflow-hidden;
		img {
			@apply w-full h-full object-cover;
		}
	}
	.movie-overview {
		@apply w-full h-[15%] px-1 pb-2 pt-1 overflow-hidden;
		border-radius: 0 0 6px 6px;
	}
}
</style>
