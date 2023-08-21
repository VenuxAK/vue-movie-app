<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import Spinner from "../../Loading/Spinner.vue";
import useMovies from "../../../composables/useMovies";

const { getMovies } = useMovies();
let movies = ref([]);
onMounted(async () => {
	movies.value = await getMovies("/upcoming");
});

let settings = ref({
	itemsToShow: 4,
	snapAlign: "center",
});
let breakpoints = ref({
	380: {
		itemsToShow: 1,
		snapAlign: "center",
	},
});
</script>
<template>
	<div class="">
		<div class="container">
			<h1 class="text-center mb-8 text-3xl md:text-4xl font-bold">
				Upcoming Movies
			</h1>
			<div></div>
		</div>
		<div class="container">
			<Carousel
				:settings="settings"
				:breakpoints="breakpoints"
				:wrapAround="true"
				:transition="700"
				:autoplay="5000"
				v-if="movies.length > 0"
			>
				<Slide v-for="movie in movies.slice(0, 7)" :key="movie">
					<div class="carousel__item">
						<div class="relative rounded-md overflow-hidden">
							<div class="responsive-bp">
								<div class="min-w-full h-full">
									<RouterLink to="/movies/smt">
										<img
											:src="movie.poster"
											alt=""
											class="w-full h-full object-cover"
										/>
									</RouterLink>
								</div>
							</div>
							<div class="movie-overview">
								<div class="w-full px-3">
									<div class="flex flex-col items-start">
										<RouterLink
											to="/movies/smt"
											class="text-xl md:text-3xl text-danger font-bold"
										>
											Movie Name
										</RouterLink>
										<div
											class="flex flex-col text-start my-4"
										>
											<h5>
												Language:
												<span class="font-bold"
													>English</span
												>
											</h5>
											<h5>
												Release date :
												<span>2023 Dec 25</span>
											</h5>
										</div>
										<div
											class="flex flex-col mt-3 items-start text-start"
										>
											<h3
												class="text-lg md:text-xl font-semibold"
											>
												Overview
											</h3>
											<p
												class="text-gray-200 text-sm md:text-base"
											>
												Lorem ipsum dolor sit, amet
												consectetur adipisicing elit.
												Culpa distinctio, temporibus
												porro perferendis animi quod
												soluta aut explicabo ipsum
												inventore expedita ratione
												laborum nobis, doloribus dolores
												voluptas? Veritatis, dolore
												explicabo.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Slide>

				<template #addons>
					<div class="hidden md:block">
						<Navigation>
							<template #next>
								<span class="navigation-controller">
									<i class="fa-solid fa-circle-right"></i>
								</span>
							</template>
							<template #prev>
								<span class="navigation-controller">
									<i class="fa-solid fa-circle-left"></i>
								</span>
							</template>
						</Navigation>
					</div>
					<div class="block md:hidden">
						<Pagination />
					</div>
				</template>
			</Carousel>
			<div v-else class="w-full h-[40vh] border-gray-800">
				<Spinner />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.responsive-bp {
	@apply w-[100%] min-w-[90vw] h-[80vh] md:h-[70vh];
}
.movie-overview {
	@apply absolute w-full md:w-[50%] md:h-full bottom-0 right-0 md:right-0 bg-black/50 py-3 backdrop-blur-sm;
}
.carousel__item {
	// min-height: 200px;
	width: 100%;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.carousel__slide {
	padding: 10px;
}

.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
}
</style>
