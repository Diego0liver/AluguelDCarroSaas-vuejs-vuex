<template>
    <div class="modal-conteiner">
      <div class="modal">
        <button @click="fechaModal" class="modal-close">X</button><br/>
        <div>
          <label>Km do carro na entrega*</label><br/>
          <input type='number' v-model="km" id="km"
          placeholder='Digite o KM aqui' class='inputCar' /> <br/>
          <button @click="putLivrar" class='btn-inicio' >Livrar carro</button>
        </div>
      </div>
    </div> 
</template>

<script>
import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8000/api/carro/';
export default{
  name: 'ModalLivraCarro',
  data(){
    return{
        km: '',
        id: this.$route.params.id,
        viewModal: false
    }
  },
  methods:{
    putLivrar(){
      const livrarCarro={
        km: this.km,
        status: 'livre'
      }
      axios.put(BASE_URL + this.id, livrarCarro)
         .then(response => {
          console.log('Dados atualizados:', response.data);
          alert('Carro livre')
          this.$router.push('/carros')
        })
        .catch(error => {
          console.error(error);
        });
    },
     abriModal(){
        this.viewModal = true;
     },
     fechaModal(){
        this.$emit('fechar-modal')
     }
  }
}
</script>


<style scoped>
.modal-conteiner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: show 1s;
}
.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  background-color: rgb(255, 126, 126);
  border-radius: 10px;
  color: rgb(192, 57, 57);
}
@keyframes show {
  0%{
      transform: translateY(-150vh);
  }
  100%{
      transform: translateY(0);
  }
}
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
</style>