import Vue from 'vue'
import Vuex from 'vuex'

import goBang from './module-goBang'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    goBang
  }
})

export default store
