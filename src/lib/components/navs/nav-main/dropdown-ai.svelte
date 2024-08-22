
<script lang="ts">

  import DropdownLink from "$lib/components/dropdowns/dropdown-link.svelte";
  import { default_langs } from "$lib/components/langs/lang_default_dict.ts";
  import type { DropDownLink } from "$lib/types/dropdowns";
  import type { Languages } from "$lib/types/language";

  const title_map: Languages = default_langs("人工智能", "AI", "アイ", "아ㅣ")

  const text_map: Languages = default_langs("文本生成", "text generation", "テキストの生成", "텍스트 생성");  // cn, en, jp, kr
  const text: DropDownLink = { text: text_map, link: "/ai/text", label:
                               "page-text-ai" };

  const image_map: Languages = default_langs("图像生成", "image generation", "画像生成", "이미지 생성");  // cn, en, jp, kr
  const image: DropDownLink = { text: image_map, link: "/ai/image", label:
                                "page-text-ai" };

  const news_map: Languages = default_langs("消息", "news", "ニュース", "소식");  // cn, en, jp, kr
  const news: DropDownLink = { text: news_map, link: "/ai/news", label:
                                "page-news-ai" };
  
  const links: DropDownLink[] = [ text, image, news ];

</script>

<DropdownLink title={title_map} links={links}>
</DropdownLink>
