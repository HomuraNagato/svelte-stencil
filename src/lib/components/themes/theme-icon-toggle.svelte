
<script lang="ts">

  import { onMount } from "svelte";

  import Sun from "./sun.svelte";
  import Moon from "./moon.svelte";

  // identify system's light/dark mode, use correct icon to match mode
  let dark_mode = false;
  $: moon_swap = dark_mode ? "swap-off" : "swap-on";
  $: sun_swap = dark_mode ?  "swap-on" : "swap-off";
  $: theme = dark_mode ? "autumn" : "forest";

  onMount(() => {
    dark_mode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

</script>

<label class="swap swap-rotate">
  
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" class="hidden theme-controller" value={theme} />

  <Moon swap={moon_swap}></Moon>
  <Sun swap={sun_swap}></Sun>

</label>
