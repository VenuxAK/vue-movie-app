<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { Carousel, Navigation, Slide } from "vue3-carousel";

const route = useRoute();

let settings = ref({
	itemsToShow: 1,
	snapAlign: "center",
});
let breakpoints = ref({
	370: {
		itemsToShow: 1.6,
		snapAlign: "center",
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

let tab = ref("overview");

let movie = ref({
	img: "https://imgs.search.brave.com/tLe1UT7EQ1J-E83_dq3MzQ_E-Qb9sQkaURUbo9H8lyQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93LmZv/cmZ1bi5jb20vZmV0/Y2gvZjEvZjFjMzY0/ZTk3MTE3ZmU0NzVm/MzUyZWE1NWU1NWQw/MmMuanBlZw",
});
let landMovies = ref([
	"https://wallpaperaccess.com/full/2435550.png",
	"https://imgs.search.brave.com/LjJ3X7NEi3HzlXGPjLV9mN63OvEVtH1bIuxfxy4bHQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/ZXN0aGV0aWMtZGFy/ay13YWxscGFwZXIt/YmFja2dyb3VuZC1u/ZW9uLWxpZ2h0XzUz/ODc2LTEyODI5MS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw",
	"https://imgs.search.brave.com/txisg5Xsvj-xCCrhWGhu4pv8iHybUHdiyDSHMeXYgkw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93LmZv/cmZ1bi5jb20vZmV0/Y2gvMTAvMTBjMDZk/MzZmOGE2YWQ1NDE1/MzllMjM2ZmQ0ZjE4/MmEuanBlZw",
	"https://imgs.search.brave.com/kkqPCflRA-AzubYt-fc6aJPtvjUaix5S5Utb24qICF0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/bHRyYS1kZXRhaWxl/ZC1uZWJ1bGEtYWJz/dHJhY3Qtd2FsbHBh/cGVyLTEwXzE1NjIt/NzQ1LmpwZz9zaXpl/PTYyNiZleHQ9anBn",
	"https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
	"https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg",
]);
let coverImages = ref([
	{
		id: 1,
		photo: "https://image.tmdb.org/t/p/original/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
	},
	{
		id: 2,
		photo: "https://image.tmdb.org/t/p/original/pPwVYDfwNThUrGDNDStkv6QVHkS.jpg",
	},
	{
		id: 3,
		photo: "https://image.tmdb.org/t/p/original/2BwUMCi9fsZBicuNqBuwrfZoScH.jpg",
	},
	{
		id: 4,
		photo: "https://image.tmdb.org/t/p/original/9EpaPaKozP2b8L1hJekBFI75gCm.jpg",
	},
	{
		id: 5,
		photo: "https://image.tmdb.org/t/p/original/jCiGfY7D6pHIU1dlVccfixUwtGV.jpg",
	},
	{
		id: 6,
		photo: "https://image.tmdb.org/t/p/original/igs08nyaA21oWWA4NT2N2z58HHf.jpg",
	},
	{
		id: 7,
		photo: "https://image.tmdb.org/t/p/original/nU7bIOrUI1ziL5h0saHidjB4i6U.jpg",
	},
]);
let posterImages = ref([
	{
		id: 1,
		photo: "https://image.tmdb.org/t/p/original/xVMtv55caCEvBaV83DofmuZybmI.jpg",
	},
	{
		id: 2,
		photo: "https://image.tmdb.org/t/p/original/m1k24MwmoqAdKMPJDaBLwdB5Tps.jpg",
	},
	{
		id: 3,
		photo: "https://image.tmdb.org/t/p/original/ibjKNVEk348eIXnvwEz2wC45MGs.jpg",
	},
	{
		id: 4,
		photo: "https://image.tmdb.org/t/p/original/wGmf94zgpn1NjxsJ2cpZVNjZqcR.jpg",
	},
	{
		id: 5,
		photo: "https://image.tmdb.org/t/p/original/1eHMicYRA0BBnWUyXofyDCMnVJv.jpg",
	},
	{
		id: 6,
		photo: "https://image.tmdb.org/t/p/original/pKZFNuvKF1R9fmrbkT5JoaFhGbN.jpg",
	},
	{
		id: 7,
		photo: "https://image.tmdb.org/t/p/original/cuJ8IxabMEQVpF5TWnmVTvitHIm.jpg",
	},
]);
</script>

<template>
	<div class="w-[98%] xs:px-1 md:px-3 px-4 mx-auto lg:container">
		<div class="movie-wrapper">
			<div class="w-full sm:w-[70%] mx-auto md:w-[50%] lg:w-[35%]">
				<img :src="movie.img" alt="" class="poster" />
			</div>
			<div class="w-full lg:w-[65%]">
				<div class="flex flex-col space-y-8">
					<div>
						<div
							class="flex flex-col md:flex-row justify-between lg:items-center mb-4 lg:mb-0"
						>
							<h1
								class="text-2xl md:text-3xl lg:text-5xl font-semibold"
							>
								Movie title
							</h1>
							<h4 class="text-3xl flex items-center space-x-2">
								<span>8.5</span>
								<span class="text-2xl text-yellow-400">
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
					<div class="flex flex-col w-full space-y-6">
						<div class="tabs-wrapper">
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
						<div v-if="tab === 'overview'" class="overview-wrapper">
							<div class="flex flex-col space-y-6">
								<div class="md:pr-4 lg:pr-10">
									<p class="text-gray-200 font-medium">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Doloremque, laudantium
										non nemo, recusandae aliquam dicta, sunt
										reprehenderit quis excepturi ipsum
										distinctio? Alias quaerat vero enim
										corrupti doloremque animi, ab natus.
									</p>
								</div>
								<div class="w-full space-y-2 font-medium">
									<div class="flex w-full">
										<div class="w-28">
											<h5 class="text-gray-400">
												Starring
											</h5>
										</div>
										<div class="w-full">
											<h5>
												Scarlett Johnason, Tessatomson,
												Rober Downey Jr
											</h5>
										</div>
									</div>
									<div class="flex">
										<div class="w-28">
											<h5 class="text-gray-400">
												Created by
											</h5>
										</div>
										<div class="w-full">
											<h5>Anathony Russo, Joe Russo</h5>
										</div>
									</div>
									<div class="flex">
										<div class="w-28">
											<h5 class="text-gray-400">
												Genres
											</h5>
										</div>
										<div class="w-full">
											<h5>Action, Advanture, Fantasy</h5>
										</div>
									</div>
								</div>
							</div>
							<div class="">
								<div>
									<h3 class="text-2xl font-medium mb-3">
										Related Movies
									</h3>
								</div>
								<div class="related-movies-wrapper">
									<Carousel
										:breakpoints="breakpoints"
										:settings="settings"
									>
										<Slide
											v-for="mv in landMovies"
											:key="mv"
										>
											<div class="carousel__item">
												<RouterLink to="#">
													<div class="cover">
														<img :src="mv" alt="" />
													</div>
												</RouterLink>
											</div>
										</Slide>

										<template #addons>
											<Navigation />
										</template>
									</Carousel>
								</div>
							</div>
						</div>
						<div v-if="tab === 'trailers'" class="trailers-wrapper">
							<div>
								<div>
									<div class="videos-wrapper">
										<div class="trailer">
											<h4>Final Trailer</h4>
											<div class="yt-video-wrapper">
												<iframe
													allowfullscreen
													src="https://www.youtube.com/embed/dblbocy0M-o?mute=1"
												>
												</iframe>
											</div>
										</div>
										<div class="trailer">
											<h4>Opening Ceremony</h4>
											<div class="yt-video-wrapper">
												<iframe
													allowfullscreen
													src="https://www.youtube.com/embed/nnAHTtxPp-Y?mute=1"
												>
												</iframe>
											</div>
										</div>
										<div class="trailer">
											<h4>Ending Ceremony</h4>
											<div class="yt-video-wrapper">
												<iframe
													allowfullscreen
													src="https://www.youtube.com/embed/XuDwndGaCFo?mute=1"
												>
												</iframe>
											</div>
										</div>
										<div class="trailer">
											<h4>Premiere of the film</h4>
											<div class="yt-video-wrapper">
												<iframe
													allowfullscreen
													src="https://www.youtube.com/embed/VbnS5biBmsw?mute=1"
												>
												</iframe>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div v-if="tab === 'casts'" class="casts-wrapper">
							<div>
								<h1>Casts</h1>
							</div>
						</div>
						<div v-if="tab === 'posters'" class="posters-wrapper">
							<div>
								<div class="container mx-auto">
									<h2
										class="py-4 text-3xl font-bold text-center text-danger"
									>
										Posters
									</h2>
									<div
										class="lg:gap-2 lg:grid lg:grid-cols-3 border-b border-b-gray-700 pb-8"
									>
										<div
											class="w-full rounded"
											v-for="image in coverImages"
											:key="image.id"
										>
											<img
												:src="image.photo"
												alt="image"
												class="p-1"
											/>
										</div>
									</div>
									<h2
										class="py-4 text-3xl font-bold text-center text-danger"
									>
										Covers
									</h2>
									<div class="flex flex-wrap">
										<div
											class="w-full lg:w-1/3"
											v-for="image in posterImages"
											:key="image.id"
										>
											<img
												:src="image.photo"
												alt="image"
												class="p-1"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.movie-wrapper {
	@apply flex flex-col lg:flex-row w-full lg:space-x-20;
	.poster {
		@apply w-full xs:h-[60vh] lg:h-[75vh] object-cover mb-8 lg:mb-0;
	}
	.tabs-wrapper {
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
	.related-movies-wrapper {
		@apply flex flex-wrap;
		img {
			@apply w-52 h-32 object-cover;
		}
	}
	.overview-wrapper {
		@apply flex flex-col space-y-6;
	}
	.trailers-wrapper {
		.videos-wrapper {
			@apply md:flex md:flex-row md:flex-wrap w-full;

			.trailer {
				@apply mb-8 md:mb-6 md:w-[49%];
				h4 {
					@apply text-lg font-semibold;
				}
				.yt-video-wrapper {
					@apply aspect-w-16 aspect-h-9 md:aspect-w-8 md:aspect-h-4 m-1;
				}
			}
		}
	}
	.similar-wrapper {
	}
}
</style>
