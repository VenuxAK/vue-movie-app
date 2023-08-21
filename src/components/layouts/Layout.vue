<script setup>
import Header from "../partials/Header.vue";
</script>
<template>
	<Header />
	<main class="mt-32 animate__animated animate__fadeIn">
		<slot />
	</main>
</template>

<style lang="scss" scoped></style>
