<script setup>
import { onMounted, ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { useMovies } from "../../../stores/useMovies";
import Spinner from "../../Loading/Spinner.vue";

const props = defineProps(["movie"]);
const emit = defineEmits(["changeMovie"]);

let movies = ref([]);
let noMovies = ref(false);

const { getMovies } = useMovies();

const changeMovie = (_id) => {
	emit("changeMovie", _id);
};

let settings = ref({
	itemsToShow: 1,
	snapAlign: "start",
});
let breakpoints = ref({
	370: {
		itemsToShow: 1.6,
		snapAlign: "start",
	},
	420: {
		itemsToShow: 1.8,
	},
	500: {
		itemsToShow: 2.1,
	},
	555: {
		itemsToShow: 2.5,
	},
	768: {
		itemsToShow: 3.2,
	},
	850: {
		itemsToShow: 3.8,
	},
	1024: {
		itemsToShow: 2.5,
	},
	1280: {
		itemsToShow: 3.3,
	},
});

onMounted(async () => {
	// api/v1/movies/{id}/similar
	const collections = props.movie.belongs_to_collection;
	if (collections) {
		let response = await getMovies(`/movies/${collections.id}/related`);
		// console.log(response.data);
		movies.value = response.data.parts.filter((movie) => {
			return movie.backdrop !== null;
		});
	} else {
		// movies/{id}/similar
		let response = await getMovies(`/movies/${props.movie.id}/similar`);
		if (response.statusCode === 404) {
			noMovies.value = true;
			movies.value = [];
			return;
		} else {
			movies.value = response.data.filter((movie) => {
				return movie.backdrop !== null;
			});
		}
	}
});
</script>
<template>
	<div
		class="related-movies-container animate__animated animate__fadeIn"
		v-if="movies.length > 0 && !noMovies"
	>
		<div>
			<h3 class="text-2xl font-medium mb-3">Related Movies</h3>
		</div>
		<div class="related-movies-wrapper">
			<Carousel
				:breakpoints="breakpoints"
				:settings="settings"
				v-if="movies.length > 0"
			>
				<Slide v-for="movie in movies" :key="movie">
					<div
						class="carousel__item"
						:class="{
							'mr-4 md:mr-2': movies.length <= 3,
						}"
					>
						<div>
							<RouterLink
								:to="'/movies/' + movie.id"
								@click="changeMovie(movie.id)"
							>
								<div
									class="cover"
									:class="{
										'w-[350px]':
											movies.length < 2,
									}"
								>
									<img :src="movie.backdrop" alt="" />
								</div>
							</RouterLink>
						</div>
					</div>
				</Slide>

				<template #addons v-if="movies.length > 2">
					<Navigation />
				</template>
			</Carousel>
			<div v-else class="h-[30vh] border-t border-gray-800 mt-8">
				<Spinner />
			</div>
		</div>
	</div>
	<div v-else>
		<!-- <h1>No related movies found</h1> -->
	</div>
</template>

<style lang="scss" scoped>
.related-movies-wrapper {
	@apply flex flex-wrap;
	img {
		@apply w-52 h-32 object-cover rounded-md;
	}
}
</style>
