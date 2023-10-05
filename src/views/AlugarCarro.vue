<template>
    <div class='conteinerCarroId'>
       <h1>Alugar {{ nome_carro }}</h1>
          <router-link  to='/carros'>
          <img class='back' src='../img/back.png' alt='back' />
          </router-link>
        <div class='cardCarroId'>
         <p class="desc">Antes de confirmar o aluguel <br/> preencha o campo abaixo</p>
          <h3>Alugar {{ nome_carro }} para {{ nome }}</h3>
          <h4>Qual KM atual do {{ carro }}?</h4>
          <input class='inputCar' type='number' v-model="km" id="km" placeholder='Digita o KM aqui' /><br/>
            <button @click="alugarCarro" class='btn-inicio'>Alugar !</button>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8000/api/carro/';
export default{
  props:{
    id_carro: String,
    nome_carro: String,
    id: String,
    nome: String
  },
  data(){
    return{
    km: '',
    id_car: this.$route.params.id_carro
  }
  },
methods:{
  alugarCarro(){
    const putCar={
      km: this.km,
      status: 'alugado',
      cliente_id: this.id,
    }
    axios.put(BASE_URL + this.id_car, putCar)
         .then(response => {
          console.log('Dados atualizados:', response.data);
          alert(`Carro alugado para ${this.nome}`)
          this.$router.push('/carros')
        })
        .catch(error => {
          console.error(error);
        });
  }
}
}
</script>


<style scoped>
.inputCar{
  border: 2px solid #116ea8;
  border-radius: 05px;
  padding: 4px;
  font-size: 25px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.inputCar:focus{
  box-shadow: 0 0 5px #fcde04;
  outline: none;
}
.desc{
    font-style: italic;
    color: darkgrey;
    font-size: 18px !important;
}
</style>