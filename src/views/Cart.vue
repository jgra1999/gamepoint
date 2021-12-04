<template>
	<!-- carrito -->
	<div class="container mx-auto w-container my-20 flex flex-col items-center" id="carrito">
		<div class="flex gap-x-20">
			<div class="py-2 text-3xl text-secondary font-bold uppercase border-b-4 border-secondary">Carrito</div>
			<div class="py-2 text-3xl text-gray-300 font-bold uppercase hidden lg:block">Datos</div>
			<div class="py-2 text-3xl text-gray-300 font-bold uppercase hidden lg:block">Pago</div>
		</div>

		<div class="my-10 overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
			<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div class="overflow-hidden sm:rounded-lg">
					<table class="min-w-full divide-y divide-black">
						<thead>
							<tr>
								<th
									scope="col"
									class="px-6 py-3 text-left text-lg font-medium text-gray-700 uppercase tracking-wider"
								>
									Producto
								</th>
								<th
									scope="col"
									class="px-6 py-3 text-left text-lg font-medium text-gray-700 uppercase tracking-wider"
								>
									Precio
								</th>
								<th
									scope="col"
									class="px-6 py-3 text-left text-lg font-medium text-gray-700 uppercase tracking-wider"
								>
									Unidades
								</th>
								<th scope="col" class="relative px-6 py-3">
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200">
							<tr>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="flex items-center">
										<div class="ml-4">
											<div class="text-lg font-medium text-gray-900">Marvel's Guardians of the Galaxy</div>
											<div class="text-sm text-gray-500">Playstation 5</div>
										</div>
									</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="font-medium">100 $</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<span class="font-medium"> 2 </span>
								</td>
								<td class="px-2 py-4 whitespace-nowrap text-center">
									<button @click="increment(item.id)">
										<plus-icon class="w-5 h-5 mr-5 hover:text-green-500" />
									</button>
									<button @click="decrement(item.id)">
										<minus-icon class="w-5 h-5 hover:text-red-600" />
									</button>
								</td>
							</tr>
							<tr>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="flex items-center">
										<div class="ml-4">
											<div class="text-lg font-medium text-gray-900">GTA Trilogy Remastered</div>
											<div class="text-sm text-gray-500">Nintedo Switch</div>
										</div>
									</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="font-medium">50 $</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<span class="font-medium"> 1 </span>
								</td>
								<td class="px-2 py-4 whitespace-nowrap text-center">
									<button @click="increment(item.id)">
										<plus-icon class="w-5 h-5 mr-5 hover:text-green-500" />
									</button>
									<button @click="decrement(item.id)">
										<minus-icon class="w-5 h-5 hover:text-red-600" />
									</button>
								</td>
							</tr>
						</tbody>
					</table>
					<!-- <div v-if="Object.keys(items).length === 0" class="bg-white text-center py-2">
						No has agregado ningun producto
					</div> -->
					<div class="flex justify-between items-center border-t border-black py-2 px-10 font-medium">
						<div class="text-gray-700">Total productos: 3</div>

						<div class="text-gray-700">Total a pagar: 150 $</div>

						<button class="flex items-center text-red-400 hover:text-red-600 duration-300" @click="clear">
							Vaciar carrito
							<trash-icon class="w-5 h-5" />
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="flex justify-between mt-5 w-full">
			<router-link to="/juegos" class="flex items-center hover:text-secondary duration-300">
				<chevron-left-icon class="w-5 h-5" />
				Seguir comprando
			</router-link>

			<btn text="Siguiente" @click="showDatos" />
		</div>
	</div>
	<!-- datos de cliente -->
	<div class="container mx-auto w-container my-20 flex-col items-center hidden" id="datos">
		<div class="flex gap-x-20">
			<div class="py-2 text-3xl text-secondary font-bold uppercase hidden lg:block">Carrito</div>
			<div class="py-2 text-3xl text-secondary border-b-4 border-secondary font-bold uppercase">Datos</div>
			<div class="py-2 text-3xl text-gray-300 font-bold uppercase hidden lg:block">Pago</div>
		</div>

		<form method="post" class="md:grid md:grid-cols-2 md:gap-4 py-5 px-10 w-full mt-5" id="formulario">
			<div class="flex flex-col" id="input_name">
				<label class="text-lg font-medium">Nombre</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Ingresa tu nombre y apellido"
					class="border-2 w-full p-2 rounded my-3 focus:outline-none"
					required
				/>

				<p class="text-red-600 text-xs hidden">
					Ingresa un nombre valido, el campo nombre solo debe contener letras y no debe contener mas de 45
					caracteres.
				</p>
			</div>

			<div class="flex flex-col" id="input_email">
				<label class="text-lg font-medium">Correo electronico</label>
				<input
					type="text"
					name="email"
					id="email"
					placeholder="Ingresa tu correo electronico"
					class="border-2 border-gray-200 p-2 rounded my-3 focus:outline-none"
					required
				/>

				<p class="text-red-600 text-xs hidden">
					Ingresa un correo electronico valido, el campo email solo puede contener letras, numeros, puntos, guiones
					y guion bajo.
				</p>
			</div>

			<div class="flex flex-col" id="input_address">
				<label class="text-lg font-medium">Dirección</label>
				<input
					type="text"
					name="address"
					id="address"
					placeholder="Ingresa tu dirección"
					class="border-2 border-gray-200 p-2 rounded my-3 focus:outline-none"
					required
				/>

				<p class="text-red-600 text-xs hidden">
					El campo direccion solo debe contener letras y no debe contener mas de 45 caracteres.
				</p>
			</div>

			<div class="flex flex-col" id="input_phone">
				<label class="text-lg font-medium">Télefono</label>
				<input
					type="number"
					name="phone"
					id="phone"
					placeholder="Ingresa tu numero de télefono"
					class="border-2 border-gray-200 p-2 rounded my-3 focus:outline-none"
					required
				/>
				<p class="text-red-600 text-xs hidden">Ingresa un numero de telefono valido.</p>
			</div>
		</form>

		<div class="flex justify-between mt-5 w-full">
			<button class="flex items-center hover:text-secondary duration-300" @click="backCarrito">
				<chevron-left-icon class="w-5 h-5" />
				volver al carrito
			</button>

			<btn text="Siguiente" @click="showMetodos" />
		</div>
	</div>
	<!-- metodos de pago -->
	<div class="container mx-auto w-container my-20 hidden flex-col items-center" id="metodos">
		<div class="flex gap-x-20">
			<div class="py-2 text-3xl text-secondary font-bold uppercase hidden lg:block">Carrito</div>
			<div class="py-2 text-3xl text-secondary font-bold uppercase hidden lg:block">Datos</div>
			<div class="py-2 text-3xl text-secondary border-b-4 border-secondary font-bold uppercase">Pago</div>
		</div>

		<div class="w-full">
			<h5 class="font-medium text-xl">Tu pedido</h5>
			<div class="p-4 font-semibold">
				<div class="flex justify-between py-2 border-b-2">
					<p class="text-gray-400">Producto</p>
					<p class="text-gray-400">Subtotal</p>
				</div>
				<div>
					<ul>
						<li class="py-2">
							<div class="flex justify-between items-center">
								<div class="flex items-center">
									<div>
										<p>Marvel's Guardians of the galaxy <span class="text-sm ml-2 text-red-600">x 2</span></p>
										<p class="text-gray-400 text-xs">Playstation 5</p>
									</div>
								</div>

								<div>
									<p>100 $</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="flex justify-between py-2 border-t-2">
					<p class="text-gray-400">Total a cancelar:</p>
					<p class="text-md">100 $</p>
				</div>
			</div>
		</div>

		<div class="w-full my-2">
			<h5 class="font-medium text-xl">Métodos de Pago</h5>
			<div class="flex gap-x-12 mt-5">
				<div class="flex flex-col">
					<span class="font-semibold">Transferencia Bancaria</span>
					<p class="text-sm font-medium text-gray-500">
						0105-0670-12-0670169242
						<br />
						A nombre de: Carlos Aular
						<br />
						C.I: 24.423.060
					</p>
				</div>
				<div class="flex flex-col">
					<span class="font-semibold">Pago Móvil</span>
					<p class="text-sm font-medium text-gray-500">
						0105-0670-12-0670169242
						<br />
						A nombre de: Carlos Aular
						<br />
						C.I: 24.423.060
					</p>
				</div>
				<div class="flex flex-col">
					<span class="font-semibold">Zelle</span>
					<p class="text-sm font-medium text-gray-500">correo@zelle.com</p>
				</div>
			</div>
		</div>

		<div class="flex justify-between mt-5 w-full">
			<button class="flex items-center hover:text-secondary duration-300" @click="backDatos">
				<chevron-left-icon class="w-5 h-5" />
				volver a los datos
			</button>

			<btn text="Finalizar" />
		</div>
	</div>
