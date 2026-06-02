<script lang="ts">
  import { Button } from "m3-svelte";
  import { count, idosas } from '$lib/stores.js';
  const debug = true;
  function handleClick() {
    count.update(n => n + 1);
  }
</script>
<style>
    #content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
}
  .flex-top {
    justify-self: 0px 0px;
  }
</style>

<div id="content">

    <p class="flex-top">Auraclicker 2</p>
    <h1>{$count}</h1>
    <Button size="l" onclick={handleClick}>Click!</Button>
    {#if (debug)}
    <p>{$idosas}</p>
    {/if}
</div>