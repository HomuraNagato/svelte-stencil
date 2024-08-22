
<script lang="ts">

  import DropdownBase from "./dropdown-base.svelte";
  import { language } from "$lib/stores/language.store.ts";
  import type { DropDownLink } from "$lib/types/dropdowns";
  import type { Languages } from "$lib/types/language";

  export let title: Languages;
  export let links: DropDownLink[];
  export let clazz: string;

</script>

<DropdownBase title={title}>
  {#each links as obj}
    <li role="tab" tabindex="1"
        aria-label={obj.label}
        class="{clazz}"
      >
      <a href={obj.link}
         class="highlight">
        {obj.text[$language.label]}
      </a>
    </li>
  {/each}
</DropdownBase>

