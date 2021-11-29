<template>
	<the-navbar />

	<slider />

	<btn-up />

	<router-view />
	<the-footer />
</template>

<script>
import TheNavbar from '@/components/layout/TheNavbar.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import BtnUp from '@/components/layout/BtnUp.vue';
import Slider from '@/components/layout/Slider.vue';

export default {
	components: { TheNavbar, TheFooter, BtnUp, Slider },
};
</script>

<style>
html {
	scroll-behavior: smooth;
}
body {
	font-family: 'Ubuntu', sans-serif;
}
</style>
