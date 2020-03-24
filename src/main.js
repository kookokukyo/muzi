import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './libs/rem.js'; /* rem布局支持 */
import './assets/reset.css'; /* 初始化基础样式 */
import './assets/border1px.css'; /* 解决部分手机屏幕1像素带来的页面样式兼容性问题 */

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')