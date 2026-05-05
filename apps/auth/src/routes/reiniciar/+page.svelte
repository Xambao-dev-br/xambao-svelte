<script lang="ts">
	import { Button } from 'm3-svelte';
	import type { PageData } from '../$types';
	let { data }: { data: PageData } = $props();
	let password: string = $state('');
	let rePassword: string = $state('');
	let isSame: boolean = $derived(password === rePassword);
</script>

<div class="authL">
	<form method="POST">
		<section>
			<label class="authLabel" for="pass">Qual a nova senha: </label>
			<br />
			<input class="authText" type="password" id="pass" name="pass" bind:value={password} required />
		</section>
		<section>
			<label class="authLabel" for="rePass">Confirme a nova senha: </label>
			<br />
			<input type="password" name="rePass" required class="authText" bind:value={rePassword}/>
		</section>
		<input type="hidden" name="token" value={data.token} />
		<br />
		<Button type="submit">Mudar minha senha</Button>
	</form>
	<p class="red">{isSame ? "" : "As duas senhas devem coincidir."}</p>
</div>

<style>
	@import '../style.css';
</style>
