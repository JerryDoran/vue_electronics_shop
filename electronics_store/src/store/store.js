import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalTvCount: 10 // The starting TV inventory
  },

  getters: {
    // Create getters here
  },

  mutations: {
    // Create our agent of change
  },

  actions: {
    // Change initiator
  }
});
