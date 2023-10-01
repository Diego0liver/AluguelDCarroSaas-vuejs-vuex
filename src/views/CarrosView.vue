<template>
    <h1 class="tituloCarro">Carros</h1>
    <RouterLink to="/">
    <img class="back" src="@/img/back.png" alt="voltar">
    </RouterLink>
   <CabecalhoCarro />
    <table v-if="ifCar">
          <thead>
            <tr>
              <th>Modelo/Ano</th>
              <th>Cor</th>
              <th>Placa</th>
              <th>Diaria</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="item in data" :key="item.id">
                <td><RouterLink :to="'carroID/' + item.id">
                {{ item.modelo }}</RouterLink>
                </td>
                <td>{{ item.cor }}</td>
                <td>{{ item.placa }}</td>
                <td>R$ {{ item.valorDiaria }}</td>
                <td>
                 {{  item.status }}
                </td>
              </tr>
          </tbody>
        </table>
    <h3 v-else>Sem carro cadastrado</h3>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import CabecalhoCarro from '@/components/CabecalhoCarro.vue'
 export default{
    components:{
        CabecalhoCarro
    },
    computed:{
         ...mapState(['data']),
         ifCar(){
            return this.data.length > 0
         }
    },
    mounted(){
        this.apiGetCar();
    },
    methods:{
        ...mapActions(['apiGetCar'])
    }
 }
</script>

<style scoped>
.tituloCarro{
  text-align: center;
}
</style>