
import { persisted } from 'svelte-persisted-store'
import  { default_langs } from "$lib/components/langs/lang_default_dict.ts";
import type { DropDownItem } from "$lib/types/language";

// when the language changes, the display for available languages should still
// be consistent, thus the repetitive text
const cn: DropDownItem = { label: "cn", text: default_langs("中文", "中文", "中文", "中文")};
const en: DropDownItem = { label: "en", text: default_langs("english", "english", "english", "english")};
const jp: DropDownItem = { label: "jp", text: default_langs("日本語", "日本語", "日本語", "日本語")};
const kr: DropDownItem = { label: "kr", text: default_langs("한국인", "한국인", "한국인", "한국인")};

/*
const languages = {
  options: [cn, en, jp, kr],
  selected: jp,
  }
*/
export const language_options: DropDownItem[] = [cn, en, jp, kr];

export const language = persisted("language", jp);
//language.set(jp);  // to set default if necessary

export function change_language(lang) {
  /*
  language.update(languages => {
    return { ...languages, ["selected"]: lang };
    })
  */
  language.set(lang);
}
