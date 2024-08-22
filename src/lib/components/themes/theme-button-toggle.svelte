
<script lang="ts">

  import { browser } from '$app/environment';

  let isDarkMode = true;

  $: if (browser) {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }
</script>

<form>
  <input type="checkbox" value={isDarkMode ? "autumn" : "luxury"} name="themetoggle" class=" toggle theme-controller ml-4" />
</form>
