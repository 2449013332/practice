import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index';
//引入图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/erro.png'), // 加载失败或者无资源时显示的图片
  loading: require('./assets/loading.png'), // loading图片，未加载时显示的
  attempt: 1
})

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App),
})
