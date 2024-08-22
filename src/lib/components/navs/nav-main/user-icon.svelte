
<script lang="ts">

  import Button from "$lib/components/buttons/button.svelte";
  import { default_langs } from "$lib/components/langs/lang_default_dict.ts";
  import { language } from "$lib/stores/language.store.ts";
  
  let user_map = default_langs("用户", "user", "ユーザー", "사용자");
  $: user = user_map[$language.label];

</script>

<Button id="user-icon" clazz="btn-circle mr-4">{user}</Button>
