<template>
    <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Website</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="item in companies" :key="item.id">
                <tr class="bg-white">
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.name }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.email }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.address }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.website }}
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>

import useCompanies from "../../composables/companies";
import {onMounted} from "vue";

export default {
    setup() {
        const {companies, getCompanies} = useCompanies();

        onMounted(getCompanies)

        return {
            companies
        }
    }
}


</script>
