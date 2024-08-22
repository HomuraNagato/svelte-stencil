
<script lang="ts">

  import DropdownLink from "$lib/components/dropdowns/dropdown-link.svelte";
  import { default_langs } from "$lib/components/langs/lang_default_dict.ts";
  import type { DropDownLink } from "$lib/types/dropdowns";
  import type { Languages } from "$lib/types/language";

  const title_map: Languages = default_langs("成分", "Components", "コンポーネント", "구성요소")

  const hero_map: Languages = default_langs("英雄", "hero", "ヒーロー", "영웅");  // cn, en, jp, kr
  const hero: DropDownLink = { text: hero_map, link: "/components/hero", label:
                               "page-hero" };

  const dropdown_map: Languages = default_langs("落下", "dropdown", "落ちる", "쓰러지 다");
  const dropdown: DropDownLink = { text: dropdown_map, link: "/components/dropdown", label:
                                   "page-dropdown" };

  //const tab_map: Languages = default_langs("", "", "", "");
  //const tab: DropDownLink = { text: tab_map, link: "/components/tab", label:
  //                              "page-tab" };
  
  //const toast_map: Languages = default_langs("", "", "", "");
  //const taost: DropDownLink = { text: toast_map, link: "/components/toast", label:
  //                              "page-toast" };
  
  //const links: DropDownLink[] = [ hero, dropdown, tab, toast ];
  const links: DropDownLink[] = [ hero, dropdown ];

</script>

<DropdownLink title={title_map} links={links}>
</DropdownLink>
