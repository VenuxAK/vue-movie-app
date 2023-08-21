<script setup>
import { computed, onMounted, ref } from "vue";
import DataTablePagination from "../../utils/DataTablePagination.vue";
import CastCard from "./CastCard.vue";
import useMovies from "../../../composables/useMovies";
import Spinner from "../../Loading/Spinner.vue";

let movies = ref([]);
const { getCasts } = useMovies();

onMounted(async () => {
	movies.value = await getCasts();
});

let currentPage = ref(1);
let moviesPerPage = ref(36);
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
	<div class="movies-container">
		<DataTablePagination
			:currentPage="currentPage"
			:totalPages="totalPages"
			:totalResults="movies.length"
			from="casts"
			@changePage="handlePageChange"
		/>
		<div class="casts-wrapper" v-if="getCurrentPageData.length > 0">
			<div v-for="movie in getCurrentPageData" :key="movie">
				<CastCard :movie="movie" />
			</div>
		</div>
		<div v-else class="h-[50vh]">
			<Spinner />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.movies-container {
	@apply mt-12 md:container;
	.casts-wrapper {
		@apply grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-x-6 px-3 gap-y-10;
	}
}
</style>
