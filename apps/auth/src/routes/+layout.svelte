<script lang="ts">
	import { NavCMLX, NavCMLXItem } from 'm3-svelte';
	import '../app.css';
	import iconHome from '@ktibow/iconset-material-symbols/home';
	import iconPerson from '@ktibow/iconset-material-symbols/person';
	import iconBuild from '@ktibow/iconset-material-symbols/build';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let variant: 'compact' | 'medium' | 'large' = $state('compact');
	let { children } = $props();
	onMount(() => {
		const update = () => {
			if (window.innerWidth >= 1200) variant = 'large';
			else if (window.innerWidth >= 600) variant = 'compact';
			else variant = 'compact';
		};
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	});
</script>

<div class="nav">
	<NavCMLX {variant}>
		<NavCMLXItem
			{variant}
			icon={iconHome}
			text="Login"
			selected={$page.url.pathname === '/'}
			href="/"
		/>
		<NavCMLXItem
			{variant}
			icon={iconBuild}
			text="Cadastro"
			selected={($page.url.pathname as string) === '/cadastro'}
			href="/cadastro"
		/>
	</NavCMLX>
</div>
<div class="main">
	{@render children()}
</div>

<style>
	:global(body) {
		height: 100dvh;
		overflow: hidden;
		margin: 0;
	}

	.main {
		padding: 24px;
		overflow-y: auto;
		height: 100dvh;
		box-sizing: border-box;
		width: 100vw;
	}


	@media (width < 37.5rem) {
		.main {
			padding-bottom: 80px;
		}
		.nav {
			flex-direction: column;
		}
	}

	@media (width >= 37.5rem) {
		.nav {
			position: fixed;
			left: 0;
			top: 0;
			height: 100dvh;
			width: 80px;
			background-color: var(--m3c-surface-container);
		}

		.main {
			margin-left: 80px;
			max-width: calc(100% - 80px);
		}
	}
</style>
