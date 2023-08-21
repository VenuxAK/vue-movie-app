<script setup>
const props = defineProps(["movie"]);
</script>
<template>
	<div class="movie-card">
		<div class="h-[85%] overflow-hidden rounded-md">
			<RouterLink to="/movies/smt">
				<!-- <img :src="movie.poster" alt="" /> -->
				<img v-lazy="movie.poster" alt="" />
			</RouterLink>
		</div>
		<div class="h-[15%]">
			<div class="movie-detail text-left">
				<div class="flex items-start flex-col w-full">
					<div>
						<h4 class="truncate font-bold">
							<RouterLink to="/movies/smt">
								Movie Name
							</RouterLink>
						</h4>
					</div>
					<div class="flex space-x-2 text-gray-500">
						<h4 class="">8/10</h4>
						<span> | </span>
						<p class="font-bold">Action, Crime</p>
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
}
</style>
