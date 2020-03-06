import Axios from "axios";

export default {
  loadPost({ commit }) {
    console.log("posts ...");
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(data => {
        console.log(data.data);
        const posts = data.data;
        commit("set_posts", posts);
      })
      .catch(error => console.log(error));
  }
};
