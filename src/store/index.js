import Vue from "vue";
import Vuex from "vuex";
import state from "./state.js";
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
});
