<script setup>
const props = defineProps(["movie"]);
</script>

<template>
	<div class="movie-card">
		<div class="movie-poster">
			<RouterLink :to="'/movies/' + movie.id" class="">
				<img :src="movie.poster" alt="" class="" />
			</RouterLink>
		</div>
		<div class="movie-overview">
			<RouterLink
				:to="'/movies/' + movie.id"
				class="text-xs sm:text-base md:text-lg font-bold truncate block"
			>
				{{ movie.title ?? movie.name }}
			</RouterLink>
			<p class="text-xs md:text-sm text-gray-500 w-full truncate">
				<span class="font-medium">{{
					movie.vote_average.toFixed(1)
				}}</span>
				<span> | </span>
				<span class="font-bold capitalize">
					{{ movie.genres.join(", ") }}
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
