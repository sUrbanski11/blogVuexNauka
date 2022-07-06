import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [],
  },
  getters: {
    getBlogs: (state) => (category) => state.blogs.find((b) => b.name === category),
  },
  mutations: {
    setBlogs(state, payload) {
      state.blogs = payload;
    },
  },
  actions: {
    async fetchBlogs(state) {
      const b = await (await fetch("https://mocki.io/v1/13d91553-5dd8-4280-9999-73ba0baaacae")).json();
      state.commit("setBlogs", b);
    },
  },
  modules: {},
});
