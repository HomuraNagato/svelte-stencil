
<script lang="ts">

  import DropdownLink from "$lib/components/dropdowns/dropdown-link.svelte";
  import { default_langs } from "$lib/components/langs/lang_default_dict.ts";
  import type { DropDownLink } from "$lib/types/dropdowns";
  import type { Languages } from "$lib/types/language";

  const title_map: Languages = default_langs("媒体", "media", "メデイア", "미디어");  // cn, en, jp, kr

  const video_map: Languages = default_langs("视频", "video", "ビデオ", "동영상");
  const video: DropDownLink = { text: video_map, link: "/media/video", "label":
                                "page-video" };

  const radio_map: Languages = default_langs("收音机", "radio", "ラジオ", "라디오");
  const radio: DropDownLink = { text: radio_map, link: "/media/radio", "label":
                                "page-radio" };

  const image_map: Languages = default_langs("图像", "image", "画像", "심상");
  const images: DropDownLink = { text: image_map, link: "/media/images", "label":
                                "page-images" };
  
  const links: DropDownLink[] = [ video, radio, images ];

</script>

<DropdownLink title={title_map} links={links}>
</DropdownLink>
