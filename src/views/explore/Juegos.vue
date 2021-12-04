<template>
	<slider />

	<main class="container px-2 my-10 mx-auto w-container flex flex-col items-center">
		<h2 class="text-3xl lg:text-5xl font-bold">¿Cuál es tu consola?</h2>

		<div class="flex flex-col gap-y-10 lg:gap-x-5 items-center lg:flex-row lg:justify-around my-10 w-full">
			<element url="/playstation-5" img="/img/explore/games.jpg" text="Playstation 5" />
			<element url="#" img="/img/explore/games.jpg" text="Playstation 4" />
			<element url="#" img="/img/explore/games.jpg" text="Nintedo Switch" />
		</div>
	</main>

	<section class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-1 px-1 mt-10 w-full xl:h-mosaicPc">
		<!-- 1 -->
		<div class="w-full h-mosaicMobile sm:h-banner md:h-mosaic lg:h-auto lg:row-span-2 relative">
			<img
				src="/img/mosaic/juegos/spiderman.jpg"
				alt="imagen spiderman"
				class="w-full h-full opacity-0 transform translate-y-10 transition-all duration-300 ease-in-out"
				id="block5"
			/>

			<div class="flex justify-center gap-x-2 w-full absolute bottom-5 lg:bottom-10">
				<div class="absolute bottom-10 left-8 lg:w-96">
					<span class="text-3xl md:text-4xl font-bold">Spider-Man 2</span>
					<p class="font-medium my-5 text-base md:text-lg">Revelado trailer del nuevo Spider-Man.</p>
					<router-link to="#" class="flex items-center group">
						<span
							class="
								font-bold
								text-xl
								md:text-2xl
								opacity-60
								group-hover:opacity-100
								transition-opacity
								duration-300
							"
							>Ver noticia</span
						>
						<chevron-right-icon
							class="w-5 h-5 md:w-6 md:h-6 mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
						/>
					</router-link>
				</div>
			</div>
		</div>

		<!-- 2 -->
		<div
			class="
				flex flex-col
				lg:flex-row
				items-center
				justify-around
				gap-x-5
				px-5
				bg-wario
				w-full
				opacity-0
				transform
				h-mosaicMobile
				sm:h-banner
				md:h-mosaic
				lg:h-full
				translate-y-8
				transition-all
				duration-300
				ease-in-out
			"
			id="block6"
		>
			<div class="flex flex-col lg:flex-row justify-between items-center">
				<div class="flex flex-col gap-y-5 mt-6 ml-2 w-full lg:w-1/2 order-2 lg:order-none">
					<div>
						<p class="font-bold text-4xl"><span class="text-secondary">Wario</span>Ware</p>
						<p class="font-medium mt-5 text-lg">¡Un auténtico desmadre a toda pastilla! en Nintendo Switch.</p>
					</div>
				</div>

				<div class="w-full lg:w-1/2 h-80 lg:h-full order-1 lg:order-none">
					<img src="/img/mosaic/juegos/wario.jpg" alt="imagen wario wave" class="w-full h-full" />
				</div>
			</div>
		</div>

		<!-- 3 -->
		<div class="w-full h-mosaicMobile sm:h-banner md:h-mosaic lg:h-auto lg:row-span-2 relative">
			<img
				src="/img/mosaic/juegos/metroid.jpg"
				alt="metroid dread imagen"
				class="w-full h-full opacity-0 transform translate-y-8 transition-all duration-300 ease-in-out"
				id="block7"
			/>

			<div class="absolute bottom-10 left-8 lg:w-96 text-white">
				<span class="text-3xl md:text-4xl font-bold">Metroid Dread</span>
				<p class="font-medium my-5 text-base md:text-lg">
					Únete a Samus Aran en su aventura en 2D más desafiante y peligrosa hasta la fecha.
				</p>
				<router-link to="#" class="flex items-center group">
					<span
						class="font-bold text-xl md:text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
						>Pide el tuyo</span
					>
					<chevron-right-icon
						class="w-5 h-5 md:w-6 md:h-6 mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
					/>
				</router-link>
			</div>
		</div>

		<!-- 4 -->
		<div
			class="
				flex flex-col
				lg:flex-row
				items-center
				justify-around
				bg-gray-200
				w-full
				pb-1
				lg:pb-0
				opacity-0
				transform
				h-mosaicMobile
				sm:h-banner
				md:h-mosaic
				lg:h-full
				translate-y-6
				transition-all
				duration-300
				ease-in-out
			"
			id="block8"
		>
			<div class="flex flex-col lg:flex-row justify-between items-center">
				<div class="w-full lg:w-1/2 h-72 lg:h-full">
					<img src="/img/mosaic/juegos/returnal.jpg" alt="ratchet y clank imagen" class="w-full h-full" />
				</div>

				<div class="flex flex-col gap-y-5 mt-4 ml-2 lg:ml-5 w-full lg:w-1/2">
					<div>
						<p class="font-bold text-3xl md:text-4xl">Disfruta de grandes juegos de PS5</p>
						<p class="font-medium mt-5 text-base">
							Una experiencia de juego más profunda y altamente envolvente en las palmas de tus manos.
						</p>
					</div>
					<router-link to="#" class="flex items-center group">
						<span
							class="
								font-bold
								text-xl
								md:text-2xl
								opacity-60
								group-hover:opacity-100
								transition-opacity
								duration-300
							"
							>Ver más</span
						>
						<chevron-right-icon
							class="w-5 h-5 md:w-6 md:h-6 mt-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
						/>
					</router-link>
				</div>
			</div>
		</div>
	</section>

	<!-- juegos -->

	<div class="glider-contain container w-container mx-auto my-14">
		<h2 class="text-3xl lg:text-5xl font-bold">Juegos nuevos</h2>

		<button
			class="
				izquierda
				rounded-full
				bg-primary
				h-10
				w-10
				flex
				items-center
				justify-center
				absolute
				inset-y-arrows
				z-10
			"
			aria-label="Previous"
		>
			<chevron-left-icon class="w-6 h-6 text-white active:text-secondary lg:hover:text-secondary" />
		</button>

		<div class="glider mt-10" id="nuevos">
			<div class="bg-black w-72 h-100 mr-2 group reltive">
				<img src="/img/guardianes.jpg" alt="" class="h-full w-full" />
				<button
					class="
						bg-secondary
						text-yellow-500
						flex
						items-center
						hover:text-yellow-600
						gap-x-2
						absolute
						bottom-0
						left-14
						rounded
						p-2
						opacity-0
						transform
						group-hover:opacity-100 group-hover:-translate-y-4
						transition
						duration-300
					"
				>
					<span class="font-bold">Agregar al carrito</span>
					<shopping-bag-icon class="w-5 h-5" />
				</button>
			</div>
			<div class="bg-black w-72 h-100 mr-2"></div>
			<div class="bg-black w-72 h-100 mr-2"></div>
			<div class="bg-black w-72 h-100 mr-2"></div>

			<div class="bg-red-800 w-72 h-100 mr-2"></div>
			<div class="bg-red-800 w-72 h-100 mr-2"></div>
			<div class="bg-red-800 w-72 h-100 mr-2"></div>
			<div class="bg-red-800 w-72 h-100 mr-2"></div>
		</div>

		<button
			class="
				derecha
				rounded-full
				bg-primary
				h-10
				w-10
				flex
				items-center
				justify-center
				absolute
				inset-y-arrows
				right-0
				z-10
			"
			aria-label="Next"
		>
			<chevron-right-icon class="w-6 h-6 text-white active:text-secondary lg:hover:text-secondary" />
		</button>
	</div>

	<!-- banner -->
	<div
		class="
			w-full
			h-56
			md:h-96
			lg:h-banner
			mt-20
			opacity-0
			transform
			translate-y-10
			transition-all
			duration-300
			ease-in-out
		"
		id="banner1"
	>
		<img src="/img/banner/gamepoint banner.jpg" alt="gamepoint banner" class="w-full h-full" />
	</div>
