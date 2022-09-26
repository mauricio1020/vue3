import { createRouter, createWebHistory } from "vue-router";

import CompaniesIndex from '../components/companies/CompaniesIndex.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes =[
    {
        path: '/',
        name: 'companies.index',
        component: CompaniesIndex
    },
    {
        path: '/departament',
        name: 'departaments',
        component: HelloWorld
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
