import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 150,
    titulo: 'App Aparicio Store'
  },
  mutations: {
    increment (state) {
      state.count = state.count + 10
    },
    decrement (state, payload) {
      state.count = state.count - payload
    }
  },
  actions: {
    abonar({commit}) {
      commit('increment')
    },
    retirar({commit}, cantidad) {
      commit('decrement', cantidad)
    },
    btnaction({commit}) {
        
    }

  },
  modules: {
  }
})
