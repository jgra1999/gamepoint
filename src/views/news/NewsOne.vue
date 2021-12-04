<template>
	<div class="container mx-auto xl:my-10 w-full md:w-11/12 bg-gray-100 p-5 md:p-10">
		<h2 class="font-bold my-5 text-4xl md:text-5xl">
			Twitch ha llegado a Nintendo Switch: ya puedes descargar gratuitamente la app desde la eShop
		</h2>
		<div class="w-full h-64 lg:h-110 mt-10">
			<img src="/img/news/twitch + switch.jpeg" class="w-full h-full" loading="lazy" alt="imagen gta trilogy" />
		</div>
		<div class="flex items-center gap-1 text-gray-500 py-5 border-b-2 mb-8">
			<calendar-icon class="w-3 md:w-4 h-3 md:h-4" />
			<span class="text-sm md:text-base"> Domingo 14 de noviembre del 2021</span>
		</div>

		<div class="md:text-lg">
			<p>
				Sin previo aviso, la app de <strong>Twitch</strong> ha aparecido en la eShop de <strong>Switch</strong>, y
				con ella Nintendo suma una de las alternativas de vídeo en streaming más demandadas para su consola: ya
				puedes ver las retransmisiones de tus canales favoritos y a las celebridades de la plataforma desde
				cualquier tele o a través de la pantalla de tu consola.
			</p>

			<br />

			<p>
				<strong>Twitch</strong> es mucho más que una plataforma de streaming: es un punto de peregrinaje para
				millones de apasionados por los videojuegos. Una ventana para disfrutar de esta pasión y otras muchas que,
				definitivamente, llega a <strong>Switch</strong> con bastante demora y sin una característica esencial: a
				diferencia de sus equivalentes en Xbox y PlayStation: no tendremos la opción de transmitir contenido.
			</p>
		</div>

		<div class="w-full xl:w-3/4 mx-auto h-64 sm:h-72 md:h-96 lg:h-100 xl:h-102 my-5 lg:my-10">
			<iframe
				class="w-full h-full rounded"
				src="https://www.youtube.com/embed/f5uik5fgIaI"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>

		<div class="md:text-lg border-b-2 mb-8 pb-10">
			<p>
				En cualquier caso, la cada vez mayor expansión de <strong>Twitch</strong> como medio, que la inscripción
				premium a <strong>Twitch</strong>
				Prime se incluya en el plan Amazon Prime y la cada vez mayor migración de creadores de contenidos hacia la
				plataforma de Amazon es un enorme reclamo para cualquier apasionado por los videojuegos y los eSports.
			</p>
		</div>
		<div class="flex flex-wrap items-center gap-x-2">
			<span class="text-gray-500">Temas:</span>
			<span class="p-2 bg-secondary rounded font-bold">Noticias</span>
			<span class="p-2 bg-secondary rounded font-bold">Twitch</span>
			<span class="p-2 bg-secondary rounded font-bold">Nintendo Switch</span>
		</div>
	</div>
</template>

<script>
import { CalendarIcon } from '@heroicons/vue/outline';

export default {
	components: {
		CalendarIcon,
	},
};
</script>
