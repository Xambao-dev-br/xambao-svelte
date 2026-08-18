<script lang="ts" module>
	import idosaImage from '$lib/assets/idosa.png';
	import miojoImage from '$lib/assets/miojo.jpg';
	import prestigioImage from '$lib/assets/prestigio.png';
	import bergamotaImage from '$lib/assets/bergamota.png';
	export let store = $state({
		aura: 0,
		prestigio: {
			custoBase: 1000,
			multi: 1.15,
			quantidadeImut: 0,
			quantidade: 0,
			imgPath: prestigioImage
		},
		idosa: {
			custoBase: 100,
			multi: 1.1,
			quantidadeImut: 0,
			quantidade: 0,
			quantidadeUniao: 10,
			imgPath: idosaImage
		},
		miojo: {
			custoBase: 600,
			multi: 1.1,
			quantidadeImut: 0,
			quantidade: 0,
			quantidadeUniao: 12,
			imgPath: miojoImage
		},
		bergamota: {
			custoBase: 100,
			multi: 1.1,
			quantidadeImut: 0,
			quantidade: 0,
			quantidadeUniao: 10,
			imgPath: bergamotaImage
		}
	});
</script>
