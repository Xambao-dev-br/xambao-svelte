<script lang="ts">
  import { Button } from "m3-svelte";
  import { count } from "$lib/stores.js"
  function plus(num: number) {
    count.update(n => n + num);
  }
</script>

<h1>Loja</h1>
<p>Aqui você compra coisas</p>

<Button size="m" onclick={() => plus(50)}>+50</Button>
<Button size="m" onclick={() => plus(500)}>+500</Button>