</template>

<script>
import Element from '@/components/explore/Element.vue';

import { onMounted } from 'vue';

import { ChevronLeftIcon, ChevronRightIcon, ShoppingBagIcon } from '@heroicons/vue/outline';
import Slider from '../../components/layout/Slider.vue';

export default {
	components: { Element, ChevronLeftIcon, ChevronRightIcon, Slider, ShoppingBagIcon },

	setup() {
		onMounted(() => {
			const block5 = document.getElementById('block5');
			const block6 = document.getElementById('block6');
			const block7 = document.getElementById('block7');
			const block8 = document.getElementById('block8');
			const banner1 = document.getElementById('banner1');

			const blockUp = (elements) => {
				elements.forEach((element) => {
					if (element.isIntersecting) {
						element.target.classList.remove('opacity-0');
						setTimeout(() => {
							element.target.classList.remove('transform');
						}, 1000);
					}
				});
			};

			const watcher = new IntersectionObserver(blockUp, {
				root: null,
				rootMargin: '0px',
				threshold: 0.1,
			});

			watcher.observe(block5);
			watcher.observe(block6);
			watcher.observe(block7);
			watcher.observe(block8);
			watcher.observe(banner1);
		});

		onMounted(() => {
			new Glider(document.querySelector('#nuevos'), {
				slidesToShow: 1.5,
				slidesToScroll: 1,
				duration: 0.5,
				arrows: {
					prev: '.izquierda',
					next: '.derecha',
				},
				rewind: true,

				responsive: [
					{
						breakpoint: 640,
						settings: {
							// Set to `auto` and provide item width to adjust to viewport
							slidesToShow: 2.5,
							slidesToScroll: 2,
							duration: 0.5,
						},
					},
					{
						breakpoint: 775,
						settings: {
							// Set to `auto` and provide item width to adjust to viewport
							slidesToShow: 3.5,
							slidesToScroll: 3,
							duration: 0.5,
						},
					},
					{
						breakpoint: 1200,
						settings: {
							// Set to `auto` and provide item width to adjust to viewport
							slidesToShow: 4.5,
							slidesToScroll: 4,
							duration: 0.5,
						},
					},
				],
			});
		});
	},
};
</script>
