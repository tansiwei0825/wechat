import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
    str: '姚辉乾',
    num: 521
}
const getters = {
    getarr1(state) {
        return state.num
    }
}
const actions = {
    search({ commit }, val) {
        commit('search', val)
    }
}
const mutations = {
    search(state, val) {
        console.log(val)
    }
}
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
export default store