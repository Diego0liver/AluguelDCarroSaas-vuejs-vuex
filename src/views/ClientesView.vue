<template>
  <h1 class="tituloCarro">Clientes</h1>
    <RouterLink to="/">
    <img class="back" src="@/img/back.png" alt="voltar">
    </RouterLink>
   <CabecalhoCliente />
  <table v-if="ifCliente">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Documento</th>
            <th>Telefone</th>
            <th>Genero</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id">
              <td>{{ item.nome }}</td>
              <td>{{ item.documento }}</td>
              <td>{{ item.telefone }}</td>
              <td>{{ item.genero }}</td>
              <td>
              <RouterLink :to="'clienteID/' + item.id">
               <img class="imgEdit" src="@/img/edit.png" alt="edit">
              </RouterLink>
              </td>
            </tr>
        </tbody>
      </table>
  <h3 v-else>Sem carro cadastrado</h3>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CabecalhoCliente from '@/components/CabecalhoCliente.vue'

export default {
  components:{
    CabecalhoCliente
  },
  computed: {
    ...mapState(['data']),
       ifCliente(){
         return this.data.length > 0
       },
     },
    mounted(){
        this.apiGet();
    },
  methods: {
    voltar(){
         this.$router.push('/')
    },
    ...mapActions(['apiGet']),
  }
};
</script>

<style scoped>
.tituloCarro{
  text-align: center;
}
.imgEdit{
  width: 30px;
  cursor: pointer;
}
</style>