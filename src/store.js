import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pagenumber: 0,
  },
  
  getters: {
    checkpagenumber: state => {
      return state.pagenumber
    }
  },

  mutations: {
    CHANGE_PAGENUMBER: (state, newpagenumber) => {
      console.log('CHANGE_PAGENUMBER newpagenumber is: ' + newpagenumber);
      state.pagenumber = newpagenumber;
    }
  },
  actions: {
    changePagenumber: (context, id) => {
      console.log('changePagenumber id is: ' + id);
      context.commit('CHANGE_PAGENUMBER', id)
    }
  }
})
