<script setup>
import { onMounted, ref } from "vue";
import Spinner from "../Loading/Spinner.vue";
import useMovies from "../../composables/useMovies";
import MovieCard from "../utils/MovieCard.vue";

const { getMovies } = useMovies();
let movies = ref([]);

onMounted(async () => {
	movies.value = await getMovies("/top-rated");
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
