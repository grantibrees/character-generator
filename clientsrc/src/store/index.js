import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import { api } from "./AxiosService"

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    user: {},
    cultures: [],
    activeCulture: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setCultures(state, cultures) {
      state.cultures = cultures
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion


    //#region -- BOARDS --
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
    //#endregion


    //#region -- LISTS --



    //#endregion
  }
})
