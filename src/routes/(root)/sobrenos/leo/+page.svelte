<div id="body">
	<div class="container">
		<h1>Sobre mim (leo)</h1>
		<p>Sou um programador da serra gaúcha e um fã de Svelte</p>

		<h2>Eu gosto de:</h2>

		<p class="list">Linux (especialmente baseados em RHEL)</p>
		<p class="list">Minecraft e Doom</p>
		<p class="list">Jamiroquai, Tally Hall e Kanye West</p>
		<p class="list">How I Met Your Mother</p>
		<p class="list">Commodore 64, z/OS, Commodore AMIGA, 486s e UNIX (especialmente)</p>
		<h2>Outros fatos sobre mim</h2>
		<p class="list">Eu odeio trabalhar com Windows</p>
		<p class="list">Eu nao gosto de coisa codigo fechado</p>
		<p class="list">Sou católico</p>
		<p class="list">Eu prefiro kanye</p>
	</div>
	<iframe
		title="Musica"
		src="https://bandcamp.com/EmbeddedPlayer/album=3066754014/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/track=876275684/transparent=true/"
		seamless
		><a href="https://theequasi.bandcamp.com/album/featuring-birds">Featuring Birds by Quasi</a
		></iframe
	>
</div>

<style>
	* {
		border: 0;
		margin: 0;
		padding: 0;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		height: 100%;
		width: 100%;
	}
	#body {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		width: 100%;
		position: relative;
	}
	.list {
		margin: 0;
		border: 0;
		padding: 0;
	}
	iframe {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
		border: 0;
		width: 700px;
		height: 42px;
		@media (width < 840px) {
			width: 70%;
		}
	}
</style>
