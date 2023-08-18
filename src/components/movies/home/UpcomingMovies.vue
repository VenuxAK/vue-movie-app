<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";

let settings = ref({
	itemsToShow: 4,
	snapAlign: "center",
});
let breakpoints = ref({
	// 380 and up
	380: {
		itemsToShow: 1,
		snapAlign: "center",
	},
});

let movies = ref([
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
	"https://imgs.search.brave.com/tLe1UT7EQ1J-E83_dq3MzQ_E-Qb9sQkaURUbo9H8lyQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93LmZv/cmZ1bi5jb20vZmV0/Y2gvZjEvZjFjMzY0/ZTk3MTE3ZmU0NzVm/MzUyZWE1NWU1NWQw/MmMuanBlZw",
	"https://imgs.search.brave.com/E3zvXR8hFKfB2NjcevO3ypWMdnTUVpiHrxnn4ECv9kE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q5Lzkx/L2RmL2Q5OTFkZjMy/MDIwOGYzZjA4NzMw/YmFlMzAxNjZiMzc5/LS1iZWF1dGlmdWwt/d2FsbHBhcGVyLWlw/aG9uZS13YWxscGFw/ZXIuanBn",
	"https://imgs.search.brave.com/K3xRQRIFZcdfQVBX3IOdw2FQTf3xSUpDWJuMA-xNTSI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZhLzUx/L2U1L2ZhNTFlNWNk/NjFhOThmNmYwYTZl/YWZkOTkxOTRlN2Jm/LmpwZw",
	"https://imgs.search.brave.com/EelsiweHyKKeyh1WYGv_IqH5MKsgZKkBKcSXZDzEXuY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZG9nL2xh/cmdlLzIwNDkyODg0/LmpwZw",
	"https://imgs.search.brave.com/mp13wnvb9S4khnFJQHYB8t3JtS5zmE8DuFET-FspOGs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS85OS8x/NS9oM1Q2eTEuanBn",
	"https://imgs.search.brave.com/tLe1UT7EQ1J-E83_dq3MzQ_E-Qb9sQkaURUbo9H8lyQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93LmZv/cmZ1bi5jb20vZmV0/Y2gvZjEvZjFjMzY0/ZTk3MTE3ZmU0NzVm/MzUyZWE1NWU1NWQw/MmMuanBlZw",
	"https://imgs.search.brave.com/E3zvXR8hFKfB2NjcevO3ypWMdnTUVpiHrxnn4ECv9kE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q5Lzkx/L2RmL2Q5OTFkZjMy/MDIwOGYzZjA4NzMw/YmFlMzAxNjZiMzc5/LS1iZWF1dGlmdWwt/d2FsbHBhcGVyLWlw/aG9uZS13YWxscGFw/ZXIuanBn",
	"https://imgs.search.brave.com/K3xRQRIFZcdfQVBX3IOdw2FQTf3xSUpDWJuMA-xNTSI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZhLzUx/L2U1L2ZhNTFlNWNk/NjFhOThmNmYwYTZl/YWZkOTkxOTRlN2Jm/LmpwZw",
	"https://imgs.search.brave.com/EelsiweHyKKeyh1WYGv_IqH5MKsgZKkBKcSXZDzEXuY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZG9nL2xh/cmdlLzIwNDkyODg0/LmpwZw",
	"https://imgs.search.brave.com/mp13wnvb9S4khnFJQHYB8t3JtS5zmE8DuFET-FspOGs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS85OS8x/NS9oM1Q2eTEuanBn",
	"https://imgs.search.brave.com/tLe1UT7EQ1J-E83_dq3MzQ_E-Qb9sQkaURUbo9H8lyQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93LmZv/cmZ1bi5jb20vZmV0/Y2gvZjEvZjFjMzY0/ZTk3MTE3ZmU0NzVm/MzUyZWE1NWU1NWQw/MmMuanBlZw",
	"https://imgs.search.brave.com/E3zvXR8hFKfB2NjcevO3ypWMdnTUVpiHrxnn4ECv9kE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q5Lzkx/L2RmL2Q5OTFkZjMy/MDIwOGYzZjA4NzMw/YmFlMzAxNjZiMzc5/LS1iZWF1dGlmdWwt/d2FsbHBhcGVyLWlw/aG9uZS13YWxscGFw/ZXIuanBn",
	"https://imgs.search.brave.com/K3xRQRIFZcdfQVBX3IOdw2FQTf3xSUpDWJuMA-xNTSI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZhLzUx/L2U1L2ZhNTFlNWNk/NjFhOThmNmYwYTZl/YWZkOTkxOTRlN2Jm/LmpwZw",
	"https://imgs.search.brave.com/EelsiweHyKKeyh1WYGv_IqH5MKsgZKkBKcSXZDzEXuY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZG9nL2xh/cmdlLzIwNDkyODg0/LmpwZw",
	"https://imgs.search.brave.com/mp13wnvb9S4khnFJQHYB8t3JtS5zmE8DuFET-FspOGs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS85OS8x/NS9oM1Q2eTEuanBn",
]);
let landMovies = ref([
	"https://wallpaperaccess.com/full/2435550.png",
	"https://imgs.search.brave.com/LjJ3X7NEi3HzlXGPjLV9mN63OvEVtH1bIuxfxy4bHQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/ZXN0aGV0aWMtZGFy/ay13YWxscGFwZXIt/YmFja2dyb3VuZC1u/ZW9uLWxpZ2h0XzUz/ODc2LTEyODI5MS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw",
	"https://imgs.search.brave.com/txisg5Xsvj-xCCrhWGhu4pv8iHybUHdiyDSHMeXYgkw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93LmZv/cmZ1bi5jb20vZmV0/Y2gvMTAvMTBjMDZk/MzZmOGE2YWQ1NDE1/MzllMjM2ZmQ0ZjE4/MmEuanBlZw",
	"https://imgs.search.brave.com/kkqPCflRA-AzubYt-fc6aJPtvjUaix5S5Utb24qICF0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/bHRyYS1kZXRhaWxl/ZC1uZWJ1bGEtYWJz/dHJhY3Qtd2FsbHBh/cGVyLTEwXzE1NjIt/NzQ1LmpwZz9zaXpl/PTYyNiZleHQ9anBn",
	"https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
	"https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg",
]);
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
			>
				<Slide v-for="movie in landMovies.slice(0, 7)" :key="movie">
					<div class="carousel__item">
						<div class="relative rounded-md overflow-hidden">
							<div class="responsive-bp">
								<div class="min-w-full h-full">
									<RouterLink to="/movies/smt">
										<img
											:src="movie"
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
