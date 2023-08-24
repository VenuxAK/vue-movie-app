<script setup>
import { onMounted, ref } from "vue";
import Spinner from "../Loading/Spinner.vue";
import MovieCard from "../utils/MovieCard.vue";
import { useMovies } from "../../stores/useMovies";

const { getMovies } = useMovies();
let movies = ref([]);

onMounted(async () => {
	let response = await getMovies("/movies/top_rated");
	// console.log(response);
	movies.value = response.data;
});
</script>

<template>
	<div class="top-rated-wrapper">
		<div>
			<h1 class="px-3 mb-8 lg:px-0 lg:text-center text-3xl font-medium">
				Top Rated Movies
			</h1>
		</div>
		<div class="movies-wrapper" v-if="movies.length > 0">
			<div v-for="movie in movies.slice(0, 18)" :key="movie">
				<MovieCard :movie="movie" />
			</div>
		</div>
		<div v-else class="h-[50vh]">
			<Spinner />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.top-rated-wrapper {
	@apply my-12;
}
</style>
