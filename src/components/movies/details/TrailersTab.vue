<script setup>
import { onMounted, ref } from "vue";
import { useMovies } from "../../../stores/useMovies";

const props = defineProps(["tab", "id"]);

const { getMovieDetail } = useMovies();
let trailers = ref([]);
onMounted(async () => {
	let response = await getMovieDetail(props.id, false, true);
	// console.log(response.data);
	trailers.value = response.data;
});
</script>
<template>
	<div
		v-if="tab === 'trailers'"
		class="trailers-wrapper animate__animated animate__fadeIn"
	>
		<div>
			<div>
				<div class="videos-wrapper" v-if="true">
					<div
						class="trailer"
						v-for="trailer in trailers"
						:key="trailer"
					>
						<h4>{{ trailer.name }}</h4>
						<div class="yt-video-wrapper">
							<iframe
								allowfullscreen
								:src="`https://www.youtube.com/embed/${trailer.key}?mute=1`"
							>
							</iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.trailers-wrapper {
	.videos-wrapper {
		@apply md:flex md:flex-row md:flex-wrap w-full;

		.trailer {
			@apply mb-8 md:mb-6 md:w-[49%];
			h4 {
				@apply text-base font-medium md:text-lg md:font-semibold;
			}
			.yt-video-wrapper {
				@apply aspect-w-16 aspect-h-9 md:aspect-w-8 md:aspect-h-4 m-1;
			}
		}
	}
}
</style>
