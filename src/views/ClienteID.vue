<template>
    <h1>ID do cliente {{ id }}  - {{ dados.nome }}</h1>
</template>

<script>
import axios from 'axios'
const BASE_URL = 'http://127.0.0.1:8000/api/cliente/'
export default{
props: ['id'],
data(){
   return{
     //passando o valor do id para o id que esta vindo da URL
    id: this.$route.params.id,
    //estado inicial dos dados vindo da API
    dados:{}
   }
},
//chamada da API por ID
 async mounted(){
     try{
        const res = await axios.get(BASE_URL + this.id)
        this.dados = res.data
     }catch(err){
        console.log(err)
     }
 }
}
</script>

<style>
</style>