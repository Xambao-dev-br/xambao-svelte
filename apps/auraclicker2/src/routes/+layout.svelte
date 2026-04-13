<script lang="ts">
  import { NavCMLX, NavCMLXItem } from "m3-svelte";
  import "../app.css";
  	import iconHome from "@ktibow/iconset-material-symbols/home";
  	import iconPerson from "@ktibow/iconset-material-symbols/person";
	import iconStore from "@ktibow/iconset-material-symbols/build";
  	import { page } from "$app/stores";
  	import { onMount } from "svelte";
let variant: "compact" | "medium" | "large" = $state("compact");
let { children } = $props();
onMount(() => {
  const update = () => {
    if (window.innerWidth >= 1200) variant = "large";
    else if (window.innerWidth >= 600) variant = "medium";
    else variant = "compact";
  };
  update();
  window.addEventListener("resize", update);
  return () => window.removeEventListener("resize", update);
});
  
</script>

<div class="nav">
  <NavCMLX variant={variant}>
    <NavCMLXItem variant={variant} icon={iconHome} text="AuraClicker" selected={$page.url.pathname === "/"} href="/" />
	<NavCMLXItem variant={variant} icon={iconStore} text="Loja" selected={$page.url.pathname === "/loja"} href="/loja" />
    <NavCMLXItem variant={variant} icon={iconPerson} text="Prestigio" selected={$page.url.pathname === "/prestigio"} href="/prestigio" />
  </NavCMLX>
</div>
<div class="main">
  {@render children()}
</div>

<style>
  .main {
    padding: 24px;
    overflow-y: auto;
    flex: 1;
  }
  @media (width >= 37.5rem) {
    .nav {
		display: flex;
		background-color: var(--m3c-surface-container);
      	height: 100dvh;
	  	flex-shrink: 0;
		padding-top: 24px;
		padding-bottom: 24px;
    }
  }

</style>