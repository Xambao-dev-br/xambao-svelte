<script lang="ts">
	import { RandomOrgClient } from '@randomorg/core';
	type dice = {
		tipo: number;
		quant: number;
	};
	const tipos = [4, 6, 8, 10, 12, 20, 100];
	let diceMap = $state<Record<string, dice>>(
		Object.fromEntries(tipos.map((t) => [`d${t}`, { tipo: t, quant: 0 }]))
	);
	let resultado: number = $state(0);
	let erro: string = $state('');
	let carregando = $state(false);
	const rollD = async function (d: dice) {
		if (d.quant === 0) return;
		try {
			const res = await fetch(`/roll?quant=${d.quant}&tipo=${d.tipo}`);
			const data = await res.json();
			resultado += data.resultado;
		} catch (e) {
			erro = `Erro: ${e}`;
		}
	};
	function diceU(d: dice) {
		d.quant++;
	}
	function diceD(d: dice) {
		if (d.quant > 0) {
			d.quant--;
		}
	}

	const rollAll = async () => {
		resultado = 0;
		carregando = true;
		try {
			await Promise.all(Object.values(diceMap).map((d: dice) => rollD(d)));
		} catch (e) {
			erro = `erro: ${e}`;
		} finally {
			for (const key in diceMap) {
				diceMap[key].quant = 0;
			}
			carregando = false;
		}
	};
</script>

<div>
	<p class="inline">D4</p>
	<button class="plus" onclick={() => diceU(diceMap.d4)}>+</button>
	<button class="minus" onclick={() => diceD(diceMap.d4)}>-</button>
	<p class="inline">{diceMap.d4.quant}</p>
</div>
<div>
	<p class="inline">D6</p>
	<button class="plus" onclick={() => diceU(diceMap.d6)}>+</button>
	<button class="minus" onclick={() => diceD(diceMap.d6)}>-</button>
	<p class="inline">{diceMap.d6.quant}</p>
</div>
<div>
	<p class="inline">D8</p>
	<button class="plus" onclick={() => diceU(diceMap.d8)}>+</button>
	<button class="minus" onclick={() => diceD(diceMap.d8)}>-</button>
	<p class="inline">{diceMap.d8.quant}</p>
</div>
<div>
	<p class="inline">D10</p>
	<button class="plus" onclick={() => diceU(diceMap.d10)}>+</button>
	<button class="minus" onclick={() => diceD(diceMap.d10)}>-</button>
	<p class="inline">{diceMap.d10.quant}</p>
</div>
<div>
	<p class="inline">D12</p>
	<button class="plus" onclick={() => diceU(diceMap.d12)}>+</button>
	<button class="minus" onclick={() => diceD(diceMap.d12)}>-</button>
	<p class="inline">{diceMap.d12.quant}</p>
</div>
<div>
	<p class="inline">D20</p>
	<button class="plus" onclick={() => diceU(diceMap.d20)}>+</button>
	<button class="minus" onclick={() => diceD(diceMap.d20)}>-</button>
	<p class="inline">{diceMap.d20.quant}</p>
</div>
<div>
	<p class="inline">D100</p>
	<button class="plus" onclick={() => diceU(diceMap.d100)}>+</button>
	<button class="minus" onclick={() => diceD(diceMap.d100)}>-</button>
	<p class="inline">{diceMap.d100.quant}</p>
</div>

<div class="rolar">
	<button class="rollA" onclick={() => rollAll()} disabled={carregando}>Girar Todos</button>
	<p>{carregando ? '...' : resultado}</p>
</div>

<style>
	@import './style.css';
</style>
