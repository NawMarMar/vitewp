import { ref } from 'vue'
import { defineStore } from 'pinia'
import { API } from '../api'

export const usePageStore = defineStore('form', () => {

    const _data = ref(null)

    const formPage = (form) => {
        _data.value = form
    }

    const getFormData = async (formId) => {
        const response = await API.form.getData(formId) 
        formPage(response)
    }

    return {
        _data,
        getFormData
    }

})