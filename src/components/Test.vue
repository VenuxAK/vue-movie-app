<script setup>
import { ref } from "vue";

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

let tab = ref("movies");
let active = ref(true);
const tabToggler = (goto) => {
	tab.value = goto;
};
let load = ref(0);
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
						<span class="absolute">
							<i class="fa-solid fa-magnifying-glass"></i>
						</span>
						<input
							type="text"
							class="bg-transparent pl-8 focus:outline-none w-full"
							placeholder="Search something here.."
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-6 mb-10 bg-primary pt-14 pb-10">
			<div class="movie-wrapper">
				<div
					class="movie"
					v-for="mv in movies.slice(0, 10 + load)"
					:key="mv"
				>
					<div class="movie-poster">
						<RouterLink to="/movies/smt" class="">
							<img :src="mv" alt="" class="" />
						</RouterLink>
					</div>
					<div class="movie-overview">
						<RouterLink
							to="/movies/smt"
							class="md:text-lg my-1 font-bold truncate block"
						>
							Movie name Movie name Movie name Movie name
						</RouterLink>
						<p class="text-sm text-gray-500">
							<span class="font-medium"
								>7.8</span
							>
							<span> | </span>
							<span class="font-bold">
								<span>Genres </span>
								<span>Genres </span>
								<span>Genres </span>
								<span>Genres</span>
							</span>
						</p>
					</div>
				</div>
			</div>
			<div class="" v-if="movies.length > 10">
				<button
					class="load-more"
					@click="load === 10 ? (load -= 10) : (load += 10)"
				>
					{{ load == 10 ? "Show less" : "Show more" }}
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
	// @apply bg-red-600;
	@apply bg-danger;
}

.movie-wrapper {
	@apply flex flex-wrap justify-center;
	.movie {
		@apply mx-2 mb-5 md:mx-3 w-40 md:w-48 xl:w-56 h-96 xl:h-[420px] relative;
		.movie-poster {
			@apply w-full h-[85%] rounded-md overflow-hidden;
			img {
				@apply w-full h-full object-cover;
			}
		}
		.movie-overview {
			@apply w-full h-[15%] px-1 pb-2 pt-1 overflow-hidden;
			border-radius: 0 0 6px 6px;
		}
	}
}
.load-more {
	@apply px-2 py-1 md:py-2 md:px-3 text-center mx-auto block bg-danger rounded-md mt-6;
}
</style>
