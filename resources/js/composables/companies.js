import { ref } from 'vue'
import axios from "axios";

export default function useCompanies(){
    const companies = ref( [])

    const getCompanies = async() => {
       let response = await axios.get('/api/companies')
        console.log(response.data.data)
        companies.value = response.data.data
    }

    return {
        companies,
        getCompanies
    }
}
