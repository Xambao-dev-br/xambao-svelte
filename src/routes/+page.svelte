<script lang="js">
	import { onMount } from 'svelte';

	let Button = $state();
	let Background = $state();
	let words = [
		'tchê',
		'bah!',
		'mas que bah',
		'é os guri',
		'não tem como',
		'segundo Arnold Schwazenegger',
		'juro pra ti mn',
		'disse Buddha'
	];
	onMount(async () => {
		const module = await import('./background.svelte');
		const m3svelte = await import('$m3/buttons/Button.svelte');
		Button = m3svelte.default;
		Background = module.default;
	});
</script>

<div id="body">
	<div class="bg">
		{#if Background}
			<div class="bg">
				<Background></Background>
			</div>
		{/if}
	</div>
	<div id="content">
		<h1>Bem-vindo ao Xambao.dev.br</h1>
		<h2>O site mais maneiro da Serra Gaúcha, {words[Math.floor(Math.random() * words.length)]}</h2>
		<Button size="m" onclick={() => open('projetos')}>Projetos</Button>
	</div>
</div>

<style>
	#body {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		width: 100%;
		position: relative;
	}
	#content {
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		gap: 32px;
	}
	.bg {
		inset: 0;
		display: block;
		width: 100%;
		height: 100%;
		z-index: -1;
		position: absolute;
	}
</style>
