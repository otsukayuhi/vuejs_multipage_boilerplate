/*
* sfc.js
*
*/

// vender
import Vue from 'vue';
import Base from '@/ts/modules/base';
import {template} from '@/ts/modules/template.conf';

// vue components
import cHeader from '@/sfc/components/header.vue';
import cFooter from '@/sfc/components/footer.vue';
import cPage from '@/sfc/pages/sfc.vue';

const BASE = new Base();

const VM = new Vue({
  el: '#l-container',
  template,
  components: {
    cHeader,
    cFooter,
    cPage
  },
  mounted(): void {
    const loading = document.getElementById('l-loading');
    loading.setAttribute('aria-hidden', 'true');
  }
});

BASE.init();