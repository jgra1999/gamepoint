<template>
	<main class="container px-2 my-10 mx-auto w-container flex flex-col items-center">
		<h2 class="text-3xl lg:text-5xl font-bold">¿Qué estas Buscando?</h2>

		<div class="flex flex-col gap-y-10 lg:gap-x-5 items-center lg:flex-row lg:justify-around my-10 w-full">
			<router-link to="/juegos" class="group">
				<div class="w-full h-72 lg:w-80 lg:h-54 xl:w-96 xl:lg-64 overflow-hidden">
					<img
						src="/img/explore/games.jpg"
						alt="juegos imagen"
						class="w-full h-full transition-all duration-300 transform group-hover:scale-110"
					/>
				</div>
				<div class="flex items-center gap-x-2 mt-2">
					<span class="font-bold text-2xl pb-1 group-hover:text-secondary transition-colors duration-300"
						>Juegos</span
					>
					<chevron-right-icon class="w-6 h-6 mt-1.5 group-hover:text-secondary transition-colors duration-300" />
				</div>
			</router-link>
			<div class="group">
				<div class="w-full h-72 lg:w-80 lg:h-54 xl:w-96 xl:lg-64 overflow-hidden">
					<img
						src="/img/explore/consoles.jpg"
						alt="juegos imagen"
						class="w-full h-full transition-all duration-300 transform group-hover:scale-110"
					/>
				</div>
				<div class="flex items-center gap-x-1 mt-2">
					<span class="font-bold text-2xl group-hover:text-secondary transition-colors duration-300"
						>Consolas</span
					>
					<chevron-right-icon class="w-6 h-6 mt-1.5 group-hover:text-secondary transition-colors duration-300" />
				</div>
			</div>
			<div class="group">
				<div class="w-full h-72 lg:w-80 lg:h-54 xl:w-96 xl:lg-64 overflow-hidden">
					<img
						src="/img/explore/fix.jpg"
						alt="juegos imagen"
						class="w-full h-full transition-all duration-300 transform group-hover:scale-110"
					/>
				</div>
				<div class="flex items-center gap-x-2 mt-2">
					<span class="font-bold text-2xl group-hover:text-secondary transition-colors duration-300"
						>Servicio Técnico</span
					>
					<chevron-right-icon class="w-6 h-6 mt-1.5 group-hover:text-secondary transition-colors duration-300" />
				</div>
			</div>
		</div>
	</main>

	<section class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-1 px-1 mt-10 w-full xl:h-mosaicPc">
		<!-- 1 -->
		<div class="w-full h-mosaicMobile sm:h-banner md:h-mosaic lg:h-auto lg:row-span-2 relative">
			<img
				src="/img/mosaic/home/ps hits.jpg"
				alt=""
				class="w-full h-full opacity-0 transform translate-y-10 transition-all duration-300 ease-in-out"
				id="block1"
			/>

			<div class="flex justify-center gap-x-2 w-full text-white absolute bottom-5 lg:bottom-10">
				<router-link to="#" class="flex items-center group">
					<span
						class="font-bold text-xl md:text-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
						>Ver más</span
					>
					<chevron-right-icon
						class="w-6 h-6 mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
					/>
				</router-link>
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
				bg-twitch
				w-full
				h-mosaicMobile
				sm:h-banner
				md:h-mosaic
				lg:h-full
				opacity-0
				transform
				translate-y-8
				transition-all
				duration-300
				ease-in-out
			"
			id="block2"
		>
			<div class="flex flex-col gap-y-5 order-2 lg:order-none">
				<div>
					<p class="font-bold text-4xl"><span class="text-secondary">Twitch</span> llego a Nintendo Switch</p>
				</div>
				<router-link to="#" class="flex items-center group text-white">
					<span
						class="font-bold text-xl md:text-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
						>Ver noticia</span
					>
					<chevron-right-icon
						class="w-6 h-6 mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
					/>
				</router-link>
			</div>
			<div>
				<img src="/img/mosaic/home/twitch.png" alt="" class="w-64 lg:w-96 order-1 lg:order-none" />
			</div>
		</div>

		<!-- 3 -->
		<div class="w-full h-mosaicMobile sm:h-banner md:h-mosaic lg:h-auto lg:row-span-2 relative">
			<img
				src="/img/mosaic/home/goodfall.jpg"
				alt="goodfall imagen"
				class="w-full h-full opacity-0 transform translate-y-8 transition-all duration-300 ease-in-out"
				id="block3"
			/>

			<div class="absolute bottom-10 left-8 lg:w-96">
				<span class="text-3xl md:text-4xl font-bold">PlayStation Plus</span>
				<p class="font-medium my-5 text-base md:text-lg">
					Se filtran juegos que estarán disponibles en diciembre y seran gratuitos.
				</p>
				<router-link to="#" class="flex items-center group">
					<span
						class="font-bold text-xl md:text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
						>Ver noticia</span
					>
					<chevron-right-icon
						class="w-6 h-6 mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
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
				bg-white
				w-full
				h-mosaicMobile
				sm:h-banner
				md:h-mosaic
				lg:h-full
				opacity-0
				transform
				translate-y-6
				transition-all
				duration-300
				ease-in-out
			"
			id="block4"
		>
			<div class="w-full lg:w-1/2 h-full">
				<img src="/img/mosaic/home/dualsense.jpg" alt="" class="w-full h-full" />
			</div>

			<div class="flex flex-col gap-y-5 mt-4 ml-2 lg:ml-5 w-full lg:w-1/2">
				<div>
					<p class="font-bold text-3xl md:text-4xl">Controles de <span class="text-secondary">PS5</span></p>
					<p class="font-medium mt-5 text-base">
						Una experiencia de juego más profunda y altamente envolvente en las palmas de tus manos.
					</p>
				</div>
				<router-link to="#" class="flex items-center group">
					<span
						class="font-bold text-xl md:text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
						>Ver más</span
					>
					<chevron-right-icon
						class="w-6 h-6 mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
					/>
				</router-link>
			</div>
		</div>
	</section>

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
import Btn from '@/components/layout/Btn.vue';

import { ChevronRightIcon } from '@heroicons/vue/solid';

import { onMounted } from 'vue';

export default {
	components: { Btn, ChevronRightIcon },

	setup() {
		onMounted(() => {
			const block1 = document.getElementById('block1');
			const block2 = document.getElementById('block2');
			const block3 = document.getElementById('block3');
			const block4 = document.getElementById('block4');
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

			watcher.observe(block1);
			watcher.observe(block2);
			watcher.observe(block3);
			watcher.observe(block4);
			watcher.observe(banner1);
		});
	},
};
</script>
