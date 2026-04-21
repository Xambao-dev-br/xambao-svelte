<script lang="ts">
	import { Button } from 'm3-svelte';
	let password: string = $state('');
	let rePassword: string = $state('');
	let isSame: boolean = $derived(password === rePassword);
	let { form } = $props();
	$effect(() => {
		if (form?.message) {
			window.alert(form.message);
		}
	});
</script>

<div class="authL">
	<form method="POST">
		<section>
			<label for="username">Nome de usuário:</label><br />
			<input type="text" name="username" required class="authText" />
		</section>
		<section>
			<label for="email">E-mail(garanta que o e-mail está correto):</label><br />
			<input type="email" name="email" class="authText" />
		</section>
		<section>
			<label for="password">Senha:</label><br />
			<input type="password" name="password" class="authText" bind:value={password} />
		</section>
		<section>
			<label for="rePassword">Confirme sua senha:</label><br />
			<input type="password" name="rePassword" class="authText" bind:value={rePassword} />
		</section>
		<p class="red">{!isSame ? 'A senha nos dois campos deve ser a mesma!' : ''}</p>
		<Button type="submit">Criar conta</Button>
	</form>
</div>

<p class="cadastro"><a href="cadastro">Tenho uma conta: entrar aqui!</a></p>

<style>
	@import '../style.css';
</style>
