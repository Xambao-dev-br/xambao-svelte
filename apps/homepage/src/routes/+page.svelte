<script lang="ts">
  import { Button } from "m3-svelte";
  import logo from "./assets/logo.png";
</script>
<style>
    #logo {
        width: 50vw;
    }
    #content {
        text-align: center;
    }
</style>

<div id="content">
    <img id="logo" src={logo} alt="Logo do xambão.dev.br"><br />
    <h1>Bem-vindo ao Xambao.dev.br</h1>
    <h2>O site da turma do 1º ano de Info no IFRS-BG</h2>
    <Button size="m" onclick={() => open("/projetos")}>Projetos</Button>
    <Button size="m" onclick={() => alert("funciona!")}>Sobre nós</Button>
</div>