<template>
	<div class="glider-contain">
		<button
			class="
				left-arrow
				rounded-full
				bg-primary
				h-10
				w-10
				flex
				items-center
				justify-center
				absolute
				inset-y-1/2
				left-4
				z-10
			"
			aria-label="Previous"
		>
			<chevron-left-icon class="w-6 h-6 text-white active:text-secondary lg:hover:text-secondary" />
		</button>

		<div class="glider" id="slides">
			<div class="relative glider-slide">
				<img src="/img/slider/farcry.jpg" alt="" class="w-full h-header hidden lg:block" />
				<img src="/img/slider/farcry mobil.jpg" alt="" class="w-full h-slideMobile lg:hidden" />

				<div
					class="
						absolute
						w-full
						lg:w-auto lg:inset-y-1/3 lg:-right-28
						bottom-4
						lg:bottom-0
						flex flex-col
						items-center
						justify-center
						lg:justify-start
						text-center
						lg:items-start lg:text-left
						gap-y-3
						lg:gap-y-6
					"
				>
					<h3 class="font-bold text-5xl lg:text-6xl text-white">FAR CRY 6</h3>
					<p class="text-white font-medium text-xl lg:text-3xl w-3/4">
						Conviértete en un guerrillero para liberar Yara
					</p>

					<btn text="Comprar" />
				</div>
			</div>

			<div class="relative glider-slide">
				<img src="/img/slider/elden ring.jpg" alt="" class="w-full h-header hidden lg:block" />
				<img src="/img/slider/elden ring mobil.jpg" alt="" class="w-full h-slideMobile lg:hidden" />

				<div
					class="
						absolute
						w-full
						lg:w-auto lg:inset-y-1/3 lg:left-20
						bottom-4
						lg:bottom-0
						flex flex-col
						items-center
						justify-center
						lg:justify-start
						text-center
						lg:items-start lg:text-left
						gap-y-3
						lg:gap-y-6
					"
				>
					<h3 class="font-bold text-5xl lg:text-6xl text-white">ELDEN RING</h3>
					<p class="text-white font-medium text-xl lg:text-3xl w-3/4">
						Conviértete en un Elden Lord en las Tierras Intermedias
					</p>

					<btn text="Reservar" />
				</div>
			</div>

			<div class="relative glider-slide">
				<img src="/img/slider/vanguard.jpg" alt="" class="w-full h-header hidden lg:block" />
				<img src="/img/slider/vanguar-mobil.jpg" alt="" class="w-full h-slideMobile lg:hidden" />

				<div
					class="
						absolute
						w-full
						lg:w-auto lg:inset-y-1/3 lg:left-20
						bottom-4
						lg:bottom-0
						flex flex-col
						items-center
						justify-center
						lg:justify-start
						text-center
						lg:items-start lg:text-left
						gap-y-3
						lg:gap-y-6
					"
				>
					<h3 class="font-bold text-4xl lg:text-6xl text-white w-3/4">CALL OF DUTY: VANGUARD</h3>
					<p class="text-white font-medium text-xl lg:text-3xl w-3/4">Asciende en todos los frentes</p>

					<btn text="Reservar" />
				</div>
			</div>
		</div>

		<div role="tablist" class="dots absolute bottom-7 w-full justify-center hidden lg:flex"></div>

		<button
			class="
				right-arrow
				rounded-full
				bg-primary
				h-10
				w-10
				flex
				items-center
				justify-center
				absolute
				inset-y-1/2
				right-5
				z-10
			"
			aria-label="Next"
		>
			<chevron-right-icon class="w-6 h-6 text-white active:text-secondary lg:hover:text-secondary" />
		</button>
	</div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/outline';
import Btn from '@/components/layout/Btn.vue';

import { onMounted } from 'vue';

export default {
	components: { ChevronLeftIcon, ChevronRightIcon, Btn },

	setup() {
		onMounted(() => {
			new Glider(document.querySelector('#slides'), {
				slidesToShow: 1,
				slidesToScroll: 1,
				draggable: false,
				duration: 0.1,
				scrollLock: true,
				dots: '.dots',
				arrows: {
					prev: '.left-arrow',
					next: '.right-arrow',
				},
				rewind: true,
			});
		});
	},
};
</script>
