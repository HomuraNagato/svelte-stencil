
import type { Config } from 'tailwindcss';
import daisyui from "daisyui";
import forms from '@tailwindcss/forms';
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin'
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,md,svelte,svx,ts}'],
  theme: {
    extend: {
      colors: {
        "caffe-purple": "#EEDBFE",
        "caffe-dark-purple": "#B45FFB",
        "caffe-yellow": "#FFF0CE",
        "caffe-light-pink": "#FFCEF6",
        "caffe-hot-pink": "#FF69B4",
        "caffe-light-blue": "#F0FAFF",
        "caffe-light-grey": "#FAFAFA",
        "caffe-medium-grey": "#ECECEC",
        "caffe-dark-grey": "#D2D2D2",
      },
    },
  },
  daisyui: {
    // light: autumn, cupcake, emerald, garden
    // dark: coffee, forest, luxury
    themes: ["autumn", "cupcake", "emerald", "garden",
             "coffee", "forest", "luxury", "light", "pastel", "winter"],
    darkTheme: "forest",
  },
  plugins: [
    forms,
    typography,
    daisyui,
    skeleton({
      themes: { preset: [ "wintry" ] }
    }),
  ],
  
} satisfies Config;
