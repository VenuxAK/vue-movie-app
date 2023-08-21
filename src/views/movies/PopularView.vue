<script setup>
import Layout from "../../components/layouts/Layout.vue";
import TopRated from "../../components/movies/TopRated.vue";
import PopularWrapper from "../../components/movies/popular/PopularWrapper.vue";
import Footer from "../../components/partials/Footer.vue";
</script>
<template>
	<Layout>
		<PopularWrapper />
		<TopRated />
		<Footer />
	</Layout>
</template>

<style lang="scss" scoped></style>
