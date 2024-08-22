
<script lang="ts">

  import DropdownBase from "./dropdown-base.svelte";
  import { language } from "$lib/stores/language.store.ts";
  import type { DropDownItem } from "$lib/types/dropdowns";
  import type { Languages } from "$lib/types/language";

  export let title: Languages;
  export let items: DropDownItem[];
  export let clazz: string;
  export let func = () => {};

</script>

<DropdownBase bind:title={title}>
  {#each items as obj}
    <li role="tab" tabindex="1"
        aria-label={obj.text[$language.label]}
        class="{clazz} btn btn-sm btn-block btn-ghost justify-start"
        on:keypress={() => func(obj)}
        on:click={() => func(obj)}
      >
      {obj.text[$language.label]}
    </li>
  {/each}
</DropdownBase>

