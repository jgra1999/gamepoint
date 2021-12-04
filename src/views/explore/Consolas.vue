<template>
	<slider />
	<main class="container px-2 my-10 mx-auto w-container flex flex-col items-center">
		<h2 class="text-3xl lg:text-5xl font-bold">¿Cuál es tu consola?</h2>

		<div class="flex flex-col gap-y-10 lg:gap-x-5 items-center lg:flex-row lg:justify-around my-10 w-full">
			<element url="/playstation-5" img="/img/explore/consoles.jpg" text="Playstation 5" />
			<element url="#" img="/img/explore/consoles.jpg" text="Playstation 4" />
			<element url="#" img="/img/explore/consoles.jpg" text="Nintedo Switch" />
		</div>
	</main>

	<!-- consolas playstation -->
	<section class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-1 px-1 mt-10 w-full xl:h-mosaicConsole">
		<!-- 1 -->
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
				src="/img/mosaic/consolas/play.jpg"
				alt="imagen playstation"
				loading="lazy"
				class="w-full h-full opacity-0 transform translate-y-10 transition-all duration-300 ease-in-out"
				id="block9"
			/>

			<div class="flex flex-col gap-y-5 justify-center absolute bottom-4 px-3 lg:px-10 lg:inset-y-1/2">
				<span class="text-3xl md:text-6xl font-bold">PlayStation</span>
				<p class="font-medium text-base md:text-lg lg:w-1/2">
					Desde Ratchet & Clank: Rift Apart hasta Returnal, desde Deathloop hasta Demon's Souls, te esperan juegos
					en PS5 y PS4 que no te puedes perder.
				</p>
			</div>
		</div>

		<!-- 2 -->
		<div
			class="
				flex flex-col
				lg:flex-row lg:gap-x-2
				items-center
				bg-primary
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
			id="block10"
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
				<img src="/img/mosaic/consolas/ps5.png" alt="imagen playstation 5" loading="lazy" class="w-full h-full" />
			</div>
		</div>

		<!-- 3 -->
		<div
			class="
				flex flex-col
				lg:flex-row lg:gap-x-2
				items-center
				bg-primary
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
			id="block11"
		>
			<div class="flex flex-col px-3 gap-y-5 mt-4 lg:mt-0 w-full lg:w-1/2 order-2 lg:order-none text-white">
				<div>
					<p class="font-bold text-4xl">PlayStation <span class="text-secondary">4</span></p>
					<p class="font-medium mt-5 text-lg">
						Vive una generación arrolladora de juegos aclamados por la crítica, incluidos juegos destacadas y
						exclusivos de PlayStation Studios.
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
				<img src="/img/mosaic/consolas/ps4.jpg" alt="imagen ps4" loading="lazy" class="w-full h-full" />
			</div>
		</div>
	</section>

	<!-- consolas switch -->
	<div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-1 px-1 my-20 w-full xl:h-mosaicConsole">
		<!-- 1 -->
		<div class="w-full h-mosaicMobile sm:h-banner md:h-mosaic lg:h-auto lg:row-span-2 lg:col-span-2 relative">
			<img
				src="/img/mosaic/consolas/nintendo.jpg"
				alt="imagen nintendo switch"
				loading="lazy"
				class="w-full h-full opacity-0 transform translate-y-10 transition-all duration-300 ease-in-out"
				id="block12"
			/>

			<div
				class="flex flex-col gap-y-5 justify-center absolute bottom-4 px-3 lg:px-10 lg:inset-y-1/2 text-white"
			>
				<span class="text-3xl md:text-6xl font-bold">Nintedo Switch</span>
				<p class="font-medium text-base md:text-lg lg:w-1/2">
					Nintendo Switch está diseñado para adaptarse a tu vida, transformándose de una consola doméstica a un
					sistema portátil en un instante.
				</p>
				<router-link to="#" class="flex items-center group">
					<span class="font-bold md:text-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
						>Consultar disponibilidad</span
					>
					<chevron-right-icon
						class="w-4 h-4 lg:w-5 lg:h-5 mt-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
					/>
				</router-link>
			</div>
		</div>

		<!-- 2 -->
		<div
			class="
				flex flex-col
				lg:flex-row lg:gap-x-2
				items-center
				bg-gray-300
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
			id="block13"
		>
			<div class="flex flex-col px-3 gap-y-5 mt-4 lg:mt-0 w-full lg:w-1/2 order-2 lg:order-none">
				<div>
					<p class="font-bold text-4xl">Nintedo Switch Oled</p>
					<p class="font-medium mt-5 text-lg">
						Deleita tus ojos con colores brillantes y contrastes definidos cuando juegues en el camino.
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
					src="/img/mosaic/consolas/oled.jpg"
					alt="imagen playstation 5"
					loading="lazy"
					class="w-full h-full"
				/>
			</div>
		</div>

		<!-- 3 -->
		<div
			class="
				flex flex-col
				lg:flex-row lg:gap-x-2
				items-center
				bg-gray-300
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
			id="block14"
		>
			<div class="flex flex-col px-3 gap-y-5 mt-4 lg:mt-0 w-full lg:w-1/2 order-2 lg:order-none">
				<div>
					<p class="font-bold text-4xl">Nintendo Switch Lite</p>
					<p class="font-medium mt-5 lg:text-lg">
						El Nintendo Switch Lite está diseñado para jugar en la computadora de mano, por lo que puede saltar a
						sus juegos favoritos donde quiera que esté.
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
				<img src="/img/mosaic/consolas/lite.jpg" alt="imagen wario wave" loading="lazy" class="w-full h-full" />
			</div>
		</div>
	</div>

	<!-- banner -->
	<!-- <div
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
	</div> -->
</template>

<script>
import Element from '@/components/explore/Element.vue';

import { onMounted } from 'vue';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/outline';
import Slider from '../../components/layout/Slider.vue';

export default {
	components: { Element, ChevronLeftIcon, ChevronRightIcon, Slider },

	setup() {
		onMounted(() => {
			const block9 = document.getElementById('block9');
			const block10 = document.getElementById('block10');
			const block11 = document.getElementById('block11');
			const block12 = document.getElementById('block12');
			const block13 = document.getElementById('block13');
			const block14 = document.getElementById('block14');

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

			watcher.observe(block9);
			watcher.observe(block10);
			watcher.observe(block11);
			watcher.observe(block12);
			watcher.observe(block13);
			watcher.observe(block14);
		});
	},
};
</script>
