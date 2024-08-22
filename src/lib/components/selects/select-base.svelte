
<script lang="ts">

  export let clazz: string;
  export let func = () => {};
  export let items;
  export let selected: string;
  export let width: string = "init";

  const width_map = {
    "init": "",
    "full": "w-full max-w-xs"
  }

</script>

<select class="select select-accent {width_map[width]} {clazz}"
        bind:value={selected}
        on:change={func}>
  {#each Object.entries(items) as [k, v]}
    <option value={k}>{v}</option>
  {/each}
</select>
