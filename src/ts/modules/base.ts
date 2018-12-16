// vender
import webfont from "webfontloader";
import "picturefill";
import 'lazysizes';
import 'svgxuse';

// styles
import '@/scss/global/global';
import '@/scss/layouts/layouts';


class Base {
  init() {
    // web fontsの遅延読み込み
    webfont.load({
      google: {families: ['Noto Sans JP']}
    });
  }
};

export default Base;