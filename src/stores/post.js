import { ref } from 'vue'
import { defineStore } from 'pinia'
import { API } from '../api'

export const usePostStore = defineStore('posts', () => {

    const _posts = ref(null)

    const storePost = ( posts) => {
        _posts.value =  posts
    }

    const getPosts = async (postType) => {
        const response = await API.post.getPosts(postType) 
        storePost(response)
    }


    return {
        _posts,
        getPosts,
        usePostStore,
    }

});

