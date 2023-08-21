<script setup>
import { onMounted, ref } from "vue";
import useMovies from "../../../composables/useMovies";
import Spinner from "../../Loading/Spinner.vue";

const props = defineProps(["tab"]);
const { getCasts } = useMovies();
let casts = ref([]);
onMounted(async () => {
	casts.value = await getCasts();
});
</script>
<template>
	<div v-if="tab === 'casts'" class="animate__animated animate__fadeIn">
		<div v-if="casts.length > 0" class="casts-wrapper">
			<div v-for="cast in casts" :key="cast">
				<div class="cast-image">
					<div class="h-[100%] overflow-hidden rounded-full">
						<RouterLink to="/casts/someone">
							<img :src="cast.poster" class="" alt="" />
						</RouterLink>
					</div>
				</div>
				<div>
					<h5 class="pt-1 text-center text-sm text-gray-500">
						Cast name
					</h5>
				</div>
			</div>
		</div>
		<div v-else>
			<Spinner />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.casts-wrapper {
	@apply grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-x-3 gap-y-8;
	.cast-image {
		aspect-ratio: 1/1;
		img {
			@apply w-full min-h-full object-cover object-center;
		}
	}
}
</style>
