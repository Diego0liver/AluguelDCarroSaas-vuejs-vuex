<template>
  <h1 class="tituloCarro">Clientes</h1>
    <RouterLink to="/">
    <img class="back" src="@/img/back.png" alt="voltar">
    </RouterLink>
          <div class='cabecalho'>
            <router-link to="/novoCliente">
            <img class='addImg' src='@/img/add.png' alt='add' />
            </router-link>
            <input v-model="busca" class='inputBusca' placeholder='Buscar cliente' />
          </div>
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
            <tr v-for="item in filtroCliente" :key="item.id">
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
  <h3 v-else>Sem cliente cadastrado</h3>
</template>

<script>
import { mapState, mapActions } from 'vuex'; 

export default {
  data(){
    return{
      busca: ''
    }
  },
  computed: {
    ...mapState(['data']),
       ifCliente(){
         return this.data.length > 0
       },
       filtroCliente(){
        let valores = this.data;
              valores = this.data.filter((item) =>{
                return(
                  item.nome.toLowerCase().indexOf(this.busca.toLowerCase()) > -1 ||
                  item.documento.indexOf(this.busca) > -1)
              })
              return valores
       }
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