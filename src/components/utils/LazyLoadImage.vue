<script setup>
import { computed, ref } from "vue";

const props = defineProps({
	backgroundColor: {
		type: String,
		default: "#efefef",
	},
	height: {
		type: Number,
		default: null,
	},
	lazySrc: {
		type: String,
		default: null,
	},
	lazySrcset: {
		type: String,
		default: null,
	},
	width: {
		type: Number,
		default: null,
	},
});
let loading = ref(true);
</script>
<template>
	<div>
		<img
			:data-src="lazySrc"
			:data-srcset="lazySrcset"
			:style="style"
			class="AppImage"
		/>
	</div>
</template>

<style lang="scss" scoped></style>
