<template>
	<router-link :to="url" class="group">
		<div class="w-full h-72 lg:w-80 lg:h-54 xl:w-96 xl:lg-64 overflow-hidden">
			<img
				:src="img"
				alt="juegos imagen"
				class="w-full h-full transition-all duration-300 transform group-hover:scale-110"
			/>
		</div>
		<div class="flex items-center gap-x-2 mt-2">
			<span class="font-bold text-2xl pb-1 group-hover:text-secondary transition-colors duration-300">{{
				text
			}}</span>
			<chevron-right-icon class="w-6 h-6 mt-1 group-hover:text-secondary transition-colors duration-300" />
		</div>
	</router-link>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid';

export default {
	props: {
		url: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},

	components: { ChevronRightIcon },
};
</script>
