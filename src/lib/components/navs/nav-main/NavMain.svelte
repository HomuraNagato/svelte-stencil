
<script lang="ts">

  import Button from "$lib/components/buttons/button.svelte";
  import ThemeIconToggle from "$lib/components/themes/theme-icon-toggle.svelte";
  import { default_langs } from "$lib/components/langs/lang_default_dict.ts";
  import { language } from "$lib/stores/language.store.ts";
  import type { Languages } from "$lib/types/language";

  import DropdownMedia from "./dropdown-media.svelte";
  //import DropdownAI from "./dropdown-ai.svelte";
  import DropdownComponents from "./dropdown-components.svelte";
  import Language from "./language.svelte";
  import UserIcon from "./user-icon.svelte";

  let home_map: Languages = default_langs("家", "home", "ホーム", "집");  // cn, en, jp, kr
  $: home = home_map[$language.label];
  
</script>

<nav aria-label="nav-bar"
     class="navbar bg-base-200 sticky top-0 z-50 p-0">

  <div aria-label="navbar-start"
    class="navbar-start">
    <Button href="/" id="nav-home"  clazz="mr-4">{home}</Button>
  </div>

  <div aria-label="navbar-center"
       class="navbar-center">
    <ul class="menu lg:menu-horizontal items-center">
      <li><DropdownMedia></DropdownMedia></li>
      <li><DropdownComponents></DropdownComponents></li>
    </ul>
  </div>

  <div aria-label="navbar-end"
       class="navbar-end">
    <Language></Language>
    <ThemeIconToggle></ThemeIconToggle>
    <div class="p-2"></div>
    <UserIcon></UserIcon>
  </div>

</nav>
