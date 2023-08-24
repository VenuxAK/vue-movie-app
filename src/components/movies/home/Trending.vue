<script setup>
import { onMounted, ref } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import TrendingMovieCard from "./TrendingMovieCard.vue";

import Spinner from "../../Loading/Spinner.vue";
import { useMovies } from "../../../stores/useMovies";

let movies = ref([]);

const { getMovies } = useMovies();

onMounted(async () => {
	let response = await getMovies("/movies/trending/day", 1);
	movies.value = await response.data;
	// console.log(movies.value);
});

let settings = ref({
	itemsToShow: 1,
	snapAlign: "center",
});
let breakpoints = ref({
	// 380 and up
	380: {
		itemsToShow: 1.5,
		snapAlign: "center",
	},
	// 700px and up
	700: {
		itemsToShow: 3.5,
	},
	// 1024 and up
	1024: {
		itemsToShow: 5,
	},
	1230: {
		itemsToShow: 6,
	},
});
</script>
<template>
	<div class="">
		<div>
			<h1 class="text-center mb-8 text-3xl md:text-4xl font-bold">
				Trending Movies
			</h1>
		</div>
		<div class="mt-6">
			<Carousel
				:settings="settings"
				:breakpoints="breakpoints"
				:wrapAround="true"
				:transition="500"
				:autoplay="3000"
				v-if="movies.length > 0"
				:class="{
					'animate__animated animate__fadeIn': movies.length > 0,
				}"
			>
				<Slide v-for="movie in movies" :key="movie">
					<div class="carousel__item mx-1">
						<TrendingMovieCard :movie="movie" />
					</div>
				</Slide>

				<template #addons>
					<div class="">
						<Pagination />
					</div>
				</template>
			</Carousel>
			<div v-else class="w-full h-[60vh]">
				<Spinner />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.carousel__pagination-button::before,
.carousel__pagination-button::after {
	margin: 1rem 0 0;
	width: 12px !important;
	height: 12px !important;
	border-radius: 6px !important;
}
.carousel__pagination-button:hover::after {
	@apply bg-danger;
}
.carousel__pagination-button--active::after {
	@apply bg-danger/90;
}
</style>
