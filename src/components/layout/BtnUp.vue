<template>
	<a
		href="#top"
		class="fixed right-4 bottom-4 z-10 opacity-0 transition-opacity duration-300"
		:class="{ 'opacity-100': showBtnTop }"
	>
		<button class="p-2 bg-primary group w-12 h-12 flex items-center justify-center">
			<chevron-up-icon class="w-7 h-7 text-white group-hover:text-secondary active:text-secondary" />
		</button>
	</a>
</template>

<script>
import { ChevronUpIcon } from '@heroicons/vue/outline';
import { ref } from 'vue';
export default {
	components: { ChevronUpIcon },

	setup() {
		let showBtnTop = ref(false);

		document.addEventListener('scroll', function () {
			let bodyTopPosition = document.body.getBoundingClientRect().top;

			if (bodyTopPosition < -1100) {
				showBtnTop.value = true;
			} else {
				showBtnTop.value = false;
			}
		});

		return { showBtnTop };
	},
};
</script>
