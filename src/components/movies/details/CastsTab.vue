<script setup>
import { computed, onMounted, ref } from "vue";
import Spinner from "../../Loading/Spinner.vue";
import { useMovies } from "../../../stores/useMovies";

const { getMovieCasts } = useMovies();

const props = defineProps(["tab", "id"]);

let casts = ref([]);
onMounted(async () => {
	// movies/{id}/detail/casts
	let response = await getMovieCasts(props.id);
	casts.value = response.data.casts;
	// console.log(casts.value);
});
let computedCasts = computed(() => {
	if (casts.value.length > 0) {
		return casts.value.filter((cast) => {
			return cast.profile_path !== null;
		});
	}
});
</script>
<template>
	<div v-if="tab === 'casts'" class="animate__animated animate__fadeIn">
		<div v-if="casts.length > 0" class="casts-wrapper">
			<div v-for="cast in computedCasts" :key="cast">
				<div class="cast-image">
					<div class="h-[100%] overflow-hidden rounded-md">
						<RouterLink :to="'/casts/' + cast.id">
							<img :src="cast.profile_path" class="" alt="" />
						</RouterLink>
					</div>
				</div>
				<div>
					<h5 class="pt-1 text-center text-sm text-gray-500 truncate">
						{{ cast.original_name }}
					</h5>
					<h5 class="pt-1 text-center text-sm text-gray-300">
						({{ cast.character }})
					</h5>
				</div>
			</div>
		</div>
		<div v-else class="h-[50vh]">
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
