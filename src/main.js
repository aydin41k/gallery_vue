import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate'

const config = {
	errorBagName: 'ferrors'
}
Vue.use(VeeValidate, config)

Vue.config.productionTip = false

Vue.component('home', {
	template: '<p>This is my new component</p>'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
