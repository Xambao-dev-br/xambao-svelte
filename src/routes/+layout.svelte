<script lang="ts">
	import iconHome from '@ktibow/iconset-material-symbols/home';
	import iconPerson from '@ktibow/iconset-material-symbols/person';
	import iconBuild from '@ktibow/iconset-material-symbols/build';
	import iconStore from '@ktibow/iconset-material-symbols/store';
	import iconArrowBack from '@ktibow/iconset-material-symbols/arrow-back';
	import iconMail from '@ktibow/iconset-material-symbols/mail';
	import iconBook from '@ktibow/iconset-material-symbols/book';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { NavCMLX, NavCMLXItem } from 'm3-svelte';
	import '../app.css';
	let variant: 'compact' | 'medium' | 'large' = $state('compact');
	let { children } = $props();

	onMount(() => {
		const mediaQuery = window.matchMedia('(min-width: 840px)');
		const handleLayoutChange = (e: MediaQueryListEvent | MediaQueryList) => {
			variant = e.matches ? 'large' : 'compact';
		};
		handleLayoutChange(mediaQuery);
		mediaQuery.addEventListener('change', handleLayoutChange);
		return () => mediaQuery.removeEventListener('change', handleLayoutChange);
	});
</script>

{#if ['/', '/projetos', '/sobrenos', '/dicionario', '/blog'].includes(page.url.pathname)}
	<!-- BAGULHO PRINCIPAL APOCAR -->
	<div class="nav">
		<NavCMLX {variant}>
			<NavCMLXItem
				{variant}
				icon={iconHome}
				text="Home"
				selected={page.url.pathname === '/'}
				href="/"
			/>
			<NavCMLXItem
				{variant}
				icon={iconBuild}
				text="Projetos"
				selected={page.url.pathname === '/projetos'}
				href="/projetos"
			/>
			<NavCMLXItem
				{variant}
				icon={iconPerson}
				text="Sobre Nós"
				selected={page.url.pathname === '/sobrenos'}
				href="/sobrenos"
			/>
			<NavCMLXItem
				{variant}
				icon={iconBook}
				text="Dicionario"
				selected={page.url.pathname === '/dicionario'}
				href="/dicionario"
			/>
			<NavCMLXItem
				{variant}
				icon={iconMail}
				text="Blog"
				selected={page.url.pathname === '/blog'}
				href="/blog"
			/>
		</NavCMLX>
	</div>
{/if}
{#if ['/auraclicker', '/auraclicker/loja', '/auraclicker/prestigio'].includes(page.url.pathname)}
	<div class="nav">
		<NavCMLX {variant}>
			<NavCMLXItem
				{variant}
				icon={iconHome}
				text="AuraClicker"
				selected={page.url.pathname === '/auraclicker'}
				href="/auraclicker"
			/>
			<NavCMLXItem
				{variant}
				icon={iconStore}
				text="Loja"
				selected={page.url.pathname === '/auraclicker/loja'}
				href="/auraclicker/loja"
			/>
			<NavCMLXItem
				{variant}
				icon={iconPerson}
				text="Prestigio"
				selected={page.url.pathname === '/auraclicker/prestigio'}
				href="/auraclicker/prestigio"
			/>
		</NavCMLX>
	</div>
{/if}
{#if page.url.pathname.startsWith('/sobrenos/')}
	<div class="nav">
		<NavCMLX {variant}>
			<NavCMLXItem
				{variant}
				icon={iconArrowBack}
				text="Voltar"
				selected={page.url.pathname === '/sobrenos'}
				href="/sobrenos"
			/>
			<NavCMLXItem
				{variant}
				icon={iconPerson}
				text="Lilo"
				selected={page.url.pathname === '/sobrenos/lilo'}
				href="/sobrenos/lilo"
			/>
			<NavCMLXItem
				{variant}
				icon={iconPerson}
				text="Leo"
				selected={page.url.pathname === '/sobrenos/leo'}
				href="/sobrenos/leo"
			/>
		</NavCMLX>
	</div>
{/if}

{#if page.url.pathname.startsWith('/blog/')}
	<div class="nav">
		<NavCMLX {variant}>
			<NavCMLXItem {variant} icon={iconArrowBack} text="Voltar" selected={false} href="/blog" />
		</NavCMLX>
	</div>
{/if}
<div class="main">
	{@render children()}
</div>

<style>
	.main {
		padding: 24px;
		overflow-y: auto;
		flex: 1;
	}
	@media (width >= 840px) {
		.nav {
			display: flex;
			background-color: var(--m3c-surface-container);
			height: 100dvh;
			flex-shrink: 0;
			padding-top: 24px;
			padding-bottom: 24px;
		}
	}
</style>
