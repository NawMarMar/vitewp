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
  posts: {
    getPosts: async (postType) => {
      const { data } = await axios.get(
        `http://vue.local/wp-json/wp/v2/${postType}`
      );
      return data;
    },
  },
  post: {
    getPost: async (postType,postId) => {
      const { data } = await axios.get(
        `http://vue.local/wp-json/wp/v2/${postType}/${postId}`
      );
      return data;
    },
  },
  form: {
    getData: async(formId) => {
      const { data } = await axios.get(
        `http://vue.local/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`
      );
      return data;
    }
  }
};
