<script setup>
import { onMounted } from "vue";
import Spinner from "../../Loading/Spinner.vue";

const props = defineProps(["movies"]);

onMounted(async () => {
	// console.log(props.movies);
});
</script>
<template>
	<div class="mt-8">
		<h1 class="text-3xl font-medium md:font-bold">Known For</h1>
		<div
			class="movies-container animate_animated animate__fadeIn"
			v-if="movies"
		>
			<div class="movies-wrapper">
				<div v-for="movie in movies" :key="movie">
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
						</div>
						<div
							class="absolute -top-2 -left-1 bg-danger bg-opacity-95 p-1 rounded-full"
						>
							<p class="text-xs md:text-sm w-full truncate">
								<span class="font-medium">{{
									movie.vote_average.toFixed(1)
								}}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-else class="w-full h-[80vh]">
			<Spinner />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.movies-container {
	@apply mt-12 md:container;

	.movies-wrapper {
		@apply container grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xxl:grid-cols-9 grid-flow-dense gap-2 md:gap-3 px-3 md:px-0;
	}
}
.movie-card {
	@apply relative h-[260px] sm:h-[300px] md:h-[280px];

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
