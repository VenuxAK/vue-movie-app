<script setup>
import { ref } from "vue";
import Spinner from "../../Loading/Spinner.vue";

const props = defineProps(["tab"]);

let coverImages = ref([
	{
		id: 1,
		photo: "https://image.tmdb.org/t/p/original/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
	},
	{
		id: 2,
		photo: "https://image.tmdb.org/t/p/original/pPwVYDfwNThUrGDNDStkv6QVHkS.jpg",
	},
	{
		id: 3,
		photo: "https://image.tmdb.org/t/p/original/2BwUMCi9fsZBicuNqBuwrfZoScH.jpg",
	},
	{
		id: 4,
		photo: "https://image.tmdb.org/t/p/original/9EpaPaKozP2b8L1hJekBFI75gCm.jpg",
	},
	{
		id: 5,
		photo: "https://image.tmdb.org/t/p/original/jCiGfY7D6pHIU1dlVccfixUwtGV.jpg",
	},
	{
		id: 6,
		photo: "https://image.tmdb.org/t/p/original/igs08nyaA21oWWA4NT2N2z58HHf.jpg",
	},
	{
		id: 7,
		photo: "https://image.tmdb.org/t/p/original/nU7bIOrUI1ziL5h0saHidjB4i6U.jpg",
	},
]);
let posterImages = ref([
	{
		id: 1,
		photo: "https://image.tmdb.org/t/p/original/xVMtv55caCEvBaV83DofmuZybmI.jpg",
	},
	{
		id: 2,
		photo: "https://image.tmdb.org/t/p/original/m1k24MwmoqAdKMPJDaBLwdB5Tps.jpg",
	},
	{
		id: 3,
		photo: "https://image.tmdb.org/t/p/original/ibjKNVEk348eIXnvwEz2wC45MGs.jpg",
	},
	{
		id: 4,
		photo: "https://image.tmdb.org/t/p/original/wGmf94zgpn1NjxsJ2cpZVNjZqcR.jpg",
	},
	{
		id: 5,
		photo: "https://image.tmdb.org/t/p/original/1eHMicYRA0BBnWUyXofyDCMnVJv.jpg",
	},
	{
		id: 6,
		photo: "https://image.tmdb.org/t/p/original/pKZFNuvKF1R9fmrbkT5JoaFhGbN.jpg",
	},
	{
		id: 7,
		photo: "https://image.tmdb.org/t/p/original/cuJ8IxabMEQVpF5TWnmVTvitHIm.jpg",
	},
]);

let active = ref(true);
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
				<div
					v-if="active"
					class="lg:gap-2 lg:grid lg:grid-cols-3 border-b border-b-gray-700 pb-8"
				>
					<div
						v-if="coverImages.length > 0"
						v-for="image in coverImages"
						:key="image.id"
						class="w-full rounded"
					>
						<img v-lazy="image.photo" alt="image" class="p-1" />
					</div>
					<div v-else>
						<Spinner />
					</div>
				</div>
				<div v-else class="flex flex-wrap">
					<div
						v-if="posterImages.length > 0"
						v-for="image in posterImages"
						:key="image.id"
						class="w-full lg:w-1/3"
					>
						<img :src="image.photo" alt="image" class="p-1" />
					</div>
					<div v-else>
						<Spinner />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
