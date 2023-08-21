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
				class="text-xs sm:text-base md:text-lg font-bold truncate block"
			>
				Movie name Movie name Movie name Movie name
			</RouterLink>
			<p class="text-sm text-gray-500">
				<span class="font-medium">7.8</span>
				<span> | </span>
				<span class="font-bold">
					<span>Genres </span>
				</span>
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.movie-card {
	@apply h-[260px] sm:h-[300px] md:h-[280px];

	.movie-poster {
		@apply w-full h-[80%] rounded-md overflow-hidden;
		img {
			@apply w-full h-full object-cover;
		}
	}
	.movie-overview {
		@apply w-full h-[20%] px-1 pt-2 md:pt-0 overflow-hidden;
		// border-radius: 0 0 6px 6px;
	}
}
</style>
