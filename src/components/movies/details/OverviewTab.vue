<script setup>
// import RelatedMovies from "./RelatedMovies.vue";

const props = defineProps(["tab", "movie"]);
</script>
<template>
	<div
		v-if="tab === 'overview'"
		class="overview-wrapper animate__animated animate__fadeIn"
	>
		<div class="flex flex-col space-y-6">
			<div class="md:pr-4 lg:pr-10">
				<p class="text-gray-200 font-medium">{{ movie.overview }}</p>
			</div>
			<div class="w-full space-y-4 font-medium">
				<div
					class="flex w-full"
					v-if="movie.production_companies.length > 0"
				>
					<div class="w-32 sm:w-64">
						<h5 class="text-gray-400">Production Companies</h5>
					</div>
					<div class="w-full">
						<h5>
							<span
								v-for="company in movie.production_companies"
								:key="company"
							>
								<span>{{ company.name + ", " }}</span>
							</span>
						</h5>
					</div>
				</div>
				<div class="flex" v-if="movie.production_countries.length > 0">
					<div class="w-32 sm:w-64">
						<h5 class="text-gray-400">Production Countries</h5>
					</div>
					<div class="w-full">
						<h5>
							<span
								v-for="country in movie.production_countries"
								:key="country"
							>
								<span>{{
									country.name.substr(",") + ", "
								}}</span>
							</span>
						</h5>
					</div>
				</div>
				<div class="flex" v-if="movie.genres.length > 0">
					<div class="w-32 sm:w-64">
						<h5 class="text-gray-400">Genres</h5>
					</div>
					<div class="w-full">
						<h5 class="capitalize">
							{{ movie.genres.join(", ") }}
						</h5>
					</div>
				</div>
			</div>
		</div>
		<!-- <RelatedMovies :id="movie.id" /> -->
	</div>
</template>

<style lang="scss" scoped>
.overview-wrapper {
	@apply flex flex-col space-y-6;
}
</style>
