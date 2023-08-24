<script setup>
const props = defineProps(["cast"]);
</script>

<template>
	<div class="cast-card">
		<div class="h-[100%] overflow-hidden rounded-md">
			<RouterLink :to="'/casts/' + cast.id">
				<img :src="cast.profile_path" alt="" />
			</RouterLink>
		</div>
		<div class="h-[10%]">
			<h1
				class="text-xs pt-1 lg:text-base text-gray-200 font-medium text-center"
			>
				{{ cast.name }}
			</h1>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.cast-card {
	aspect-ratio: 4/5;
	img {
		@apply w-full min-h-full object-cover object-center;
	}
}
</style>
