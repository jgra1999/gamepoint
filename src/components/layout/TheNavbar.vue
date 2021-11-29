<template>
	<nav class="w-full h-16 bg-primary flex justify-between items-center px-2 lg:px-6" id="top">
		<!-- menu resposive -->
		<div class="flex items-center gap-x-5 lg:hidden">
			<!-- btn menu resposive -->
			<button @click="showMenuResponsive">
				<menu-icon class="w-6 h-6 text-white" />
			</button>

			<button @click="showInput">
				<search-icon class="w-5 h-5 text-white active:text-secondary search" />
				<x-icon class="w-5 h-5 text-white active:text-secondary hidden back" />
			</button>
		</div>

		<!-- menu pc -->
		<div class="flex items-center">
			<!-- logo -->
			<div class="w-44">
				<img src="/img/logo.png" alt="gamepoint logo" class="w-full" />
			</div>

			<!-- categorias -->
			<ul class="hidden lg:flex items-center gap-x-5 ml-3 text-white">
				<li class="font-medium text-lg hover:text-secondary transition-colors duration-300">
					<router-link to="#"> PlayStation 5 </router-link>
				</li>

				<li class="font-medium text-lg hover:text-secondary transition-colors duration-300">
					<router-link to="#"> PlayStation 4 </router-link>
				</li>

				<li class="font-medium text-lg hover:text-secondary transition-colors duration-300">
					<router-link to="#"> Nintedo Switch </router-link>
				</li>
			</ul>
		</div>

		<!-- input search -->
		<div class="absolute right-2 lg:static w-3/4 sm:w-4/5 lg:w-1/3 xl:w-2/5 2xl:w-1/2">
			<form class="relative z-10 opacity-0 transition-opacity duration-200" id="inputSearch">
				<input type="text" class="bg-white py-2 px-3 w-full" placeholder="¿Qué estas buscando?" />

				<button class="absolute right-3 top-2.5">
					<search-icon class="w-5 h-5 text-gray-400 hover:text-primary" />
				</button>
			</form>
		</div>

		<!-- icons -->
		<div class="flex items-center gap-x-5 lg:mr-3">
			<button class="hidden lg:block" @click="showInput">
				<search-icon class="w-5 h-5 text-white hover:text-secondary searchPc" />
				<x-icon class="w-5 h-5 text-white hover:text-secondary hidden backPc" />
			</button>
			<router-link to="#">
				<shopping-bag-icon class="w-5 h-5 text-white hover:text-secondary" />
			</router-link>
			<div>
				<user-circle-icon class="w-5 h-5 text-white hover:text-secondary" />
			</div>
		</div>
	</nav>
	<!-- categorias resposive -->
	<div
		class="
			bg-primary
			text-white
			p-2
			absolute
			lg:hidden
			top-14
			z-10
			w-full
			opacity-0
			transition-opacity
			duration-200
		"
		id="menuResponsive"
	>
		<ul class="divide-y-2 divide-border">
			<li class="py-2 flex items-center gap-x-1 active:text-secondary">
				<router-link to="#">PlayStation 5</router-link>
				<chevron-right-icon class="w-5 h-5" />
			</li>
			<li class="py-2 flex items-center gap-x-1 active:text-secondary">
				<router-link to="#">PlayStation 4</router-link>
				<chevron-right-icon class="w-5 h-5" />
			</li>
			<li class="py-2 flex items-center gap-x-1 active:text-secondary">
				<router-link to="#">Nintedo Switch</router-link>
				<chevron-right-icon class="w-5 h-5" />
			</li>
		</ul>
	</div>
</template>

<script>
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/solid';
import { SearchIcon, ShoppingBagIcon, UserCircleIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';

export default {
	components: {
		ChevronDownIcon,
		ChevronRightIcon,
		SearchIcon,
		ShoppingBagIcon,
		UserCircleIcon,
		MenuIcon,
		XIcon,
	},

	methods: {
		showInput() {
			const inputSearch = document.getElementById('inputSearch');
			const back = document.querySelector('.back');
			const search = document.querySelector('.search');
			const backPc = document.querySelector('.backPc');
			const searchPc = document.querySelector('.searchPc');

			inputSearch.classList.toggle('opacity-0');
			back.classList.toggle('hidden');
			search.classList.toggle('hidden');
			backPc.classList.toggle('hidden');
			searchPc.classList.toggle('hidden');
		},

		showMenuResponsive() {
			const menuResponsive = document.getElementById('menuResponsive');

			menuResponsive.classList.toggle('opacity-0');
		},
	},
};
</script>

<style lang="">
/* body{
		color: #2e2e2e;
	} */
</style>
