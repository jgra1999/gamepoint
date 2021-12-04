<template>
	<slider />
	<main class="container px-2 my-10 mx-auto w-container flex flex-col items-center">
		<h2 class="text-2xl lg:text-5xl font-bold">Explora la Nintendo Switch</h2>

		<div class="flex flex-col gap-y-10 lg:gap-x-5 items-center lg:flex-row lg:justify-around my-10 w-full">
			<element-two url="#switchGames" img="/img/explore/games.jpg" text="Juegos" />
			<element-two url="#switchConsole" img="/img/explore/games.jpg" text="Consola" />
			<element-two url="#" img="/img/explore/games.jpg" text="Controles" />
		</div>
	</main>

	<section class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-1 px-1 mt-10 w-full xl:h-mosaicPc">
		<!-- 1 -->
		<div class="w-full h-mosaicMobile sm:h-banner md:h-mosaic lg:h-auto lg:row-span-2 relative">
			<img
				src="/img/mosaic/switch/nightmare.jpg"
				alt="imagen little nightmare II"
				class="w-full h-full opacity-0 transform translate-y-10 transition-all duration-300 ease-in-out"
				id="block29"
			/>

			<div class="absolute bottom-5 lg:bottom-10 px-3 lg:px-6 lg:w-104 text-white">
				<span class="text-3xl md:text-4xl font-bold capitalize">little nightmares II</span>
				<p class="font-medium mt-5 text-base md:text-lg">
					Un juego de aventuras y suspenso en el que juegas como Mono, un niño atrapado en un mundo que ha sido
					distorsionado por la transmisión del zumbido de una torre lejana.
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
				bg-gray-200
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
			id="block30"
		>
			<div class="flex flex-col px-3 gap-y-5 mt-4 lg:mt-0 w-full lg:w-1/2 order-2 lg:order-none">
				<div>
					<p class="font-bold text-4xl">No More Heroes <span class="text-secondary">III</span></p>
					<p class="font-medium mt-5 lg:text-lg">
						El legendario asesino Travis Touchdown hace su glorioso regreso a la locura en el juego No More Heroes
						III, ¡exclusivamente para el sistema Nintendo Switch ™!
					</p>
				</div>
			</div>
			<div class="w-full lg:w-1/2 h-imgResponsive lg:h-full order-1 lg:order-none">
				<img
					src="/img/mosaic/switch/no more heroes.jpg"
					alt="imagen no more heroes 3"
					class="w-full h-full hidden lg:block"
				/>
				<img
					src="/img/mosaic/switch/no more heroes tlf.jpg"
					alt="imagen no more heroes 3"
					class="w-full h-full lg:hidden"
				/>
			</div>
		</div>

		<!-- 3  -->
		<div class="w-full h-mosaicMobile sm:h-banner md:h-mosaic lg:h-auto lg:row-span-2 relative">
			<img
				src="/img/mosaic/juegos/metroid.jpg"
				alt="metroid dread imagen"
				class="w-full h-full opacity-0 transform translate-y-8 transition-all duration-300 ease-in-out"
				id="block31"
			/>

			<div class="absolute bottom-5 lg:bottom-10 px-3 lg:px-6 lg:w-102 text-white">
				<span class="text-3xl md:text-4xl font-bold">Metroid Dread</span>
				<p class="font-medium my-5 text-base md:text-lg">
					Únete a Samus Aran en su aventura en 2D más desafiante y peligrosa hasta la fecha.
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
			id="block32"
		>
			<div class="w-full lg:w-1/2 h-imgResponsive lg:h-full">
				<img src="/img/mosaic/switch/mario.jpg" alt="Mario golf imagen" class="w-full h-full hidden lg:block" />
				<img src="/img/mosaic/switch/mario tlf.jpg" alt="Mario golf imagen" class="w-full h-full lg:hidden" />
			</div>
			<div class="flex flex-col px-3 gap-y-5 mt-8 lg:mt-0 w-full lg:w-1/2">
				<div>
					<p class="font-bold text-3xl md:text-4xl capitalize">mario golf super rush</p>
					<p class="font-medium mt-5 text-lg">
						Adéntrate en el campo de golf con hasta cuatro jugadores de manera local o en línea y ¡juega en compañía
						de reconocidos personajes de la serie de Super Mario™
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- juegos -->

	<div class="glider-contain container w-container mx-auto my-14" id="switchGames">
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

		<div class="glider mt-10" id="nuevosSwitch">
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

	<!-- consolas switch -->
	<div
		class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-1 px-1 my-20 w-full xl:h-mosaicConsole"
		id="switchConsole"
	>
		<!-- switch -->
		<div class="w-full h-mosaicMobile sm:h-banner md:h-mosaic lg:h-auto lg:row-span-2 lg:col-span-2 relative">
			<img
				src="/img/mosaic/consolas/nintendo.jpg"
				alt="imagen nintendo switch"
				loading="lazy"
				class="w-full h-full opacity-0 transform translate-y-10 transition-all duration-300 ease-in-out"
				id="block33"
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

		<!-- oled -->
		<div
			class="
				flex flex-col
				lg:flex-row lg:gap-x-2
				items-center
				bg-red-600
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
			id="block34"
		>
			<div class="flex flex-col px-3 gap-y-5 mt-4 lg:mt-0 w-full lg:w-1/2 order-2 lg:order-none text-white">
				<div>
					<p class="font-bold text-4xl">Nintedo Switch <span class="text-secondary">Oled</span></p>
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

		<!-- lite -->
		<div
			class="
				flex flex-col
				lg:flex-row lg:gap-x-2
				items-center
				bg-red-600
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
			id="block35"
		>
			<div class="flex flex-col px-3 gap-y-5 mt-4 lg:mt-0 w-full lg:w-1/2 order-2 lg:order-none text-white">
				<div>
					<p class="font-bold text-4xl">Nintendo Switch <span class="text-secondary">Lite</span></p>
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
			const block29 = document.getElementById('block29');
			const block30 = document.getElementById('block30');
			const block31 = document.getElementById('block31');
			const block32 = document.getElementById('block32');
			const block33 = document.getElementById('block33');
			const block34 = document.getElementById('block34');
			const block35 = document.getElementById('block35');

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

			watcher.observe(block29);
			watcher.observe(block30);
			watcher.observe(block31);
			watcher.observe(block32);
			watcher.observe(block33);
			watcher.observe(block34);
			watcher.observe(block35);
		});

		onMounted(() => {
			new Glider(document.querySelector('#nuevosSwitch'), {
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
