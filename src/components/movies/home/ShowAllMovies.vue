<script setup>
import { onMounted, ref } from "vue";
import MovieCard from "../../utils/MovieCard.vue";
import Spinner from "../../Loading/Spinner.vue";
import { useMovies } from "../../../stores/useMovies";

const { getMovies } = useMovies();

let movies = ref([]);
let tab = ref("movies");
let active = ref(true);
let load = ref(0);
let loading = ref(false);

// loading.value = true;
const tabToggler = (_tab) => {
	tab.value = _tab;
	load.value = 0;
	if (_tab === "movies") {
		loading.value = true;
		getMovies("/movies/trending/all/week").then((response) => {
			movies.value = response.data;
			loading.value = false;
			// console.log("From Movies", response.data);
		});
		return;
	} else if (_tab === "popular") {
		loading.value = true;
		getMovies("/movies/popular").then((response) => {
			movies.value = response.data;
			loading.value = false;
			// console.log("From Popular", response.data);
		});
		return;
	}
};
onMounted(async () => {
	let response = await getMovies("/movies/trending/all/week");
	movies.value = await response.data;
});
</script>
<template>
	<div class="my-16">
		<div class="container">
			<div
				class="flex flex-col md:flex-row justify-between md:items-center space-y-8 md:space-y-0 mx-3 md:mx-0"
			>
				<div
					class="w-full flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center flex-1"
				>
					<div class="md:w-[50%]">
						<h1 class="font-bold text-2xl">
							{{ tab === "movies" ? "Movies" : null }}
							{{ tab === "popular" ? "Popular now" : null }}
							{{ tab === "recent" ? "Recent playing" : null }}
						</h1>
					</div>
					<div class="flex space-x-6">
						<div>
							<button
								class="toggler-btn"
								@click="tabToggler('movies')"
								:class="{ active: tab === 'movies' && active }"
							>
								Movies
							</button>
						</div>
						<div>
							<button
								class="toggler-btn"
								@click="tabToggler('popular')"
								:class="{ active: tab === 'popular' && active }"
							>
								Popular
							</button>
						</div>
						<div>
							<button
								class="toggler-btn"
								@click="tabToggler('recent')"
								:class="{ active: tab === 'recent' && active }"
							>
								Recent
							</button>
						</div>
					</div>
				</div>
				<div class="">
					<div class="relative md:border-l border-l-gray-600 md:pl-4">
						<span class="absolute top-2 left-3 md:left-6">
							<i class="fa-solid fa-magnifying-glass"></i>
						</span>
						<input
							type="text"
							placeholder="Search something here.."
							class="bg-transparent border-0 pl-10 focus:outline-none w-full"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-6 mb-10 bg-primary pt-14 pb-10">
			<div
				class="movies-wrapper animate__animated animate__fadeIn"
				v-if="movies.length > 0 && !loading"
			>
				<div
					v-for="movie in movies.slice(0, 18 + load)"
					:key="movie"
				>
					<MovieCard :movie="movie" />
				</div>
			</div>
			<div v-else class="w-full h-[60vh]">
				<Spinner />
			</div>
			<div class="" v-if="movies.length > 18">
				<button
					class="load-more"
					@click="load === 9 ? (load -= 9) : (load += 9)"
				>
					{{ load == 9 ? "Show less" : "Show more" }}
				</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.toggler-btn {
	@apply text-lg relative transition-all;
}
.toggler-btn.active {
	@apply text-danger font-bold;
}

.toggler-btn.active::after {
	content: "";
	position: absolute;
	left: 50%;
	bottom: -10px;
	transform: translateX(-50%);
	width: 100%;
	height: 0.2rem;
	border-radius: 20%;
	@apply bg-danger;
}
</style>
