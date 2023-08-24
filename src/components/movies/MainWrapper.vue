<script setup>
import { computed, onMounted, ref } from "vue";
import MovieCard from "../utils/MovieCard.vue";
import DataTablePagination from "../utils/DataTablePagination.vue";
import { useMovies } from "../../stores/useMovies";
import Spinner from "../Loading/Spinner.vue";

const { getMovies } = useMovies();
let movies = ref([]);
let totalResults = ref(0);
let totalPages = ref(0);
let currentPage = ref(1);
let loading = ref(false);
let disabled = ref(false);

const handlePageChange = async (page) => {
	currentPage.value = page;
	disabled.value = true;
	loading.value = true;
	let response = await getMovies("/movies/trending/all/week", page);
	// console.log(response);
	movies.value = response.data;
	loading.value = false;
	disabled.value = false;
};
const getCurrentPageData = computed(() => {
	return movies.value;
});

onMounted(async () => {
	let response = await getMovies("/movies/trending/all/week");
	totalResults.value = response.total_results;
	totalPages.value = response.total_pages;
	movies.value = response.data;
});
</script>

<template>
	<div
		class="movies-container animate_animated animate__fadeIn"
		v-if="movies.length > 0 && !loading"
	>
		<DataTablePagination
			:currentPage="currentPage"
			:totalPages="totalPages"
			:totalResults="totalResults"
			:disabled="disabled"
			from="movies"
			@changePage="handlePageChange"
		/>
		<div class="movies-wrapper animate_animated animate__fadeIn">
			<div v-for="movie in getCurrentPageData" :key="movie">
				<MovieCard :movie="movie" />
			</div>
		</div>
	</div>
	<div v-else class="w-full h-[80vh]">
		<Spinner />
	</div>
</template>

<style lang="scss" scoped>
.movies-container {
	@apply mt-12 pb-12 md:container border-b border-gray-800;
}
.paginate-btn {
	@apply flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-gray-700  hover:bg-gray-900 disabled:hover:bg-gray-800;
}
</style>
