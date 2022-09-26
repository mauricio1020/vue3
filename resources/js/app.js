import './bootstrap';

import  '../sass/app.scss'

//import  * as  bootstrap from 'bootstrap'


import {createApp} from 'vue/dist/vue.esm-bundler';


import router from './router';
import CompaniesIndex from './components/companies/CompaniesIndex.vue'
import hello from './components/HelloWorld.vue';
import Select2 from 'v-select2-component';

const app = createApp({
    components:{
        CompaniesIndex,
        Select2,
        hello
    }
}).use(router).mount('#app');





