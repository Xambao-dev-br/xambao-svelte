<script lang="ts">
	import { Button } from 'm3-svelte';
</script>

<div class="authL">
	<form method="POST">
		<section>
			<label class="authLabel" for="username">Nome de usuário:</label>
			<br />
			<input class="authText" type="text" id="username" name="user" required />
		</section>
		<section>
			<label for="password" class="authLabel">Senha:</label>
			<br />
			<input type="password" name="password" id="pass" class="authText" required />
		</section>
		<Button type="submit" id="Enviar">Entrar na conta</Button>
	</form>
</div>
<p class="cadastro"><a href="esqueci">Esqueci minha senha</a></p>
<p class="cadastro"><a href="cadastro">Não tem conta? Criar conta aqui</a></p>

<style>
	@import './style.css';
</style>
