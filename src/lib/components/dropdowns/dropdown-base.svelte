
<script lang="ts">

  import { language } from "$lib/stores/language.store.ts";
  import type { Languages } from "$lib/types/language";
  import { onMount } from "svelte";

  export let title: Languages;

  onMount(async () => {
    window.addEventListener('click', function(e) {
      document.querySelectorAll('.dropdown').forEach(function(dropdown) {
        if (!dropdown.contains(e.target)) {
          // Click was outside the dropdown, close it
          dropdown.open = false;
        }
      });
    });

    return () => {
    };
  });

</script>

<!-- // alternative way using simple divs
<div class="dropdown">
<div tabindex="0" role="button" class="btn m-1">{title[$language.label]}</div>
  <ul role="tablist" 
    class="dropdown-content menu list-none shadow shadow-2xl bg-base-100 p-2 z-[1] rounded-box">
    <slot></slot>
  </ul>
</div>
-->

<details closed class="dropdown">
  <summary class="m-1 btn">{title[$language.label]}</summary>
  <ul role="tablist" tabindex="0"
    class="dropdown-content menu list-none shadow shadow-2xl bg-base-100 p-2 z-[1] rounded-box">
    <slot></slot>
  </ul>
</details>
