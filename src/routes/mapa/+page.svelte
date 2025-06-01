<script>
	import { tabActive } from '$lib/siteData';
	tabActive.set(6);
	import mapa from '$lib/assets/mapa.png';
</script>

<svelte:head>
	<title>Mapa</title>
</svelte:head>

<center>
	<div class="container-fluid mt-4">
		<img src={mapa} alt="" />
	</div>
</center>

<style>
	img {
		width: 95%;
		height: 90vh;
		object-fit: contain;
	}
</style>
