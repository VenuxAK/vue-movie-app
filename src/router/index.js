import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IndexView from "../views/movies/IndexView.vue";
import PopularView from "../views/movies/PopularView.vue";
import CastsView from "../views/movies/CastsView.vue";
import SeriesView from "../views/movies/SeriesView.vue";
import ShowView from "../views/movies/ShowView.vue";
import ShowCastView from "../views/movies/ShowCastView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/movies",
			name: "movies",
			component: IndexView,
		},
		{
			path: "/movies/:name",
			name: "movieDetail",
			component: ShowView,
		},
		{
			path: "/popular-now",
			name: "popularNow",
			component: PopularView,
		},
		{
			path: "/series",
			name: "series",
			component: SeriesView,
		},
		{
			path: "/casts",
			name: "casts",
			component: CastsView,
		},
		{
			path: "/casts/:name",
			name: "showCast",
			component: ShowCastView,
		},
		{
			path: "/about",
			name: "about",
			component: () => import("../views/AboutView.vue"),
		},
	],
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 };
	},
});

export default router;
