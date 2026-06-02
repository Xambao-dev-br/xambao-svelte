<script lang="ts">
  import { Button } from "m3-svelte";
  import { count, idosas } from "$lib/stores.js"
  function plus(num: number) {
    count.update(n => n + num);
  }
</script>

<h1>Loja</h1>
<p>Aqui você compra coisas</p>

<Button size="m" onclick={() => idosas.update(n => n + 1)}>comprar idosa</Button>
<Button size="m" onclick={() => plus(500)}>+500</Button>