</template>

<script>
import { PlusIcon, MinusIcon, TrashIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid';
import Btn from '../components/layout/Btn.vue';

export default {
	components: { PlusIcon, MinusIcon, ChevronLeftIcon, TrashIcon, ChevronRightIcon, Btn },

	methods: {
		backCarrito() {
			//?Esta funcion es para regresar al carrito desde los datos
			const carrito = document.getElementById('carrito');
			const datos = document.getElementById('datos');

			carrito.classList.remove('hidden');
			carrito.classList.add('flex');

			datos.classList.remove('flex');
			datos.classList.add('hidden');
		},
		backDatos() {
			//?Esta funcion es para regresar a los desde los metodos de pago
			const metodos = document.getElementById('metodos');
			const datos = document.getElementById('datos');

			datos.classList.remove('hidden');
			datos.classList.add('flex');

			metodos.classList.remove('flex');
			metodos.classList.add('hidden');
		},
		showDatos() {
			//?Esta funcion es para ir hacias los datos desde el carrito
			const carrito = document.getElementById('carrito');
			const datos = document.getElementById('datos');

			carrito.classList.remove('flex');
			carrito.classList.add('hidden');

			datos.classList.remove('hidden');
			datos.classList.add('flex');
		},
		showMetodos() {
			//?Esta funcion es para ir hacias los metodos de pago desde los datos
			const metodos = document.getElementById('metodos');
			const datos = document.getElementById('datos');

			datos.classList.remove('flex');
			datos.classList.add('hidden');

			metodos.classList.remove('hidden');
			metodos.classList.add('flex');
		},
	},
};
</script>
