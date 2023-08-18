<script setup>
import { ref } from "vue";
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";
import MovieCard from "./MovieCard.vue";

let settings = ref({
	itemsToShow: 1,
	snapAlign: "center",
});
let breakpoints = ref({
	// 380 and up
	380: {
		itemsToShow: 1.5,
		snapAlign: "center",
	},
	// 700px and up
	700: {
		itemsToShow: 3.5,
	},
	// 1024 and up
	1024: {
		itemsToShow: 5,
	},
	1230: {
		itemsToShow: 6,
	},
});
let images = ref([
	"https://imgs.search.brave.com/JbobneMbweBOfjhSf9L7w-GRPz7Jk3nf1ymTpsHhjnk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JiL2Vm/Lzk4L2JiZWY5OGE2/MTE2YTYzNmMwNDUx/NGM2NWE2ZmQ0YTMw/LS1iYWNrZ3JvdW5k/LWlwaG9uZS13YWxs/cGFwZXJzLXdhbGxw/YXBlci1pcGhvbmUt/LmpwZw",
	"https://imgs.search.brave.com/sYtZRNX6YR-Xvh6wi7p_XA3m_7lcQiJXvlzE0dvlwDk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgzLzU0/L2ZlLzgzNTRmZTgz/YTg3OWYyMzBmMjQ2/YTM5ZWRmMWYyNjQz/LS1sb2Nrcy5qcGc",
	"https://imgs.search.brave.com/m9yv1qDOTXsfLMxnim-9yDmgEn7WH9quzED-8iQgfiY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBmLzlm/LzBhLzBmOWYwYWUz/NDZjMmU1YzNhYTAy/MTU0YWQ4MDVhZWQx/LmpwZw",
	"https://imgs.search.brave.com/m3rzdF-zv4fWDEp4ky0RF140PA3n1D4ULy82pOt22qo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M4L2Ez/L2M3L2M4YTNjNzA1/MjIyMGMwNjUzMWNm/OGIzMzZhZGFjZmQz/LS1iZWF1dGlmdWwt/d2FsbHBhcGVyLmpw/Zw",
	"https://imgs.search.brave.com/0W6G7wbedzbLE1JKv2JSl7te_sPkI21xaW9-ETKTfaI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdiLzQ2/Lzk2LzdiNDY5NjZh/YTUwNDdlNDY3ZGYx/MmZlN2Q3ZjczZTgz/LmpwZw",
	"https://imgs.search.brave.com/Z7LqmpRjenK11qSAUYkaso7HwEOcqrXf-sqw4DvTSTc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY5L2Ri/Lzk4LzY5ZGI5ODNl/NmM4M2UxNjA3MDY0/ZTc0NmY3YzcwZjY5/LS10cm9waWNhbC12/aWJlcy10cm9waWNh/bC1wYXJhZGlzZS5q/cGc",
	"https://imgs.search.brave.com/WM5sRR7oGOp7QUwh5a8zWHbdaJoJ4aB6B99oPsIWYjw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I2Lzg4/L2UzL2I2ODhlMzQ2/YzFjYzYwOTAxYjcw/ZmZlY2Q0NWYwMWU2/LmpwZw",
	"https://imgs.search.brave.com/tLe1UT7EQ1J-E83_dq3MzQ_E-Qb9sQkaURUbo9H8lyQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93LmZv/cmZ1bi5jb20vZmV0/Y2gvZjEvZjFjMzY0/ZTk3MTE3ZmU0NzVm/MzUyZWE1NWU1NWQw/MmMuanBlZw",
	"https://imgs.search.brave.com/E3zvXR8hFKfB2NjcevO3ypWMdnTUVpiHrxnn4ECv9kE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q5Lzkx/L2RmL2Q5OTFkZjMy/MDIwOGYzZjA4NzMw/YmFlMzAxNjZiMzc5/LS1iZWF1dGlmdWwt/d2FsbHBhcGVyLWlw/aG9uZS13YWxscGFw/ZXIuanBn",
	"https://imgs.search.brave.com/K3xRQRIFZcdfQVBX3IOdw2FQTf3xSUpDWJuMA-xNTSI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZhLzUx/L2U1L2ZhNTFlNWNk/NjFhOThmNmYwYTZl/YWZkOTkxOTRlN2Jm/LmpwZw",
	"https://imgs.search.brave.com/EelsiweHyKKeyh1WYGv_IqH5MKsgZKkBKcSXZDzEXuY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZG9nL2xh/cmdlLzIwNDkyODg0/LmpwZw",
	"https://imgs.search.brave.com/mp13wnvb9S4khnFJQHYB8t3JtS5zmE8DuFET-FspOGs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS85OS8x/NS9oM1Q2eTEuanBn",
]);
</script>
<template>
	<div>
		<div>
			<h1 class="text-center mb-8 text-3xl md:text-4xl font-bold">
				Trending Movies
			</h1>
		</div>
		<div class="mt-6">
			<Carousel
				:settings="settings"
				:breakpoints="breakpoints"
				:wrapAround="true"
				:transition="500"
				:autoplay="3000"
			>
				<Slide v-for="slide in images" :key="slide">
					<div class="carousel__item mx-1">
						<MovieCard :movie="slide" />
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
		</div>
	</div>
</template>

<style lang="scss">
.carousel__pagination-button::before,
.carousel__pagination-button::after {
	margin: 1rem 0 0;
	width: 12px !important;
	height: 12px !important;
	border-radius: 6px !important;
	// background-color: aliceblue;
}
</style>
