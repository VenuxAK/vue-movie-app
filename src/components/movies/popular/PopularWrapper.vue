<script setup>
import { onMounted, ref } from "vue";
import MovieCard from "../../utils/MovieCard.vue";
import Spinner from "../../Loading/Spinner.vue";
import { useMovies } from "../../../stores/useMovies";

const { getMovies } = useMovies();

let movies = ref([]);

onMounted(async () => {
	let response = await getMovies("/movies/popular");
	movies.value = response.data;
	// console.log(response);
});
</script>

<template>
	<div class="movies-container">
		<div>
			<h1 class="text-3xl px-3 lg:px-0 mb-12 uppercase font-medium">
				Popular Now
			</h1>
		</div>
		<div class="movies-wrapper" v-if="movies.length > 0">
			<div v-for="movie in movies" :key="movie">
				<MovieCard :movie="movie" />
			</div>
		</div>
		<div v-else class="h-[50vh]">
			<Spinner />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.movies-container {
	@apply mt-12 pb-12 md:container border-b border-gray-800;
}
</style>
