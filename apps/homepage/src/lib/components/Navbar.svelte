<!-- src/lib/components/Navbar.svelte -->
<script lang="ts">
  import { NavCMLX, NavCMLXItem } from "m3-svelte";
  import { page } from "$app/stores";
  import iconHome from "@ktibow/iconset-material-symbols/home";
  import iconInfo from "@ktibow/iconset-material-symbols/info";
</script>

<NavCMLX variant="auto">
  <NavCMLXItem
    variant="auto"
    icon={iconHome}
    text="Home"
    selected={$page.url.pathname === "/"}
    href="/"
  />
  <NavCMLXItem
    variant="auto"
    icon={iconInfo}
    text="Sobre"
    selected={$page.url.pathname === "/sobre"}
    href="/sobre"
  />
</NavCMLX>