
<script lang="ts">

  import DropdownInput from "$lib/components/dropdowns/dropdown-input.svelte";
  import { default_langs } from "$lib/components/langs/lang_default_dict.ts";
  import type { DropDownItem } from "$lib/types/dropdowns";
  import type { Languages } from "$lib/types/language";

  // key is internal for any mappings, value is shown as option
  const autumn: DropDownItem = {
    label: "autumn",
    text: default_langs("autumn", "autumn", "autumn", "autumn") };
  const cupcake: DropDownItem = {
    label: "cupcake",
    text: default_langs("cupcake", "cupcake", "cupcake", "cupcake") };
  const emerald: DropDownItem = {
    label: "emerald",
    text: default_langs("emerald", "emerald", "emerald", "emerald") };
  const garden: DropDownItem = {
    label: "garden",
    text: default_langs("garden", "garden", "garden", "garden") };
  const coffee: DropDownItem = {
    label: "coffee",
    text: default_langs("coffee", "coffee", "coffee", "coffee") };
  const forest: DropDownItem = {
    label: "forest",
    text: default_langs("forest", "forest", "forest", "forest") };
  const luxury: DropDownItem = {
    label: "luxury",
    text: default_langs("luxury", "luxury", "luxury", "luxury") };
  const themes: DropDownItem[] = [ autumn, cupcake, emerald, garden, coffee, forest, luxury ];

  let selected_item: Languages = themes[0].text;
  let display_item = themes[0].text;

  function change_title(obj) {
    selected_item = obj.text;
  }

</script>

<DropdownInput bind:title={selected_item} items={themes}
              func={change_title}
              clazz={"theme-controller"}>
</DropdownInput>
