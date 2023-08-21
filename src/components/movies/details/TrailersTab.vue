<script setup>
const props = defineProps(["tab"]);
</script>
<template>
	<div
		v-if="tab === 'trailers'"
		class="trailers-wrapper animate__animated animate__fadeIn"
	>
		<div>
			<div>
				<div class="videos-wrapper">
					<div class="trailer">
						<h4>Final Trailer</h4>
						<div class="yt-video-wrapper">
							<iframe
								allowfullscreen
								src="https://www.youtube.com/embed/dblbocy0M-o?mute=1"
							>
							</iframe>
						</div>
					</div>
					<div class="trailer">
						<h4>Opening Ceremony</h4>
						<div class="yt-video-wrapper">
							<iframe
								allowfullscreen
								src="https://www.youtube.com/embed/nnAHTtxPp-Y?mute=1"
							>
							</iframe>
						</div>
					</div>
					<div class="trailer">
						<h4>Ending Ceremony</h4>
						<div class="yt-video-wrapper">
							<iframe
								allowfullscreen
								src="https://www.youtube.com/embed/XuDwndGaCFo?mute=1"
							>
							</iframe>
						</div>
					</div>
					<div class="trailer">
						<h4>Premiere of the film</h4>
						<div class="yt-video-wrapper">
							<iframe
								allowfullscreen
								src="https://www.youtube.com/embed/VbnS5biBmsw?mute=1"
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
				@apply text-lg font-semibold;
			}
			.yt-video-wrapper {
				@apply aspect-w-16 aspect-h-9 md:aspect-w-8 md:aspect-h-4 m-1;
			}
		}
	}
}
</style>
