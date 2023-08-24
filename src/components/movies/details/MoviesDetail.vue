<script setup>
import { onMounted, ref } from "vue";
import OverviewTab from "./OverviewTab.vue";
import TrailersTab from "./TrailersTab.vue";
import CastsTab from "./CastsTab.vue";
import PostersTab from "./PostersTab.vue";
import Spinner from "../../Loading/Spinner.vue";
import { useMovies } from "../../../stores/useMovies";
import { RouterLink, useRoute, useRouter } from "vue-router";
import RelatedMovies from "./RelatedMovies.vue";

const route = useRoute();
const router = useRouter();
let tab = ref("overview");
const { getMovieDetail } = useMovies();
let movie = ref(null);
let loading = ref(false);
let notFound = ref(false);

const load = async (_id) => {
	let response = await getMovieDetail(_id);
	if (response.statusCode === 200) {
		return response.data;
	} else {
		notFound.value = true;
		return;
	}
};
const reload = async (_ids) => {
	loading.value = true;
	let response = await load(_ids);
	movie.value = await response;
	loading.value = false;
};

onMounted(async () => {
	movie.value = await load(route.params.id);
});
</script>

<template>
	<div
		class="animate__animated animate__fadeIn w-[98%] xs:px-1 md:px-3 px-4 mx-auto lg:container"
		v-if="!notFound"
	>
		<div class="movie-wrapper" v-if="movie && !loading">
			<div class="w-full sm:w-[70%] mx-auto md:w-[50%] lg:w-[35%]">
				<img :src="movie.poster" alt="" class="poster" />
			</div>
			<div class="w-full lg:w-[65%]">
				<div class="flex flex-col space-y-8">
					<div>
						<div
							class="flex flex-col md:flex-row justify-between lg:items-center mb-2 lg:mb-6"
						>
							<h1
								class="text-2xl md:text-3xl lg:text-5xl font-semibold"
							>
								{{ movie.title ?? movie.name }}
							</h1>
							<h4
								class="text-base md:text-2xl mt-1 md:mt-0 flex items-center space-x-2"
							>
								<span>{{ movie.vote_average.toFixed(1) }}</span>
								<span class="text-yellow-400">
									<i class="fa-solid fa-star"></i>
								</span>
							</h4>
						</div>
						<div>
							<div
								class="flex space-x-2 text-gray-600 font-semibold"
							>
								<h5>
									{{
										movie.release_date ??
										movie.first_air_date
									}}
								</h5>
								<h5 v-if="movie.runtime">
									<span> | </span>
									{{ movie.runtime }} mins
								</h5>
								<h5 v-if="movie.adult">
									<span> | </span>
									{{ movie.adult ? "18+" : "16+" }}
								</h5>
							</div>
						</div>
					</div>
					<div class="tabs-wrapper">
						<div class="tabs-controller">
							<div class="btn">
								<button
									@click="tab = 'overview'"
									:class="{ active: tab === 'overview' }"
								>
									Overview
								</button>
							</div>
							<div class="btn">
								<button
									@click="tab = 'trailers'"
									:class="{ active: tab === 'trailers' }"
								>
									Trailers and more
								</button>
							</div>
							<div class="btn">
								<button
									@click="tab = 'casts'"
									:class="{ active: tab === 'casts' }"
								>
									Casts
								</button>
							</div>
							<div class="btn">
								<button
									@click="tab = 'posters'"
									:class="{ active: tab === 'posters' }"
								>
									Posters
								</button>
							</div>
						</div>
						<OverviewTab :tab="tab" :movie="movie" />
						<RelatedMovies
							v-if="tab === 'overview'"
							:movie="movie"
							@change-movie="reload"
						/>
						<TrailersTab :tab="tab" :id="movie.id" />
						<CastsTab :tab="tab" :id="movie.id" />
						<PostersTab :tab="tab" :id="movie.id" />
					</div>
				</div>
			</div>
		</div>
		<div v-else class="h-[60vh]">
			<Spinner />
		</div>
	</div>
	<div
		v-else
		class="animate__animated animate__fadeIn w-[98%] xs:px-1 md:px-3 px-4 mx-auto lg:container h-[75vh] flex items-center justify-center"
	>
		<div class="text-center mb-32">
			<h1 class="text-5xl">Opps!</h1>
			<h3 class="text-3xl mt-6 mb-2">
				<span class="text-danger font-bold">404</span> | Movie Not Found
			</h3>
			<h4 class="text-gray-200 text-lg">
				Go back to
				<RouterLink to="/" class="text-danger font-bold"
					>home</RouterLink
				>
				page.
			</h4>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.movie-wrapper {
	@apply flex flex-col lg:flex-row w-full lg:space-x-20;
	.poster {
		@apply w-full xs:h-[60vh] lg:h-[75vh] object-cover mb-2 lg:mb-0 rounded-md;
	}
	.tabs-wrapper {
		@apply flex flex-col w-full space-y-6;
		.tabs-controller {
			@apply flex justify-between border-b border-b-gray-800;

			.btn {
				@apply relative;

				button {
					@apply text-xs md:text-base font-bold uppercase py-4 px-1;

					&.active::after {
						content: "";
						position: absolute;
						left: 50%;
						bottom: -4px;
						transform: translateX(-50%);
						width: 100%;
						height: 0.2rem;
						border-radius: 20%;
						// @apply bg-red-600;
						@apply bg-danger;
					}
				}
			}
		}
	}
}
</style>
