<script setup>
let props = defineProps(["currentPage", "totalPages", "totalResults", "from"]);
let emit = defineEmits(["changePage"]);

const nextPage = () => {
	if (props.currentPage < props.totalPages) {
		emit("changePage", props.currentPage + 1);
	}
};

const prevPage = () => {
	if (props.currentPage > 1) {
		emit("changePage", props.currentPage - 1);
	}
};
</script>

<template>
	<div
		class="mx-3 mb-8 flex flex-col items-start space-y-2 sm:space-y-0 sm:flex-row justify-between sm:items-center"
	>
		<div>
			<h1 class="text-3xl font-medium text-center uppercase">
				{{ from }}
			</h1>
		</div>
		<div>
			<div class="flex flex-col items-center space-y-2">
				<!-- Help text -->
				<span class="text-sm text-gray-400">
					Showing
					<span class="font-semibold text-white px-1">{{
						currentPage
					}}</span>
					too
					<span class="font-semibold text-white px-1">{{
						totalPages
					}}</span>
					of
					<span class="font-semibold text-white px-1">{{
						totalResults
					}}</span>
					results
				</span>
				<div class="inline-flex mt-2 xs:mt-0">
					<!-- Buttons -->
					<button
						@click="prevPage()"
						:disabled="currentPage === 1"
						class="paginate-btn rounded-l"
					>
						<i class="fa-solid fa-arrow-left pr-3"></i>
						Prev
					</button>
					<button
						@click="nextPage()"
						:disabled="currentPage === totalPages"
						class="paginate-btn border-0 border-l border-gray-700 rounded-r"
					>
						Next
						<i class="fa-solid fa-arrow-right pl-3"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.paginate-btn {
	@apply flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-gray-700  hover:bg-gray-900 disabled:hover:bg-gray-800;
}
</style>
