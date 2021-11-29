<template>
	<button class="bg-secondary rounded w-36 h-8 relative group">
		<div class="absolute bottom-1 -left-4 transition-all duration-500 ease-in-out group-hover:left-4/5">
			<chevron-right-icon
				class="w-5 h-5 text-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
			/>
		</div>
		<span
			class="
				text-yellow-600
				font-bold
				text-lg
				absolute
				bottom-0.5
				left-1/4
				group-hover:left-3
				transition-all
				duration-500
				ease-in-out
			"
			>{{ text }}</span
		>
	</button>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid';
export default {
	components: { ChevronRightIcon },

	props: {
		text: {
			type: String,
			required: true,
		},
	},
};
</script>
