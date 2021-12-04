<template>
	<slider />

	<main class="container px-2 my-10 mx-auto w-container flex flex-col items-center">
		<h2 class="text-3xl lg:text-5xl font-bold">Explora la Playstation 4</h2>

		<div class="flex flex-col gap-y-10 lg:gap-x-5 items-center lg:flex-row lg:justify-around my-10 w-full">
			<element-two url="#ps4Games" img="/img/explore/games.jpg" text="Juegos" />
			<element-two url="#ps5Console" img="/img/explore/games.jpg" text="Consola" />
			<element-two url="#" img="/img/explore/games.jpg" text="Controles" />
		</div>
	</main>

	<section class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-1 px-1 mt-10 w-full xl:h-mosaicPc">
		<!-- 1 -->
		<div class="w-full h-mosaicMobile sm:h-banner md:h-mosaic lg:h-auto lg:row-span-2 relative">
			<img
				src="/img/mosaic/ps4/ghost.jpg"
				alt="imagen back 4 blood"
				class="w-full h-full opacity-0 transform translate-y-10 transition-all duration-300 ease-in-out"
				id="block22"
			/>

			<div class="absolute bottom-5 lg:bottom-10 px-3 lg:px-6 lg:w-104 text-white">
				<span class="text-3xl md:text-4xl font-bold capitalize">Ghost of Tushima</span>
				<p class="font-medium mt-5 text-base md:text-lg">
					Descubre las maravillas ocultas de Tsushima en esta aventura de acción en un mundo abierto creada por
					Sucker Punch Productions y PlayStation Studios, disponible en PS5 y PS4.
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
			id="block23"
		>
			<div class="flex flex-col px-3 gap-y-5 mt-4 lg:mt-0 w-full lg:w-1/2 order-2 lg:order-none">
				<div>
					<p class="font-bold text-4xl">Marvel's Guardians of the Galaxy</p>
					<p class="font-medium mt-5 lg:text-lg">
						Ponte en la piel de Star-Lord en una aventura fuera de este mundo de Eidos-Montréal.
					</p>
				</div>
			</div>
			<div class="w-full lg:w-1/2 h-imgResponsive lg:h-full order-1 lg:order-none">
				<img src="/img/mosaic/ps4/guardians.jpg" alt="imagen wario wave" class="w-full h-full hidden lg:block" />
				<img src="/img/mosaic/ps4/guardians tlf.jpg" alt="imagen wario wave" class="w-full h-full lg:hidden" />
			</div>
		</div>

		<!-- 3  -->
		<div class="w-full h-mosaicMobile sm:h-banner md:h-mosaic lg:h-auto lg:row-span-2 relative">
			<img
				src="/img/mosaic/ps4/fifa.jpg"
				alt="metroid dread imagen"
				class="w-full h-full opacity-0 transform translate-y-8 transition-all duration-300 ease-in-out"
				id="block24"
			/>

			<div class="absolute bottom-5 lg:bottom-10 px-3 lg:px-6 lg:w-102">
				<span class="text-3xl md:text-4xl font-bold">Fifa 22</span>
				<p class="font-medium my-5 text-base md:text-lg">
					FIFA 22 cuenta con la nueva e innovadora tecnología de juego HyperMotion, la cual acerca cada partido a
					lo que ves en la vida real.
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
			id="block25"
		>
			<div class="w-full lg:w-1/2 h-imgResponsive lg:h-full">
				<img
					src="/img/mosaic/ps4/village.jpg"
					alt="Residen evil village imagen"
					class="w-full h-full hidden lg:block"
				/>
				<img
					src="/img/mosaic/ps4/village tlf.jpg"
					alt="Residen evil village imagen"
					class="w-full h-full lg:hidden"
				/>
			</div>
			<div class="flex flex-col px-3 gap-y-5 mt-8 lg:mt-0 w-full lg:w-1/2 text-white">
				<div>
					<p class="font-bold text-3xl md:text-4xl capitalize">resident evil: village</p>
					<p class="font-medium mt-5 text-lg">
						Vive el horror de supervivencia como nunca antes en el octavo episodio principal de la historiada saga
						de Resident Evil: Resident Evil Village.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- juegos -->

	<div class="glider-contain container w-container mx-auto my-14" id="ps4Games">
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

		<div class="glider mt-10" id="nuevosPS4">
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
				id="block26"
			/>

			<!-- <div class="flex flex-col gap-y-5 justify-center absolute bottom-4 px-3 lg:px-10 lg:inset-y-1/2">
				<span class="text-3xl md:text-6xl font-bold">PlayStation 5</span>
				<p class="font-medium text-base md:text-lg lg:w-1/2">
					Desde Ratchet & Clank: Rift Apart hasta Returnal, desde Deathloop hasta Demon's Souls, te esperan juegos
					en PS5 y PS4 que no te puedes perder.
				</p>
			</div> -->
		</div>

		<!-- ps4 slim -->
		<div
			class="
				flex flex-col
				lg:flex-row lg:gap-x-2
				items-center
				bg-gradient-to-t
				lg:bg-gradient-to-r
				from-primary
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
			id="block27"
		>
			<div class="flex flex-col px-3 gap-y-5 mt-4 lg:mt-0 w-full lg:w-1/2 order-2 lg:order-none text-white">
				<div>
					<p class="font-bold text-4xl">PlayStation <span class="text-secondary">5</span></p>
					<p class="font-medium mt-5 lg:text-lg">
						Únete a guerreros samurái, a sobrevivientes fortalecidos y a dioses poderosos en algunos de los juegos
						más aclamados de la historia.
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
			<div class="w-full lg:w-1/2 h-imgResponsive lg:h-full order-1 lg:order-none lg:flex lg:items-center">
				<img
					src="/img/mosaic/ps4/ps4 slim.png"
					alt="imagen playstation 5"
					loading="lazy"
					class="w-full h-full lg:h-auto"
				/>
			</div>
		</div>

		<!-- ps4 pro -->
		<div
			class="
				flex flex-col
				lg:flex-row lg:gap-x-2
				items-center
				bg-gradient-to-t
				lg:bg-gradient-to-r
				from-primary
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
			id="block28"
		>
			<div class="flex flex-col px-3 gap-y-5 mt-4 lg:mt-0 w-full lg:w-1/2 order-2 lg:order-none text-white">
				<div>
					<p class="font-bold text-4xl">PlayStation 5 <span class="text-secondary">Digital</span></p>
					<p class="font-medium mt-5 ;g:text-lg">
						Disfruta de los juegos taquilleros más recientes de PS4 y exclusivas de PlayStation en sorprendente 4K
						desde la consola PS4 Pro, y transmite tu entretenimiento favorito con increíble detalle visual desde los
						servicios compatibles con 4K.
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
			<div class="w-full lg:w-1/2 h-imgResponsive lg:h-full order-1 lg:order-none lg:flex lg:items-center">
				<img
					src="/img/mosaic/ps4/ps4 pro.png"
					alt="imagen ps5 digital"
					loading="lazy"
					class="w-full h-full lg:h-auto"
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
			const block22 = document.getElementById('block22');
			const block23 = document.getElementById('block23');
			const block24 = document.getElementById('block24');
			const block25 = document.getElementById('block25');
			const block26 = document.getElementById('block26');
			const block27 = document.getElementById('block27');
			const block28 = document.getElementById('block28');

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

			watcher.observe(block22);
			watcher.observe(block23);
			watcher.observe(block24);
			watcher.observe(block25);
			watcher.observe(block26);
			watcher.observe(block27);
			watcher.observe(block28);
		});

		onMounted(() => {
			new Glider(document.querySelector('#nuevosPS4'), {
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
