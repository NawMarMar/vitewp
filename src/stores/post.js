import { ref } from 'vue'
import { defineStore } from 'pinia'
import { API } from '../api'
// import { useRoute } from 'vue-router'

export const usePostStore = defineStore('posts', () => {

    const _posts = ref('');
    const _post = ref('');

    const storePosts = ( posts) => {
        _posts.value =  posts
    }

    const storePost = ( post) => {
        _post.value =  post
    }

    const getPosts = async (postType) => {
        const response = await API.post.getPosts(postType);
        storePosts(response)
    }

    const getPost = async (postType,postId) => {
        const response = await API.single.getPost(postType,postId);
        storePost(response)
    }

    return {
        _post,
        _posts,
        getPosts,
        getPost,

    }

});

  