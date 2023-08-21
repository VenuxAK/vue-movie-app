<script setup>
import { computed, onMounted, ref } from "vue";
import MovieCard from "../../utils/MovieCard.vue";
import DataTablePagination from "../../utils/DataTablePagination.vue";
import useMovies from "../../../composables/useMovies";
import Spinner from "../../Loading/Spinner.vue";

const { getMovies } = useMovies();
let movies = ref([]);

onMounted(async () => {
	movies.value = await getMovies("/known-for");
});

let currentPage = ref(1);
let moviesPerPage = ref(18);
let totalPages = computed(() =>
	Math.ceil(movies.value.length / moviesPerPage.value)
);

const handlePageChange = async (page) => {
	currentPage.value = page;
	movies.value = await getMovies();
	totalPages = Math.ceil(movies.value.length / moviesPerPage.value);
};
const getCurrentPageData = computed(() => {
	const startIndex = (currentPage.value - 1) * moviesPerPage.value;
	const endIndex = startIndex + moviesPerPage.value;
	return movies.value.slice(startIndex, endIndex);
});
</script>
<template>
	<div class="known-for-wrapper">
		<div
			class="movies-container animate_animated animate__fadeIn"
			v-if="movies.length > 0"
		>
			<DataTablePagination
				:currentPage="currentPage"
				:totalPages="totalPages"
				:totalResults="movies.length"
				from="known for"
				@changePage="handlePageChange"
			/>
			<div class="movies-wrapper">
				<div v-for="movie in getCurrentPageData" :key="movie">
					<MovieCard :movie="movie" />
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
}
.paginate-btn {
	@apply flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-gray-700  hover:bg-gray-900 disabled:hover:bg-gray-800;
}
</style>
