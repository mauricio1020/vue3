<template>
    <div>
        <div class="col-6 mt-3">
            <label class="control-label">Departamento</label>
            <Select2 :options="departaments"></Select2>

            <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option v-for="depart in departaments" :value="depart.id">
                    {{ depart.text }}
                </option>

            </select>

        </div>
    </div>
</template>

<script>

 export default {
     mounted() {
         this.loadDepartaments();
     },
     data(){
         return {
             departaments: [],
             selected_departament: "",
         }
     },
     methods: {
         loadDepartaments() {
             axios.get("/departaments").then((response) => {
                 for(let index = 0; index < response.data.length; index++){
                     this.departaments.push(
                         { id: response.data[index].departament.id, text: response.data[index].departament.text }
                     )
                 }
             });
         },
     }
 }
</script>


