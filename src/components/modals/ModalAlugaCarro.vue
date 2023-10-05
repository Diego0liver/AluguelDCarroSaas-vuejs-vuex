<template>
    <div class="modal-conteiner">
      <div class="modal">
        <button @click="fechaModalAlugar" class="modal-close">X</button><br/>
        <div>
           <h1>Qual cliente vai alugar {{nome_carro}}?</h1>
           <table v-if="ifCliente">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Documento</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="item in data" :key="item.id">
                    <td><RouterLink 
                    :to="'/alugarCarro/' + item.id + '/' + item.nome + '/' + id_carro + '/' + nome_carro + '/' + 'aluguel'">
                    {{ item.nome }}
                    </RouterLink>
                    </td>
                    <td>{{ item.documento }}</td>
                    </tr>
                </tbody>
            </table>
          <h3 v-else>Sem carro cadastrado</h3>
        </div>
      </div>
    </div> 
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default{
    props:{
        id_carro: String,
        nome_carro: String
    },
  name: 'ModalAlugaCarro',
  data(){
    return{
        modalAlugar: false
    }
  },
  methods:{
     abriModalAlugar(){
        this.modalAlugar = true;
     },
     fechaModalAlugar(){
        this.$emit('fecharModal')
     },
     ...mapActions(['apiGet']),
  },
  computed: {
    ...mapState(['data']),
       ifCliente(){
         return this.data.length > 0
       },
     },
    mounted(){
        this.apiGet();
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