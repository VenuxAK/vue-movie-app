<script setup>
import { onMounted, ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { useMovies } from "../../stores/useMovies";
import Spinner from "../Loading/Spinner.vue";

const { getMovies } = useMovies();

let movies = ref([]);
onMounted(async () => {
	let response = await getMovies("/movies/discover");
	movies.value = response.data;
	// console.log(movies.value.length);
});

const settings = ref({
	itemsToShow: 1,
	snapAlign: "center",
});
const breakpoints = ref({
	// 700px and up
	380: {
		itemsToShow: 2,
		snapAlign: "start",
	},
	640: {
		itemsToShow: 2.5,
		snapAlign: "start",
	},
	768: {
		itemsToShow: 3,
		snapAlign: "start",
	},
	// 1024 and up
	1024: {
		itemsToShow: 3.8,
		snapAlign: "start",
	},
	1280: {
		itemsToShow: 4.8,
		snapAlign: "start",
	},
	1600: {
		itemsToShow: 5.8,
		snapAlign: "start",
	},
});
</script>

<template>
	<div class="my-6">
		<h1 class="text-center text-3xl mb-4 font-medium">Recommendation</h1>
		<div class="container">
			<div v-if="movies.length > 0">
				<Carousel v-bind="settings" :breakpoints="breakpoints">
					<Slide
						v-for="(movie, index) in movies"
						:key="index"
						class=""
					>
						<div class="carousel__item">
							<div class="movie_slider">
								<RouterLink :to="'/movies/' + movie.id">
									<img :src="movie.backdrop" alt="" />
								</RouterLink>
							</div>
						</div>
					</Slide>

					<template #addons>
						<Navigation />
					</template>
				</Carousel>
			</div>
			<div v-else>
				<Spinner />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.movie_slider {
	@apply lg:w-[300px] lg:h-[200px] overflow-hidden;
	img {
		@apply w-full h-full object-cover rounded-md;
	}
	@media screen and (max-width: 640px) {
		@apply w-[180px] h-[110px];
	}
	@media screen and (min-width: 640px) {
		@apply w-[230px] h-[150px];
	}
}
</style>
