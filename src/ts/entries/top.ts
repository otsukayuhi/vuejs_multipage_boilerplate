/*
* top.js
*
*/

// vender
import Vue from 'vue';
import Base from '@/ts/modules/base';

// vue components
import cHeader from '@/sfc/components/header.vue';
import cFooter from '@/sfc/components/footer.vue';
import Log from '@/ts/modules/log';

// page styles
import '@/scss/pages/top.scss';

const BASE = new Base();
const LOG = new Log({
  message: 'top'
});

const VM = new Vue({
  el: '#l-container',
  components: {
    cHeader,
    cFooter
  },
  mounted(): void {
    const loading = document.getElementById('l-loading');
    loading.setAttribute('aria-hidden', 'true');
  }
});

BASE.init();
LOG.init();