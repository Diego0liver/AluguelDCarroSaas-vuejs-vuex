<template>
  <h1>Clientes</h1>
  <li v-if="ifCliente" v-for="item in data" :key="item.id" >{{ item.nome }} - {{ item.telefone }}</li>
  <h3 v-else>Sem Cliente cadastrado</h3>
  <button @click="voltar">Voltar</button>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
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

<style>

</style>