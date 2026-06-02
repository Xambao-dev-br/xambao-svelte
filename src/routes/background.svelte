<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import { Text } from '@threlte/extras';
	let spin: number = $state(0);
	let frame: number;
	import { onMount } from 'svelte';
	onMount(() => {
		function animate() {
			spin += 0.01;
			frame = requestAnimationFrame(animate);
		}

		animate();
		return () => cancelAnimationFrame(frame);
	});
</script>

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
