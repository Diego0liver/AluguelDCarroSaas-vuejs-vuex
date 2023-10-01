<template>
    <h1>Carros</h1>
    <li v-if="ifCar" v-for="item in data" :key="item.id" >{{ item.modelo }} - {{ item.cor }}</li>
    <h3 v-else>Sem carro cadastrado</h3>
    <button @click="voltar" >Voltar</button>
</template>

<script>
import { mapActions, mapState } from 'vuex';
 export default{
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
        voltar(){
            this.$router.push('/')
        },
        ...mapActions(['apiGetCar'])
    }
 }
</script>

<style>
</style>