<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import MobileMenu from "../utils/MobileMenu.vue";

const OFFSET = 60;
const showNavbar = ref(true);
const lastScrollPosition = ref(0);
let bgOpacity = ref(false);

let openMenu = ref(false);
let dimmer = ref(true);
let right = ref(false);
const toggleOpenMenu = () => {
	openMenu.value = !openMenu.value;
	if (openMenu.value) {
		document.body.classList.add("disable-scroll");
	} else {
		document.body.classList.remove("disable-scroll");
	}
};

const onScroll = () => {
	if (window.pageYOffset < 0) {
		return;
	}
	if (Math.abs(window.pageYOffset - lastScrollPosition.value) < OFFSET) {
		return;
	}
	showNavbar.value = window.pageYOffset < lastScrollPosition.value;
	lastScrollPosition.value = window.pageYOffset;
};

onMounted(() => {
	lastScrollPosition.value = window.pageYOffset;
	window.addEventListener("scroll", onScroll);
	const viewportMeta = document.createElement("meta");
	viewportMeta.name = "viewport";
	viewportMeta.content = "width=device-width, initial-scale=1";
	document.head.appendChild(viewportMeta);
	watch(lastScrollPosition, () => {
		if (lastScrollPosition.value > 0) {
			bgOpacity.value = true;
			// console.log(lastScrollPosition.value);
			return;
		}
	});
});

onBeforeUnmount(() => {
	window.removeEventListener("scroll", onScroll);
});
</script>
<template>
	<header
		:class="{
			'hidden-header': !showNavbar,
			'bg-dark': lastScrollPosition > 100,
			// 'hidden': openMenu,
		}"
	>
		<div class="container relative">
			<div class="navbar">
				<div>
					<RouterLink to="/">
						<img
							src="../../assets/imgs/logo.png"
							class="logo"
							alt=""
						/>
					</RouterLink>
				</div>
				<div class="w-full hidden lg:flex items-center justify-between">
					<div class="nav-links">
						<RouterLink to="/">Home</RouterLink>
						<RouterLink to="/movies">Movies</RouterLink>
						<RouterLink to="/popular-now">Popular Now</RouterLink>
						<RouterLink to="/upcoming-movies"
							>Upcoming Movies</RouterLink
						>
						<RouterLink to="/casts">Casts</RouterLink>
						<RouterLink to="/about">About</RouterLink>
					</div>
					<div class="flex items-center md:space-x-4">
						<div class="search-control">
							<i class="fa-solid fa-magnifying-glass"></i>
							<input type="search" class="" />
						</div>
						<div>
							<button>
								<i class="fa-solid fa-ellipsis-vertical"></i>
							</button>
						</div>
						<div>
							<button
								class="bg-danger rounded-md w-10 h-10 text-center"
							>
								AK
							</button>
						</div>
					</div>
				</div>
				<div class="lg:hidden">
					<button class="text-white text-3xl" @click="toggleOpenMenu">
						<i class="fa-solid fa-bars"></i>
					</button>
					<!-- <button
						class="text-white text-3xl"
						@click="toggleOpenMenu"
						data-drawer-target="drawer-navigation"
						data-drawer-show="drawer-navigation"
						aria-controls="drawer-navigation"
					>
						<i class="fa-solid fa-bars"></i>
					</button> -->
				</div>
			</div>
		</div>
	</header>
	<MobileMenu
		:open="openMenu"
		:right="right"
		:dimmer="dimmer"
		@close="toggleOpenMenu"
	/>
</template>

<style lang="scss" scoped>
header {
	@apply py-2 md:py-4 px-6 lg:px-0 shadow-lg fixed top-0 w-full bg-secondary;
	transform: translate3d(0, 0, 0);
	transition: 0.2s all ease-out;
	z-index: 10;

	&.hidden-header {
		box-shadow: none;
		transform: translate3d(0, -100%, 0);
	}
	.navbar {
		@apply flex flex-row lg:flex-row items-center justify-between md:space-x-4 lg:space-x-10 relative;
		.logo {
			@apply w-[4.5rem];
		}
		.search-control {
			@apply relative;
			input {
				@apply text-gray-300 focus:outline-none pl-8 pr-3 py-[6px] rounded-md bg-primary;
			}
			i {
				@apply absolute top-[10px] left-2;
			}
		}
		.nav-links {
			@apply flex md:space-x-3 lg:space-x-8;
			a {
				@apply font-bold text-gray-50 relative hover:text-gray-300 transition-all;
			}

			a.router-link-exact-active::after {
				content: "";
				position: absolute;
				left: 50%;
				bottom: -15px;
				transform: translateX(-50%);
				width: 0.5rem;
				height: 0.5rem;
				border-radius: 100%;
				@apply bg-red-600;
			}
		}
	}
	.mobile-menu {
		// @apply absolute top-0 left-0 bg-black bg-opacity-60 w-screen z-50;
	}
}
</style>
