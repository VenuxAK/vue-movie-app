<script setup>
const props = defineProps(["movie"]);
</script>
<template>
	<div class="movie-card">
		<img :src="movie" alt="" />
		<div>
			<div class="absolute top-0 left-0 w-full h-[75%]">
				<div
					class="w-full h-full flex items-center justify-center bg-opacity-25 bg-black"
				>
					<div>
						<RouterLink
							to="/movies/smt"
							class="hidden md:block text-4xl hover:animate-pulse"
						>
							<i class="fa-solid fa-circle-play"></i>
						</RouterLink>
						<RouterLink
							to="/movies/smt"
							class="block md:hidden play relative text-4xl"
						>
							<span>
								<i class="fa-solid fa-play-circle"></i>
							</span>
							<span
								class="border-animation border-animation--1"
							></span>
							<span
								class="border-animation border-animation--2"
							></span>
						</RouterLink>
					</div>
				</div>
			</div>
			<div class="movie-detail">
				<div class="flex items-start md:space-y-1 flex-col w-full">
					<div>
						<h4 class="truncate font-bold">
							<RouterLink to="#"> Movie Name </RouterLink>
						</h4>
					</div>
					<div>
						<h4 class="">8/10</h4>
					</div>
					<div>
						<p class="font-bold text-danger">
							<span>Action, </span>
							<span>Crime, </span>
							<span>Advanture</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.movie-card {
	@apply w-full h-[380px] md:h-[420px] relative rounded-md overflow-hidden;
	img {
		@apply w-full min-h-full object-cover;
	}
	.movie-detail {
		@apply w-full h-[25%] absolute bottom-0 backdrop-blur-sm bg-secondary/80 md:py-2 px-1;
	}
}
.play:hover {
	// @apply animate-ping;
}
.border-animation {
	@apply absolute -top-1 -left-[5px] w-[2.8rem] h-[2.8rem] border-4 rounded-full;
	animation: 1.5s border-animated linear infinite;
}
.border-animation--1 {
	animation-delay: 0.5s;
}
.border-animation--2 {
	animation-delay: 1s;
}
@keyframes border-animated {
	0% {
		transform: scale(1);
		opacity: 0.9;
	}
	25% {
		transform: scale(1.2);
		opacity: 0.7;
	}
	50% {
		transform: scale(1.3);
		opacity: 0.5;
	}
	75% {
		transform: scale(1.4);
		opacity: 0.4;
	}
	100% {
		transform: scale(1.5);
		opacity: 0;
	}
}
</style>
