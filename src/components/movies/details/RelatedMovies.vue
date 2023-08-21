<script setup>
import { ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

const props = defineProps(["movie"]);

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
	<div class="related-movies-container animate__animated animate__fadeIn">
		<div>
			<h3 class="text-2xl font-medium mb-3">Related Movies</h3>
		</div>
		<div class="related-movies-wrapper">
			<Carousel :breakpoints="breakpoints" :settings="settings">
				<Slide v-for="mv in landMovies" :key="mv">
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
</template>

<style lang="scss" scoped>
.related-movies-wrapper {
	@apply flex flex-wrap;
	img {
		@apply w-52 h-32 object-cover rounded-md;
	}
}
</style>
