<script setup>
import RelatedMovies from "./RelatedMovies.vue";

const props = defineProps(["tab", "movie"]);
</script>
<template>
	<div
		v-if="tab === 'overview'"
		class="overview-wrapper animate__animated animate__fadeIn"
	>
		<div class="flex flex-col space-y-6">
			<div class="md:pr-4 lg:pr-10">
				<p class="text-gray-200 font-medium">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Doloremque, laudantium non nemo, recusandae aliquam dicta,
					sunt reprehenderit quis excepturi ipsum distinctio? Alias
					quaerat vero enim corrupti doloremque animi, ab natus.
				</p>
			</div>
			<div class="w-full space-y-2 font-medium">
				<div class="flex w-full">
					<div class="w-28">
						<h5 class="text-gray-400">Starring</h5>
					</div>
					<div class="w-full">
						<h5>Scarlett Johnason, Tessatomson, Rober Downey Jr</h5>
					</div>
				</div>
				<div class="flex">
					<div class="w-28">
						<h5 class="text-gray-400">Created by</h5>
					</div>
					<div class="w-full">
						<h5>Anathony Russo, Joe Russo</h5>
					</div>
				</div>
				<div class="flex">
					<div class="w-28">
						<h5 class="text-gray-400">Genres</h5>
					</div>
					<div class="w-full">
						<h5>Action, Advanture, Fantasy</h5>
					</div>
				</div>
			</div>
		</div>
		<RelatedMovies />
	</div>
</template>

<style lang="scss" scoped>
.overview-wrapper {
	@apply flex flex-col space-y-6;
}
</style>
