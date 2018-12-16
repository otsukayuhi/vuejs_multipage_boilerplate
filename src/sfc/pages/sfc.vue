<template lang="pug">
//- global settings
include ../../pug/global/global

main.l-main
  .sfc-Mv
    //- picture要素用mixin
    +myPicture('/assets/img/sfc/', '_dummy', 'jpg')

  .l-section
    h2.l-section-ttl {{message}} Page

    ul.sfc-List
      -
        const LIST = [
          {alt: '邪気眼'},
          {alt: '鳥'},
          {alt: '二世'},
          {alt: '相打ち'},
          {alt: 'マッド・サイエンティスト'},
          {alt: 'ガチャ'}
        ];

      each item, i in LIST
        //- 画像遅延読み込み
        //- https://github.com/aFarkas/lazysizes
        li.sfc-Item
          img.lazyload(data-src=`/assets/img/sfc/lazy_00${i+1}.png`, alt=item.alt)
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Log from '@/ts/modules/log';

@Component({})
export default class sfc extends Vue {
  message: string = 'SFC';

  created(): void {
    const LOG = new Log({
      message: this.message
    });
    LOG.init();
  };
}
</script>

<style lang="scss" scoped>
.sfc-Mv {
  img {
    width: 100%;
  }
}

.sfc-List {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  @include breakpoint-up(lg) {
    margin-top: 40px;
  }
}
.sfc-Item {
  width: 48%;
  border-radius: 10px;
  box-shadow:0px 0px 6px 3px #eee;
  @include breakpoint-up(lg) {
    width: 300px;
  }

  &:nth-child(n+3) {
    margin-top: 20px;
    @include breakpoint-up(lg) {
      margin-top: 0;
    }
  }

  &:nth-child(n+4) {
    @include breakpoint-up(lg) {
      margin-top: 20px;
    }
  }
}
</style>