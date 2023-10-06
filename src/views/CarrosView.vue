<template>
    <h1 class="tituloCarro">Carros</h1>
    <RouterLink to="/">
    <img class="back" src="@/img/back.png" alt="voltar">
    </RouterLink>
      <div class='cabecalho'>
          <router-link to="/novoCliente">
          <img class='addImg' src='@/img/add.png' alt='add' />
          </router-link>
          <input v-model="busca" class='inputBusca' placeholder='Buscar carro' />
        </div>
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
              <tr v-for="item in filtroCarro" :key="item.id">
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

 export default{
  data(){
    return{
          busca: ''
    }
  },
    computed:{
         ...mapState(['data']),
         ifCar(){
            return this.data.length > 0
         },
         filtroCarro(){
              let valores = [];
              valores = this.data.filter((item) =>{
                return(
                  item.modelo.toLowerCase().indexOf(this.busca.toLowerCase()) > -1 ||
                  item.placa.toLowerCase().indexOf(this.busca.toLowerCase()) > -1
                )
              })
              return valores
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

.cabecalho{
 display: flex;
 justify-content: center;
}
.addImg{
 width: 30px;
 height: 30px;
 cursor: pointer;
 margin-right: 15px;
}

.inputBusca{
 border: 2px solid #116ea8;
 border-radius: 05px;
 width: 300px;
 padding: 5px;
}
.inputBusca:focus{
 box-shadow: 0 0 5px #fcde04;
 outline: none;
}
</style>