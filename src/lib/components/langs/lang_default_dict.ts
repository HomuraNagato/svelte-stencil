
import type { Languages } from "$lib/types/language";

function default_langs(cn?: string, en?: string, jp?: string, kr?: string) {

  let d: Languages = {
    cn: "chinese not found",
    en: "content not found",
    jp: "wakaranai",
    kr: "korean not found"
  };
  if( cn !== undefined && cn !== "" ) {
    d.cn = cn;
  }
  if( en !== undefined && en !== "" ) {
    d.en = en;
  }
  if( jp !== undefined && jp !== "" ) {
    d.jp = jp;
  } 
  if( kr !== undefined && kr !== "" ) {
    d.kr = kr;
  } 
  return d;
}

export { default_langs };
