<script lang="ts">
	import { Button } from 'm3-svelte';
</script>

<div class="authL">
	<form method="POST">
		<section>
			<label class="authLabel" for="username">Qual o e-mail da conta: </label>
			<br />
			<input class="authText" type="email" id="email" name="email" required />
		</section><br>
        <Button type="submit">Mudar minha senha</Button>
	</form>
</div>

<style>
	@import '../style.css';
</style>
