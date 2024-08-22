
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
        aria-label={obj.label}
        on:keypress={() => func(obj)}
      on:click={() => func(obj)}
      class=""
      >      <label for={obj.text[$language.label]}  class="justify-start">
        <input type="radio" name={title[$language.label]} id={obj.text[$language.label]}
               class="{clazz} btn btn-sm btn-ghost"
               value={obj.text[$language.label]} />{obj.text[$language.label]}   </label>

    </li>
  {/each}
</DropdownBase>
