import Vue from "vue"
import Vuex from "vuex"
import { api } from "../store/AxiosService"
import router from "../router/index"




Vue.use(Vuex)

export default {
  actions: {
    getCultures({ commit, dispatch }) {
      api.get('cultures')
        .then(res => {
          commit('setCultures', res.data)
        })
    },
    addCulture({ commit, dispatch }, cultureData) {
      api.post('cultures', cultureData)
        .then(serverCulture => {
          dispatch('getCultures')
        })
    }
  }
}


