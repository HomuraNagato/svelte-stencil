
<script lang="ts">

  export let src: String;
  export let title: String = "YouTube video player";
  
</script>

<div class="grid justify-center">
  <iframe  src={src}
           title={title}
           frameborder="0"
           class="w-screen aspect-video px-24 pb-24"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                  gyroscope; picture-in-picture; web-share"
           referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
  </iframe>
</div>

<!--
<video controls class="w-full aspect-video">
  <source src="https://www.youtube.com/embed/N5dr6lNP5ec?si=ivYnRLnj_AMnVWHy"/>
</video>
-->
