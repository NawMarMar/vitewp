import { ref } from 'vue'
import { defineStore } from 'pinia'
import { API } from '../api'

export const usePageStore = defineStore('page', () => {

    const _page = ref(null)

    const storePage = (page) => {
        _page.value = page
    }

    const getContentPage = async (postName) => {
        const response = await API.page.getContent(postName) 
        storePage(response[0])
    }

    return {
        _page,
        getContentPage
    }

})
export const usePostStore = defineStore('post', () => {

    const _post = ref(null)

    const storePost = (post) => {
        _post.value = post
    }

    const getContentPost = async (book) => {
        const response = await API.post.getContent(book) 
        storePost(response[0])
    }

    return {
        _post,
        getContentPage
    }

})