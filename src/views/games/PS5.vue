<template>
	<slider />

	<main class="container px-2 my-10 mx-auto w-container flex flex-col items-center">
		<h2 class="text-3xl lg:text-5xl font-bold">Explora la Playstation 5</h2>

		<div class="flex flex-col gap-y-10 lg:gap-x-5 items-center lg:flex-row lg:justify-around my-10 w-full">
			<element-two url="#ps5Games" img="/img/explore/games.jpg" text="Juegos" />
			<element-two url="#ps5Console" img="/img/explore/games.jpg" text="Consola" />
			<element-two url="#" img="/img/explore/games.jpg" text="Controles" />
		</div>
	</main>

	<section class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-1 px-1 mt-10 w-full xl:h-mosaicPc">
		<!-- 1 -->
		<div class="w-full h-mosaicMobile sm:h-banner md:h-mosaic lg:h-auto lg:row-span-2 relative">
			<img
				src="/img/mosaic/ps5/b4b.jpg"
				alt="imagen back 4 blood"
				class="w-full h-full opacity-0 transform translate-y-10 transition-all duration-300 ease-in-out"
				id="block15"
			/>

			<div class="absolute bottom-5 lg:bottom-10 px-3 lg:px-6 lg:w-102 text-white">
				<span class="text-3xl md:text-4xl font-bold capitalize">back 4 blood</span>
				<p class="font-medium mt-5 text-base md:text-lg">
					Un emocionante juego de disparos en primera persona cooperativo, de los creadores de la aclamada
					franquicia de Left 4 Dead.
				</p>
			</div>
		</div>

		<!-- 2 -->
		<div
			class="
				flex flex-col
				lg:flex-row
				items-center
				gap-x-5
				bg-gray-100
				w-full
				h-mosaicMobile
				opacity-0
				transform
				sm:h-banner
				md:h-mosaic
				lg:h-full
				translate-y-8
				transition-all
				duration-300
				ease-in-out
			"
			id="block16"
		>
			<div class="flex flex-col px-3 gap-y-5 mt-4 lg:mt-0 w-full lg:w-1/2 order-2 lg:order-none">
				<div>
					<p class="font-bold text-4xl"><span class="text-secondary">Riders </span>Republic</p>
					<p class="font-medium mt-5 lg:text-lg">
						¡Lánzate al enorme mundo multijugador de Riders Republic™! Coge tu bici, esquíes, tabla de snow o traje
						de alas y explora el paraíso de los deportes en mundo abierto en el que tú creas las reglas.
					</p>
				</div>
			</div>
			<div class="w-full lg:w-1/2 h-imgResponsive lg:h-full order-1 lg:order-none">
				<img src="/img/mosaic/ps5/riders.jpg" alt="imagen wario wave" class="w-full h-full hidden lg:block" />
				<img src="/img/mosaic/ps5/rider tlf.jpeg" alt="imagen wario wave" class="w-full h-full lg:hidden" />
			</div>
		</div>

		<!-- 3  -->
		<div class="w-full h-mosaicMobile sm:h-banner md:h-mosaic lg:h-auto lg:row-span-2 relative">
			<img
				src="/img/mosaic/ps5/returnal.jpeg"
				alt="metroid dread imagen"
				class="w-full h-full opacity-0 transform translate-y-8 transition-all duration-300 ease-in-out"
				id="block17"
			/>

			<div class="absolute bottom-5 lg:bottom-10 px-3 lg:px-6 lg:w-96 text-white">
				<span class="text-3xl md:text-4xl font-bold">Returnal</span>
				<p class="font-medium my-5 text-base md:text-lg">
					Rompe el ciclo de caos en un planeta alienígena que no deja de cambiar.
				</p>
			</div>
		</div>

		<!-- 4 -->
		<div
			class="
				flex flex-col
				lg:flex-row
				items-center
				gap-x-5
				bg-yellow-800
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
			id="block18"
		>
			<div class="w-full lg:w-1/2 h-imgResponsive lg:h-full">
				<img src="/img/mosaic/ps5/deathloop.jpg" alt="ratchet y clank imagen" class="w-full h-full lg:hidden" />
				<img src="/img/mosaic/ps5/dl.jpg" alt="ratchet y clank imagen" class="w-full h-full hidden lg:block" />
			</div>
			<div class="flex flex-col px-3 gap-y-5 mt-8 lg:mt-0 w-full lg:w-1/2 text-white">
				<div>
					<p class="font-bold text-3xl md:text-4xl">Deathloop</p>
					<p class="font-medium mt-5 text-lg">Participa en la eterna pugna entre dos asesinos extraordinarios.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- juegos -->

	<div class="glider-contain container w-container mx-auto my-14" id="ps5Games">
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

		<div class="glider mt-10" id="nuevosPS5">
			<div class="bg-black w-72 h-100 mr-2">
				<img src="/img/guardianes.jpg" alt="" class="h-full w-full" />
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

	<!-- consolas playstation -->
	<div
		class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-1 px-1 my-10 w-full xl:h-mosaicConsole"
		id="ps5Console"
	>
		<!-- banner-->
		<div
			class="
				w-full
				h-mosaicMobile
				sm:h-banner
				md:h-mosaic
				lg:h-auto lg:row-span-2 lg:col-span-2
				relative
				text-white
			"
		>
			<img
				src="/img/banner/gamepoint banner.jpg"
				alt="imagen playstation"
				loading="lazy"
				class="w-full h-full opacity-0 transform translate-y-10 transition-all duration-300 ease-in-out"
				id="block19"
			/>

			<!-- <div class="flex flex-col gap-y-5 justify-center absolute bottom-4 px-3 lg:px-10 lg:inset-y-1/2">
				<span class="text-3xl md:text-6xl font-bold">PlayStation 5</span>
				<p class="font-medium text-base md:text-lg lg:w-1/2">
					Desde Ratchet & Clank: Rift Apart hasta Returnal, desde Deathloop hasta Demon's Souls, te esperan juegos
					en PS5 y PS4 que no te puedes perder.
				</p>
			</div> -->
		</div>

		<!-- ps5 -->
		<div
			class="
				flex flex-col
				lg:flex-row lg:gap-x-2
				items-center
				bg-gradient-to-t
				lg:bg-gradient-to-r
				from-gray-500
				opacity-0
				transform
				w-full
				h-mosaicMobile
				sm:h-banner
				md:h-mosaic
				lg:h-full
				translate-y-8
				transition-all
				duration-300
				ease-in-out
			"
			id="block20"
		>
			<div class="flex flex-col px-3 gap-y-5 mt-4 lg:mt-0 w-full lg:w-1/2 order-2 lg:order-none text-white">
				<div>
					<p class="font-bold text-4xl">PlayStation <span class="text-secondary">5</span></p>
					<p class="font-medium mt-5 text-lg">
						Descubre los juegos que quieres, desde éxitos exclusivos a independientes innovadores; todos cobran vida
						con el poder de la consola PS5™.
					</p>
				</div>
				<router-link to="#" class="flex items-center group">
					<span class="font-bold md:text-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
						>Consultar disponibilidad</span
					>
					<chevron-right-icon
						class="w-4 h-4 lg:w-5 lg:h-5 mt-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
					/>
				</router-link>
			</div>
			<div class="w-full lg:w-1/2 h-imgResponsive lg:h-full order-1 lg:order-none">
				<img src="/img/mosaic/ps5/ps5.png" alt="imagen playstation 5" loading="lazy" class="w-full h-full" />
			</div>
		</div>

		<!-- ps5 digital -->
		<div
			class="
				flex flex-col
				lg:flex-row lg:gap-x-2
				items-center
				bg-gradient-to-t
				lg:bg-gradient-to-r
				from-gray-500
				opacity-0
				transform
				w-full
				h-mosaicMobile
				sm:h-banner
				md:h-mosaic
				lg:h-full
				translate-y-8
				transition-all
				duration-300
				ease-in-out
			"
			id="block21"
		>
			<div class="flex flex-col px-3 gap-y-5 mt-4 lg:mt-0 w-full lg:w-1/2 order-2 lg:order-none text-white">
				<div>
					<p class="font-bold text-4xl">PlayStation 5 <span class="text-secondary">Digital</span></p>
					<p class="font-medium mt-5 text-lg">
						Una versión completamente digital de la consola PS5 que no trae unidad de disco. Inicia sesión en tu
						cuenta de PlayStation Network y ve a PlayStation Store para comprar y descargar juegos digitales de PS5
						y PS4.
					</p>
				</div>
				<router-link to="#" class="flex items-center group">
					<span class="font-bold md:text-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
						>Consultar disponibilidad</span
					>
					<chevron-right-icon
						class="w-4 h-4 lg:w-5 lg:h-5 mt-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
					/>
				</router-link>
			</div>
			<div class="w-full lg:w-1/2 h-imgResponsive lg:h-full order-1 lg:order-none">
				<img
					src="/img/mosaic/ps5/ps5 digital.png"
					alt="imagen ps5 digital"
					loading="lazy"
					class="w-full h-full"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted } from 'vue';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/outline';
import ElementTwo from '../../components/explore/ElementTwo.vue';
import Slider from '../../components/layout/Slider.vue';

export default {
	components: { ElementTwo, ChevronLeftIcon, ChevronRightIcon, Slider },

	setup() {
		onMounted(() => {
			const block15 = document.getElementById('block15');
			const block16 = document.getElementById('block16');
			const block17 = document.getElementById('block17');
			const block18 = document.getElementById('block18');
			const block19 = document.getElementById('block19');
			const block20 = document.getElementById('block20');
			const block21 = document.getElementById('block21');

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

			watcher.observe(block15);
			watcher.observe(block16);
			watcher.observe(block17);
			watcher.observe(block18);
			watcher.observe(block19);
			watcher.observe(block20);
			watcher.observe(block21);
		});

		onMounted(() => {
			new Glider(document.querySelector('#nuevosPS5'), {
				slidesToShow: 1.5,
				slidesToScroll: 1,
				draggable: true,
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
