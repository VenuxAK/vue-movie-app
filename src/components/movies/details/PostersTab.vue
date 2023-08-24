<script setup>
import { onMounted, ref } from "vue";
import Spinner from "../../Loading/Spinner.vue";
import { useMovies } from "../../../stores/useMovies";

const props = defineProps(["tab", "id"]);

const { getMovieDetail } = useMovies();

let coverImages = ref([]);
let posterImages = ref([]);

let active = ref(true);

onMounted(async () => {
	let response = await getMovieDetail(props.id, true);
	// console.log(response.data);
	coverImages.value = response.data.backdrops;
	posterImages.value = response.data.posters;
});
</script>
<template>
	<div
		v-if="tab === 'posters'"
		class="posters-wrapper animate__animated animate__fadeIn"
	>
		<div>
			<div class="container mx-auto">
				<div
					class="flex justify-evenly items-center border-b border-gray-800 mb-6"
				>
					<div class="w-full border-r border-gray-800">
						<button
							@click="active = true"
							class="w-full py-4 text-3xl font-bold text-center"
							:class="active ? 'text-danger' : 'text-white'"
						>
							Posters
						</button>
					</div>
					<div class="w-full text-right">
						<button
							@click="active = false"
							class="w-full py-4 text-3xl font-bold text-center"
							:class="!active ? 'text-danger' : 'text-white'"
						>
							Covers
						</button>
					</div>
				</div>
				<div v-if="active" class="lg:gap-2 lg:grid lg:grid-cols-3 pb-8">
					<div
						v-if="posterImages.length > 0"
						v-for="image in posterImages"
						:key="image"
						class="w-full rounded"
					>
						<img v-lazy="image.file_path" alt="image" class="p-1" />
					</div>
					<div v-else class="h-[30vh]">
						<Spinner />
					</div>
				</div>
				<div v-else class="flex flex-wrap">
					<div
						v-if="coverImages.length > 0"
						v-for="image in coverImages"
						:key="image"
						class="w-full lg:w-1/3"
					>
						<img v-lazy="image.file_path" alt="image" class="p-1" />
					</div>
					<div v-else class="h-[30vh]">
						<Spinner />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
