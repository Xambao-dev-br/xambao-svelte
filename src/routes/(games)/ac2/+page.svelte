<script lang="ts">
	import { onMount } from 'svelte';
	import { store } from '$lib/stores.svelte';
	import './styles.css'
	let debug = $state(true);
	let loja: boolean = $state(false);
	function toggleStore() {
			loja = !loja;
	}
	function onKeyUp(tecla: any) {
		tecla.preventDefault();
		switch (tecla.code) {
			case 'Space':
				store.aura++;
				break;
			case 'KeyD':
				debug = !debug;
				break;
			case 'Enter':
				store.aura += 100;
				break;
			case 'Backspace':
				toggleStore();
				break;
		}
	}

	onMount(() => {
		window.addEventListener('keyup', (e) => {
			onKeyUp(e);
		})
		
		if (store.idosa.quantidade > 0) {
			const interval = setInterval(() => {
				store.aura += 1;
			}, 1000 / store.idosa.quantidade);
			return () => clearInterval(interval);
		}
	});

</script>

<div id="content" tabindex="0" role="button">
	<div id="counter" tabindex="-1" role="button" onkeyup={onKeyUp} onclick={() => {store.aura++;}}>
		<h1>{store.aura}</h1>
	</div>

	{#if loja}
	<div class="store zindex-3-center">
		<div class="storeItem">
			<img class="storeImg" src={store.idosa.imgPath} alt="Idosas" />
			<p class="heading">Idosa (quantidade: {store.idosa.quantidade})</p>
			<p class="smalltext">Ela farma um pouco de aura com os bolo maneiro</p>
			<button onclick={() => {store.idosa.quantidade++}}>Comprar(preço: {Math.floor(store.idosa.custoBase * store.idosa.multi ** store.idosa.quantidade)})</button>
		</div>
		<div class="storeItem">
			<img class="storeImg" src={store.miojo.imgPath} alt="Miojo" />
			<p class="heading">Miojo (quantidade: {store.miojo.quantidade})</p>
			<p class="smalltext">Nissin Ourfali</p>
			<button onclick={() => {store.miojo.quantidade++}}>Comprar(preço: {Math.floor(store.miojo.custoBase * store.miojo.multi ** store.miojo.quantidade)})</button>
		</div>
		<div class="storeItem">
			<img class="storeImg" src={store.bergamota.imgPath} alt="Bergamota" />
			<p class="heading">Bergamota (quantidade: {store.bergamota.quantidade})</p>
			<p class="smalltext">Ela farma mais aura ainda codio</p>
			<button onclick={() => {store.bergamota.quantidade++}}>Comprar(preço: {Math.floor(store.bergamota.custoBase * store.bergamota.multi ** store.bergamota.quantidade)})</button>
		</div>
		<div class="storeItem">
			<img class="storeImg" src={store.prestigio.imgPath} alt="Prestigio" />
			<p class="heading">Prestigio (quantidade: {store.prestigio.quantidade})</p>
			<p class="smalltext">Tu meio que renasce? Sei lá.</p>
			<button onclick={() => {store.prestigio.quantidade++}}>Comprar(preço: {Math.floor(store.prestigio.custoBase * store.prestigio.multi ** store.prestigio.quantidade)})</button>
		</div>
	</div>
	{/if}

	{#if debug}
		<div class="debug zindex-2">
			<p>Idosas: {store.idosa.quantidade}</p>
			<p>Miojos: {store.miojo.quantidade}</p>
			<p>Prestigios: {store.prestigio.quantidade}</p>
			<p>Bergamotas: {store.bergamota.quantidade}</p>
			<p>Loja: {loja}</p>
		</div>
	{/if}
</div>

