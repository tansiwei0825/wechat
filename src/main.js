import Vue from 'vue'
import App from './App'
import Fly from "flyio/dist/npm/wx"
const fly = new Fly
Vue.prototype.$fly = fly
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()