import axios from "axios";

export const API = {
  page: {
    getContent: async (pageName) => {
      const { data } = await axios.get(
        `http://vue.local/wp-json/wp/v2/pages?slug=${pageName}`
      );
      return data;
    },
  },
  post: {
    getPosts: async (postType) => {
      const { data } = await axios.get(
        `http://vue.local/wp-json/wp/v2/${postType}`
      );
      return data;
    },
  },
  single: {
    getPost: async (postType,postId) => {
      const { data } = await axios.get(
        `http://vue.local/wp-json/wp/v2/${postType}/${postId}`
      );
      return data;
    },
  },
};
