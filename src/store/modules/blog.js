import axios from "axios";

export default{
  namespaced:true,
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
      try{
        const blogs = await axios.get("https://mocki.io/v1/13d91553-5dd8-4280-9999-73ba0baaacae")
        state.commit("setBlogs", blogs.data);
      }catch(error){
        console.log(error)
      }
    },
  },
  modules: {},
};
