<script lang="ts">
  import { Button } from "m3-svelte";
  import logo from "./assets/logo.png";
  import { count } from '$lib/stores.js';

  function handleClick() {
    count.update(n => n + 1);
  }
</script>
<style>
    #logo {
        width: 50vw;
    }
    #content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    min-height: 100vh;
}
</style>

<div id="content">
    <img id="logo" src={logo} alt="Logo do xambão.dev.br"><br />
    <h1>Auraclicker 2</h1>
    <h2>O segundo jogo sobre farmar aura</h2>
    <Button size="xl" onclick={handleClick}>{$count}</Button>
</div>