<script setup>
import { computed, onMounted, ref } from "vue";
import CastCard from "./CastCard.vue";
import Spinner from "../../Loading/Spinner.vue";
import { useMovies } from "../../../stores/useMovies";

// let movies = ref([]);
let casts = ref([]);
const { getCasts } = useMovies();

onMounted(async () => {
	let response = await getCasts("/casts");
	// console.log(response);
	casts.value = [...(response ?? null)]; //? is a null-coalescing operator
});

let currentPage = ref(1);
let moviesPerPage = ref(36);

const getCurrentPageData = computed(() => {
	const startIndex = (currentPage.value - 1) * moviesPerPage.value;
	const endIndex = startIndex + moviesPerPage.value;
	return casts.value.slice(startIndex, endIndex);
});
</script>

<template>
	<div class="movies-container">
		<div>
			<h1 class="text-3xl my-4 px-2 md:px-4 font-medium md:font-bold">Casts</h1>
		</div>
		<div class="casts-wrapper" v-if="getCurrentPageData.length > 0">
			<div v-for="cast in getCurrentPageData" :key="cast">
				<CastCard :cast="cast" />
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
		@apply grid grid-cols-3 md:grid-cols-6 xxl:grid-cols-9 gap-x-6 px-3 gap-y-10;
	}
}
</style>
