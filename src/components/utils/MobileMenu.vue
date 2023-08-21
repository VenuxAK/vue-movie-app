<script setup>
import { onBeforeUnmount, ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const props = defineProps(["open", "right", "dimmer"]);
const emit = defineEmits(["close"]);
const toggle = () => {
	emit("close");
};
onBeforeUnmount(() => {
	document.body.classList.remove("disable-scroll");
});
</script>
<template>
	<div class="inset-0 flex z-40" :class="open ? 'fixed' : 'hidden'">
		<div
			class="absolute flex w-full md:w-64 top-0 h-screen z-20 bg-primary"
		>
			<div
				class="flex flex-col h-full w-full transition-all duration-700"
				:class="[open ? 'max-w-lg' : 'max-w-0']"
			>
				<div>
					<h5
						class="p-4 text-base font-semibold uppercase text-gray-400"
					>
						Movea
					</h5>
					<button
						@click="toggle"
						class="p-1.5 absolute top-5 right-5 inline-flex items-center"
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
								:class="{
									'bg-gray-700 cursor-default':
										route.name === 'home',
								}"
							>
								<span class="ml-3">Home</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/movies"
								class="flex items-center text-lg rounded-md p-2 text-white hover:bg-gray-700 group"
								:class="{
									'bg-gray-700 cursor-default':
										route.name === 'movies',
								}"
							>
								<span class="ml-3">Movies</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/popular-now"
								class="flex items-center text-lg rounded-md p-2 text-white hover:bg-gray-700 group"
								:class="{
									'bg-gray-700 cursor-default':
										route.name === 'popularNow',
								}"
							>
								<span class="ml-3">Popular Now</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/series"
								class="flex items-center text-lg rounded-md p-2 text-white hover:bg-gray-700 group"
								:class="{
									'bg-gray-700 cursor-default':
										route.name === 'series',
								}"
							>
								<span class="ml-3">Series</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/casts"
								class="flex items-center text-lg rounded-md p-2 text-white hover:bg-gray-700 group"
								:class="{
									'bg-gray-700 cursor-default':
										route.name === 'casts',
								}"
							>
								<span class="ml-3">Casts</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/about"
								class="flex items-center text-lg rounded-md p-2 text-white hover:bg-gray-700 group"
								:class="{
									'bg-gray-700 cursor-default':
										route.name === 'about',
								}"
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

		<transition name="fade">
			<div
				v-if="dimmer && open"
				@click="toggle()"
				class="flex-1 bg-black bg-opacity-75 active:outline-none z-10"
			/>
		</transition>
	</div>
</template>

<style lang="scss" scoped>
.mobile-menu {
	@apply absolute top-0 right-0 bg-black bg-opacity-95 w-[60%] z-50 h-screen;
	// @apply py-2 md:py-4 px-6 lg:px-0 shadow-lg fixed top-0 w-full bg-secondary;
}
</style>
