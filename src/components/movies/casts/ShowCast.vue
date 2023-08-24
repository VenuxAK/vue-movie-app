<script setup>
import { onMounted, ref } from "vue";
import KnownFor from "./KnownFor.vue";
import { useRoute } from "vue-router";
import { useMovies } from "../../../stores/useMovies";
import Spinner from "../../Loading/Spinner.vue";

const route = useRoute();
let cast = ref(null);
const { getCastDetail } = useMovies();
onMounted(async () => {
	let response = await getCastDetail(route.params.id);
	cast.value = response;
	// console.log(response);
});
</script>
<template>
	<div>
		<div class="mx-3 md:mx-auto md:container">
			<div class="cast-profile-wrapper" v-if="cast">
				<div class="md:w-[50%]">
					<div class="cast-profile">
						<img :src="cast.profile" alt="" />
					</div>
				</div>
				<div class="md:w-[50%]">
					<div class="flex flex-col space-y-6">
						<div>
							<h1 class="text-3xl font-medium">
								{{ cast.name }}
							</h1>
							<div>
								<h5
									class="text-base text-gray-500 mt-2 md:mt-0"
								>
									<span class="text-gray-200 pr-4">
										<i class="fa-solid fa-cake-candles"></i>
									</span>
									<span> {{ cast.birthday ?? "-" }} </span>
								</h5>
								<h5
									class="text-base text-gray-500 mt-2 md:mt-0"
								>
									<span class="text-gray-200 pr-4">
										<i class="fa-solid fa-location-dot"></i>
									</span>
									Birth Place:
									<span>{{ cast.place_of_birth }}</span>
								</h5>
								<h5
									v-if="cast.deathday"
									class="text-base text-gray-500 mt-2 md:mt-0"
								>
									<span class="text-gray-200 pr-3">
										<i class="fa-solid fa-skull"></i>
									</span>
									Dead Day:
									<span>{{ cast.deathday }}</span>
								</h5>
							</div>
						</div>
						<div>
							<p class="text-gray-400 font-medium">
								{{ cast.biography }}
							</p>
						</div>
						<div></div>
					</div>
				</div>
			</div>
			<div v-else class="h-[60vh]">
				<Spinner />
			</div>
			<KnownFor :movies="cast.known_for" v-if="cast && cast.known_for" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.cast-profile-wrapper {
	@apply flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 border-b border-gray-800 pb-12;
	.cast-profile {
		@apply mx-auto w-60 rounded-md overflow-hidden;
	}
}
</style>
