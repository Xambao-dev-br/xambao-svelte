<script lang="ts">
	import { Button } from 'm3-svelte';
	import { Canvas, T } from '@threlte/core';
	import { Text } from '@threlte/extras';
	import { onMount } from 'svelte';

	let spin = $state(0);
	onMount(() => {
		let frame: number;

		function animate() {
			spin += 0.01;
			frame = requestAnimationFrame(animate);
		}

		animate();
		return () => cancelAnimationFrame(frame);
	});
</script>

<div id="body">
	<div class="bg">
		<Canvas>
			<T.PerspectiveCamera makeDefault position={[0, 0, 5]} />
			<Text
				text="Xambao"
				rotation.x={spin ** 1.15}
				rotation.y={spin * 1.5 ** 2}
				anchorX="center"
				anchorY="middle"
				fontSize={1}
				depth={10}
				position={[0, 0, 0]}
			/>
		</Canvas>
	</div>
	<div class="bg">
		<Canvas>
			<T.PerspectiveCamera makeDefault position={[0, 0, 5]} />
			<Text
				text="Xambao"
				rotation.x={spin ** 1.8}
				rotation.y={spin * 1.15}
				anchorX="center"
				anchorY="middle"
				fontSize={1}
				depth={10}
				position={[0, 0, 0]}
			/>
		</Canvas>
	</div>
	<div class="bg">
		<Canvas>
			<T.PerspectiveCamera makeDefault position={[0, 0, 5]} />
			<Text
				text="Xambao"
				rotation.x={spin * 1.33}
				rotation.y={spin * 2.5 ** 2}
				anchorX="center"
				anchorY="middle"
				fontSize={1}
				depth={10}
				position={[0, 0, 0]}
			/>
		</Canvas>
	</div>
	<div id="content">
		<h1>Bem-vindo ao Xambao.dev.br</h1>
		<h2>O site da turma do 1º ano de Info no IFRS-BG</h2>
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
