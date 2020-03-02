import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design';
import store from './store/index';
import 'view-design/dist/styles/iview.css';


// 全局注册viewUI内所有组件
Vue.use(ViewUI);
Vue.config.productionTip = false

// 把store注入到vue实例中
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

