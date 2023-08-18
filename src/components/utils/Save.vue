<script setup>
const props = defineProps(["open"]);
const emit = defineEmits(["close"]);
const closeMenu = () => {
	emit("close");
};
</script>
<template>
	<div
	>
		<!-- :class="{
			'fixed top-0 bg-black z-[300] bg-opacity-90 w-screen h-screen':
				open,
		}" -->
		<div
			id="drawer-navigation"
			class="fixed top-0 left-0 z-40 xs:w-full md:w-64 h-screen p-4 overflow-y-auto transition-transform bg-primary transform -translate-x-full"
			tabindex="-1"
			aria-labelledby="drawer-navigation-label"
		>
			<div class="flex flex-col h-full">
				<div>
					<h5
						id="drawer-navigation-label"
						class="text-base font-semibold uppercase text-gray-400"
					>
						Movea
					</h5>
					<button
						@click="closeMenu"
						type="button"
						data-drawer-hide="drawer-navigation"
						aria-controls="drawer-navigation"
						class="p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
					>
						<i class="fa-solid fa-xmark text-3xl"></i>
						<span class="sr-only">Close menu</span>
					</button>
				</div>
				<div
					class="xs:px-4 sm:px-0 py-4 flex flex-col justify-between overflow-y-hidden w-full h-full"
				>
					<ul class="space-y-2 font-medium h-[70%]">
						<li>
							<RouterLink
								to="/"
								class="flex items-center text-lg rounded-md p-2 text-white hover:bg-gray-700 group"
							>
								<!-- <i class="fa-solid fa-house"></i> -->
								<span class="ml-3">Home</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/movies"
								class="flex items-center text-lg rounded-md p-2 text-white hover:bg-gray-700 group"
							>
								<i class="fa-solid fa-camera-movie"></i>
								<span class="ml-3">Movies</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/popular-now"
								class="flex items-center text-lg rounded-md p-2 text-white hover:bg-gray-700 group"
							>
								<span class="ml-3">Popular Now</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/upcoming-movies"
								class="flex items-center text-lg rounded-md p-2 text-white hover:bg-gray-700 group"
							>
								<span class="ml-3">Upcoming Movies</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/casts"
								class="flex items-center text-lg rounded-md p-2 text-white hover:bg-gray-700 group"
							>
								<span class="ml-3">Casts</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/about"
								class="flex items-center text-lg rounded-md p-2 text-white hover:bg-gray-700 group"
							>
								<span class="ml-3">About</span>
							</RouterLink>
						</li>
					</ul>
					<ul
						class="pt-4 xs:px-4 sm:px-0 mt-4 space-y-2 font-medium border-t border-gray-700 h-[30%]"
					>
						<li>
							<RouterLink
								to="/"
								class="flex items-center text-lg rounded-md p-2 text-white hover:bg-gray-700 group"
							>
								<i class="fa-solid fa-user"></i>
								<span class="ml-3">Profile</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/"
								class="flex items-center text-lg rounded-md p-2 text-white hover:bg-gray-700 group"
							>
								<i class="fa-solid fa-gear"></i>
								<span class="ml-3">Settings</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/"
								class="flex items-center text-lg rounded-md p-2 text-white hover:bg-gray-700 group"
							>
								<i class="fa-solid fa-right-from-bracket"></i>
								<span class="ml-3">Logout</span>
							</RouterLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.mobile-menu {
	@apply absolute top-0 right-0 bg-black bg-opacity-95 w-[60%] z-50 h-screen;
	// @apply py-2 md:py-4 px-6 lg:px-0 shadow-lg fixed top-0 w-full bg-secondary;
}
</style>
