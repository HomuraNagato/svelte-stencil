
<script lang="ts">

  import DropdownItem from "$lib/components/dropdowns/dropdown-item.svelte";
  import { default_langs } from "$lib/components/langs/lang_default_dict.ts";
  import { language, language_options, change_language } from "$lib/stores/language.store.ts";
  import type { Languages } from "$lib/types/language";

  let title_map: Languages = default_langs("中文", "english", "日本語", "한국인");

</script>

<DropdownItem title={title_map} items={language_options} func={change_language}>
</DropdownItem>

