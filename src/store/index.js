import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: null,
    currentCountry: null,
    darkMode: false,
  },
  mutations: {
    setCountries: function (state, value) {
      state.countries = value;
    },
    setByRegion: function (state, value) {
      state.countries = value;
    },
    toggleDarkMode: function (state) {
      state.darkMode = !state.darkMode;
      document.body.backgroundColor = state.darkMode ? '#343a40' : '';
      document.body.color = state.darkMode ? 'white' : '';
    },
    searchCountries: function (state, value) {
      state.countries = state.countries.filter(elem => elem.name.toLowerCase().startsWith(value))
    }
  },
  getters: {
    currentCountry: function (state) {
      return state.currentCountry;
    },
    countries: function (state) {
      return state.countries;
    },
    darkMode: function (state) {
      return state.darkMode;
    }
  },
  actions: {
    callCountries: function ({
      commit
    }) {
      axios.get("https://restcountries.com/v2/all").then((response) => {
        commit('setCountries', response.data)
      });
    },
    callByRegion: function ({
      commit
    }, region) {
      axios.get(`https://restcountries.com/v2/region/${region}`).then((response) => {
        commit('setByRegion', response.data)
      }).catch((err) => {
        console.log(err);
      });
    },
    callCountry: function ({
      commit
    }, value) {
      axios.get(`https://restcountries.com/v2/name/${value}`).then((response) => {
        commit('currentCountry', response.data)
      });
    }
  },
  modules: {},
  plugins: [createPersistedState()],
})