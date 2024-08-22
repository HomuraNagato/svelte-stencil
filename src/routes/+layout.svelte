
<script lang="ts">

  import '../tailwind.pcss';
  
  // Floating UI for Popups
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  import NavMain from "$lib/components/navs/nav-main/NavMain.svelte";

</script>

<NavMain>
</NavMain>

<div class="prose p-6 max-w-none">
  <slot></slot>
</div>
