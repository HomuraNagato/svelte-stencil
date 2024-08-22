
<script lang="ts">
  
  export let aria_label="";
  export let clazz = "";
  export let func = () => {};
  export let href = "";
  export let id = "";
  export let value= "";

</script>

<div role="tablist" aria-label="button">
  <a href="{href}">
  <button class="btn btn-neutral {clazz}"
          role="tab" tabindex="0" aria-label="{aria_label ? aria_label : id}" id="{id}"
          on:click={() => func(value)}>
    <slot></slot>
  </button>
  </a>
</div>

