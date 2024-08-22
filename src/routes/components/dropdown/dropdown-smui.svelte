
<script lang="ts">

  import List, { Item, Separator, Text } from '@smui/list';

  import { default_langs } from "$lib/components/langs/lang_default_dict.ts";
  import { language } from "$lib/stores/language.store.ts";
  import type { Languages } from "$lib/types/language";

  let clicked_ln: Languages = default_langs("还没有", "nothing yet", "まだ何もありません", "아직 아무것도");  // cn, en, jp, kr
  export let clicked = clicked_ln[$language.label];

  const media_ln: Languages = default_langs("媒体", "media", "メデイア", "미디어");
  const anime_ln: Languages = default_langs("日本动画片", "Anime", "アニメ", "일본 애니");
  const kdrama_ln: Languages = default_langs("韩剧", "k-drama", "韓国ドラマ", "한국 드라마");
  
  const list_book_ln = default_langs("图书", "Books", "本", "서적");
  const list_movie_ln = default_langs("电影", "Movies", "映画", "영화 산업");
  const list_tv_ln = default_langs("电视", "TV", "テレビ", "TV");
  let items = [
    { name: list_book_ln, value: "books" },
    { name: list_movie_ln, value: "movies" },
    { name: list_tv_ln, value: "tv" },
  ];

  function on_click(val) {
    clicked = val;
  }

  
</script>

<p>
  <a href="https://sveltematerialui.com/demo/list/">https://sveltematerialui.com/demo/list/</a>
</p>

<List class="dropdown">
  <ul class="menu lg:menu-horizontal bg-base-200 rounded-box items-center">
    <li><Item on:SMUI:action={() => on_click(anime_ln[$language.label])}><Text>{anime_ln[$language.label]}</Text></Item></li>
    <li>
      <details closed>
        <summary>{media_ln[$language.label]}</summary>
        <ul class="z-[1] dropdown-content">
          {#each items as obj}
            <li><Item on:SMUI:action={() => on_click(obj.name[$language.label])}><Text>{obj.name[$language.label]}</Text></Item></li>
          {/each}
          <Separator />
          <li><Item on:SMUI:action={() => on_click(kdrama_ln[$language.label])}><Text>{kdrama_ln[$language.label]}</Text></Item></li>
        </ul>
      </details>
    </li>
    <li><Item on:SMUI:action={() => on_click(kdrama_ln[$language.label])}><Text>{kdrama_ln[$language.label]}</Text></Item></li>
  </ul>
</List>
