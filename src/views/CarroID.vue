<template >

    <div v-if="dados.cliente_id !== null" class='conteinerCarroId'>
       <h1>Controle do Carro {{ dados.modelo }}</h1>
          <router-link to='/carros'>
          <img class='back' src='@/img/back.png' alt='back' />
         </router-link>
        <div class='cardCarroId'>
          <img src='@/img/carr.png' alt='carro' class='imgCarroCard'/>
          <h3>{{ dados.modelo }} &nbsp; &nbsp; {{ dados.cor }}</h3>
          <p>Placa:{{ dados.placa }} &nbsp; &nbsp; KM:{{ dados.km }}</p>
          <p>Diaria R${{ dados.valorDiaria }}</p>
          <p class='alugado'>Carro {{ dados.status }} para {{dados.cliente && dados.cliente.nome }}</p>
          <button @click="abriModal" class='btn-inicio'>Livrar Carro !</button>
           <div>
            <ModalLivraCarro v-if="viewModal" @fechar-modal="fechaModal" />
           </div>
        </div>
    </div>
     
    <div v-else class='conteinerCarroId'>
      <h1>Controle do Carro {{ dados.modelo }}</h1>
        <router-link to='/carros'>
          <img class='back' src='@/img/back.png' alt='back' />
        </router-link> 

       <div class='cardCarroId'>
         <img src='@/img/carFree.png' alt='carrofree' class='imgCarroCard' />
         <h3>{{ dados.modelo }} &nbsp; &nbsp; {{ dados.cor }}</h3>
         <p>Placa:{{ dados.placa }} &nbsp; &nbsp; KM:{{ dados.km }}</p>
         <p>Diaria R${{ dados.valorDiaria }}</p>
         <p class='livre'>Carro {{ dados.status }}</p>
         <button @click="abriModalAlugar" class='btn-inicio'>Alugar Carro !</button><br/>
       </div>
         <div>
           <ModalAlugaCarro :id_carro="dados.id" :nome_carro="dados.modelo"
            v-if="modalAlugar" @fecharModal="fechaModalAlugar" />
         </div>
       <button @click="excluirCarro(dados.id)" class='excluir'>Excluir carro</button> 
  </div>

</template>


<script>
import axios from 'axios';
import ModalLivraCarro from '../components/modals/ModalLivraCarro.vue'
import ModalAlugaCarro from '../components/modals/ModalAlugaCarro.vue'
const BASE_URL = 'http://127.0.0.1:8000/api/carro/'
  export default{
    components:{
      ModalLivraCarro,
      ModalAlugaCarro
    },
    props: ['id'],
    data() {
     return {
      id: this.$route.params.id,  //passando o valor do id para o id que esta vindo da URL
      dados: {}, //estado inicial dos dados vindo da API
      viewModal: false, //chama o modal
      modalAlugar: false
    };
  },
    async mounted() {//chamada da API por ID
    try {
       await axios.get(BASE_URL + this.id)
       .then(response => {
        this.dados = response.data})
    } catch (error) {
      console.error( error);
    }
  },
  methods:{
    excluirCarro() {//exlcuir carro na API
      try{
        axios.delete(BASE_URL + this.id)
        alert('Excluido com sucesso');
        this.$router.push('/carros');
        }
        catch(err){
         console.log(err)
        }
      },
      //funcao abri e fecha modal
     abriModal(){
        this.viewModal = true;
     },
     fechaModal(){
        this.viewModal = false;
     },
     abriModalAlugar(){
        this.modalAlugar = true;
     },
     fechaModalAlugar(){
        this.modalAlugar = false;
     }
  }
  }
</script>

<style>
.conteinerCarroId{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.cardCarroId{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 300px;
  padding: 20px;
  margin: 15px;
  font-size: 25px;
  border-radius: 10px;
}
.imgCarroCard{
  width: 250px;
  border-radius: 10px;
}
.alugado{
  margin-bottom: 20px;
  margin-top: 10px;
  background-color: rgb(255, 126, 126);
  border-radius: 10px;
  color: rgb(192, 57, 57);
  font-weight: bolder;
}
.livre{
  margin-bottom: 20px;
  margin-top: 10px;
  background-color: #8bd18b;
  border-radius: 10px;
  color: rgb(51, 85, 51);
  font-weight: bolder;
}
.excluir{
  background-color: #fa7272;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  padding: 7px;
  cursor: pointer;
  transition: 0.3s ease, color 0.3s ease; 
}
.excluir:hover{
  background-color: #fff;
  color: rgb(250, 114, 114);
  transition: 0.3s ease, color 0.3s ease; 
  border: 1px solid rgb(250, 114, 114);}
</style>