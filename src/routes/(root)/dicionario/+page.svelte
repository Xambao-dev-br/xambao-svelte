<div id="container">
	<div class="header">
		<h1>Dicionário e Xambometro</h1>
		<p>O unico dicionario em portugues que NENHUMA nação aprova!!!!!</p>

		<h2>Verbos e ações</h2>
	</div>
	<div class="definition">
		<p class="text-xl">Pocar</p>
		<p class="text">Significa bater com força em algo por estar com raiva.</p>
	</div>
	<div class="definition">
		<p class="text-xl">Azotar</p>
		<p class="text">Chicotear.</p>
	</div>
	<div class="definition">
		<p class="text-xl">Potchar</p>
		<p class="text">Significa fazer sujeira molhada<sup>1</sup> Fazer um potcho<sup>2</sup></p>
	</div>
	<div class="definition">
		<p class="text-xl">Alastrar</p>
		<p class="text">Significa aumentar algo gradualmente; Semelhante ao que fazem na cadeia.</p>
	</div>
	<div class="definition">
		<p class="text-xl">Negrar</p>
		<p class="text">
			Usar marcador permanente do poletto pra pintar algo de preto (geralmente sem consentimento).
		</p>
	</div>
	<div class="header">
		<h2>Termos, palavras usadas e vicios de linguagem</h2>
	</div>
	<div class="definition">
		<p class="text-xl">Xexelento</p>
		<p class="text">Uma coisa nojenta, potchosa.</p>
	</div>
	<div class="definition">
		<p class="text-xl">Leso</p>
		<p class="text">Qual alguem é lesado, burro, pra trás.</p>
	</div>
</div>

<style>
	#container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		@media (width < 600px) {
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}
	}
	.text-xl {
		border: 0;
		padding: 0px 0px 0px 8px;
		margin: 0;
		font-size: 32pt;
	}
	.text {
		border: 0;
		padding: 0px 8px 8px 8px;
		margin: 0;
	}
	.definition {
		display: flex;
		flex-direction: column;
		background-color: var(--m3c-surface-container-highest);
		border-radius: 16px;
		justify-content: start;
		padding: 1rem;
	}
	.definition:hover {
		background-color: var(--m3c-secondary-container);
	}
	.header {
		grid-column: 1 / -1;
	}
</style>
