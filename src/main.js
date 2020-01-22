import Vue from 'vue'
import App from './App.vue'
import Main from './routes/Main'
import Login from './routes/Login'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: './App', name: 'App', component: App},
    { path: './routes/Login', name: 'Login', component: Login },
    { path: './routes/Main', name: 'Main', component: Main }
  ]
})
new Vue({
  router,
  render: h => h(App)

}).$mount('#app')
