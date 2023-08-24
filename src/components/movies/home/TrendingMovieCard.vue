<script setup>
const props = defineProps(["movie"]);
</script>
<template>
	<div class="movie-card">
		<div class="h-[85%] overflow-hidden rounded-md">
			<RouterLink :to="'/movies/' + movie.id">
				<img v-lazy="movie.poster" alt="" />
			</RouterLink>
		</div>
		<div class="h-[15%]">
			<div class="movie-detail text-left">
				<div class="flex items-start flex-col w-full">
					<div>
						<h4 class="font-bold">
							<RouterLink :to="'/movies/' + movie.id">
								{{
									movie.title.length > 20
										? movie.title.substr(0, 20) + "..."
										: movie.title
								}}
							</RouterLink>
						</h4>
					</div>
					<div class="flex space-x-2 text-gray-500">
						<h4 class="">
							{{ movie.vote_average.toFixed(1) }} / 10
						</h4>
						<span> | </span>
						<p class="font-bold">
							<span
								v-for="genre in movie.genres.slice(0, 1)"
								:key="genre"
								class="genre"
							>
								<span class="capitalize">{{
									genre + ", "
								}}</span>
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.movie-card {
	@apply w-full h-[380px] md:h-[420px] relative rounded-md overflow-hidden space-y-2 md:space-y-0;
	img {
		@apply w-full min-h-full object-cover;
	}
	.movie-detail {
		@apply w-full md:py-2 px-1 overflow-hidden;
	}
	.genre {
		// &:not(:nth-last-child(n))::after {
		// 	content: ",";
		// }
	}
}
</style>
