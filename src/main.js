import Vue from 'vue';
import Test from './components/Test.vue';

var jQuery = require('jquery');
window.$ = jQuery;
window.jQuery = jQuery;
window.Vue = Vue;
// window.$event = require('service/event');
// new Vue(require('views/root.vue'));

new Vue({
  render: (h) => h(Test),
}).$mount('#app');

// require('./components/Test.vue')
