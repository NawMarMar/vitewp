import axios from "axios";

export const API = {
    'page': {
        'getContent': async (pageName) => {
            const { data } = await axios.get(`http://vue.local/wp-json/wp/v2/pages?slug=${pageName}`)
            return data
        }
    },
    'post': {
        'getContent': async (postName) => {
            const { data } = await axios.get(`http://vue.local/wp-json/wp/v2/types=book`)
            return data
        }
    }
}