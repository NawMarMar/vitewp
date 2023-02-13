import { useRoute } from 'vue-router';
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { API } from '../api'

export const usePostStore = defineStore('posts', () => {

    const _posts = ref('');

    const storePost = ( posts) => {
        _posts.value =  posts
    }

    const getPosts = async (postType) => {
        const response = await API.post.getPosts(postType);
        storePost(response)
    }


    return {
        _posts,
        getPosts,
        usePostStore,
    }

});

export const getPost = async (slug) => {

      const route = useRoute();
      const _slug = slug != null ? slug : route.params.postSlug;
      const { data } = await axios.get(`${ApiBasePath}posts?slug=${_slug}`);
      return data[0];
    } 