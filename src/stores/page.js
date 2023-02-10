import { ref } from 'vue'
import { defineStore } from 'pinia'
import { API } from '../api'

export const usePageStore = defineStore('page', () => {

    const _page = ref(null)

    const storePage = (page) => {
        _page.value = page
    }

    const getContentPage = async (pageName) => {
        const response = await API.page.getContent(pageName) 
        storePage(response[0])
    }

    return {
        _page,
        getContentPage
    }

})