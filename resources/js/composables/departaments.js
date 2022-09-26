import {ref} from 'vue'
import axios from "axios";

export default function useDeparts() {
    const departs = ref({})

    const getDeparts = async () => {
        axios.get('/departaments')
            .then(response => {
                console.log(response.data)
                departs.value = response.data
            })
    }
    return { departs, getDeparts }
}
