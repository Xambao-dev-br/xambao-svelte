<script lang="ts">
	import { Card } from 'm3-svelte';
</script>

<h1 class="bigtext">Projetos</h1>
<div class="maindiv">
	<Card variant="filled" onclick={() => window.open('http://github.com/Xambao-Dev-Br/Mihi')}>
		<p class="heading">Mihi</p>
		<p class="smalltext">Um kernel experimental escrito em C</p>
	</Card>
	<!-- <Card variant="filled" onclick={() => alert('!')}>
		<p class="heading">AuraClicker 2</p>
		<p class="smalltext">Um jogo de clicar escrito em Svelte</p>
		<div class="buttons">
			<Button size="m" onclick={() => open('/auraclicker')}>Abrir na Web</Button>
			<Button
				size="m"
				onclick={() => open('https://https://github.com/Xambao-dev-br/xambao-svelte')}
				>Código Fonte</Button
			>
		</div>
	</Card> -->
	<Card variant="filled" onclick={() => window.open('http://github.com/Xambao-Dev-Br/PySpew')}>
		<p class="heading">Spew</p>
		<p class="smalltext">Uma linguagem de programação</p>
		<div class="buttons"></div>
	</Card>
	<Card
		variant="filled"
		onclick={() => window.open('http://github.com/Xambao-Dev-Br/Xambao-Svelte')}
	>
		<p class="heading">Xambao-Svelte</p>
		<p class="smalltext">O ecossistema Web do Xambão em Svelte</p>
		<div class="buttons"></div>
	</Card>
	<!-- <Card variant="filled" onclick={() => alert('!')}>
		<p class="heading">Auraclicker</p>
		<p class="smalltext">Um jogo de clicar escrito em React</p>
		<div class="buttons">
			<Button size="m" onclick={() => open('https://github.com/Xambao-dev-br/Auraclicker-Legacy')}
				>Código Fonte</Button
			>
		</div>
	</Card> -->
	<!-- <Card variant="filled" onclick={() => alert('!')}>
		<p class="heading">Soordle</p>
		<p class="smalltext">Uma frontend para o Moodle em Svelte</p>
		<div class="buttons">
			<Button size="m" onclick={() => open('https://github.com/Xambao-dev-br/xambao-svelte')}
				>Código Fonte</Button
			>
		</div>
	</Card>
	<Card variant="filled" onclick={() => alert('!')}>
		<p class="heading">NSIGAA</p>
		<p class="smalltext">Uma frontend para o SIGAA em Svelte</p>
		<div class="buttons">
			<Button size="m" onclick={() => open('https://github.com/Xambao-dev-br/xambao-svelte')}
				>Código Fonte</Button
			>
		</div>
	</Card> -->
	<!-- <Card variant="filled" onclick={() => alert('!')}>
		<p class="heading">AuraLive</p>
		<p class="smalltext">Uma rede social escrita em Svelte</p>
		<div class="buttons">
			<Button size="m" onclick={() => open('https://github.com/Xambao-dev-br/xambao-svelte')}
				>Código Fonte</Button
			>
		</div>
	</Card>
	<Card variant="filled" onclick={() => alert('!')}>
		<p class="heading">PopoChat</p>
		<p class="smalltext">O chat oficial do Xambão... em Svelte</p>
		<div class="buttons">
			<Button size="m" onclick={() => open('https://github.com/Xambao-dev-br/xambao-svelte')}
				>Código Fonte</Button
			>
		</div>
	</Card> -->
</div>

<style>
	.maindiv {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 1.5rem;
		width: 100%;
		@media (width < 1200px) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		@media (width < 600px) {
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}
	}
	.heading {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.smalltext {
		font-size: 1.75irem;
	}

	.bigtext {
		font-size: min(8vw, 8vh);
		margin-bottom: 2rem;
		justify-self: center;
	}
	.buttons {
		width: 100%;
		flex-direction: row;
		gap: 16px;
	}
</style>
