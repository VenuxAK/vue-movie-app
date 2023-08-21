<script setup>
import Layout from "../components/layouts/Layout.vue";
import Trending from "../components/movies/home/Trending.vue";
import ShowAllMovies from "../components/movies/home/ShowAllMovies.vue";
import UpcomingMovies from "../components/movies/home/UpcomingMovies.vue";
import Footer from "../components/partials/Footer.vue";
</script>

<template>
	<Layout>
		<Trending />
		<ShowAllMovies />
		<UpcomingMovies />
		<Footer />
	</Layout>
</template>

<style lang="scss" scoped></style>
