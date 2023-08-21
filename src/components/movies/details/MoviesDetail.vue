<script setup>
import { ref } from "vue";
import OverviewTab from "./OverviewTab.vue";
import TrailersTab from "./TrailersTab.vue";
import CastsTab from "./CastsTab.vue";
import PostersTab from "./PostersTab.vue";
import Spinner from "../../Loading/Spinner.vue";

let tab = ref("overview");

let movie = ref({
	img: "https://imgs.search.brave.com/tLe1UT7EQ1J-E83_dq3MzQ_E-Qb9sQkaURUbo9H8lyQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93LmZv/cmZ1bi5jb20vZmV0/Y2gvZjEvZjFjMzY0/ZTk3MTE3ZmU0NzVm/MzUyZWE1NWU1NWQw/MmMuanBlZw",
});
// let movie = ref(null);
</script>

<template>
	<div
		class="animate__animated animate__fadeIn w-[98%] xs:px-1 md:px-3 px-4 mx-auto lg:container"
	>
		<div class="movie-wrapper" v-if="movie">
			<div class="w-full sm:w-[70%] mx-auto md:w-[50%] lg:w-[35%]">
				<img :src="movie.img" alt="" class="poster" />
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
								Movie title
							</h1>
							<h4
								class="text-base md:text-2xl mt-1 md:mt-0 flex items-center space-x-2"
							>
								<span>8.5</span>
								<span class="text-yellow-400">
									<i class="fa-solid fa-star"></i>
								</span>
							</h4>
						</div>
						<div>
							<div
								class="flex space-x-2 text-gray-600 font-semibold"
							>
								<h5>Date</h5>
								<span> | </span>
								<h5>Duration</h5>
								<span> | </span>
								<h5>16+</h5>
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
						<OverviewTab :tab="tab" />
						<TrailersTab :tab="tab" />
						<CastsTab :tab="tab" />
						<PostersTab :tab="tab" />
					</div>
				</div>
			</div>
		</div>
		<div v-else class="h-[60vh]">
			<Spinner />
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
