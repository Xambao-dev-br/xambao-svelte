<script lang="ts">
	import { Button } from 'm3-svelte';
	import type { PageData } from '../$types';
	let { data }: { data: PageData } = $props();
</script>

<div class="authL">
	<form method="POST">
		<section>
			<label class="authLabel" for="pass">Qual a nova senha: </label>
			<br />
			<input class="authText" type="password" id="pass" name="pass" required />
		</section>
		<section>
			<label class="authLabel" for="rePass">Confirme a nova senha: </label>
			<br />
			<input type="password" name="pass" required class="authText" />
		</section>
		<input type="hidden" name="token" value={data.token} />
		<br />
		<Button type="submit">Mudar minha senha</Button>
	</form>
</div>

<style>
	@import '../style.css';
</style>
