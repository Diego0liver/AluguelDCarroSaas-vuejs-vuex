<template>
    <div class='conteinerNewCar'>
        <h1 class='titleNewCar'>Editar cliente {{ dados.nome }}</h1>
        <router-link  to='/cliente'>
         <img class='back' src='@/img/back.png' alt='back' />
        </router-link >
        <h3 class='titleNewCar'>Formulario para adicionar um novo cliente no sistema. Atencao preencher todos os campo</h3>
        <div class='formCarro'>
          <label class='labelCar'>Nome</label>
          <input id="nome" class='inputCar' v-model="nome" type='text' />

          <label class='labelCar'>Documento</label>
          <input id="documento" class='inputCar' v-model="documento"
           placeholder='Somente numeros' type='number' /><br/>

          <label class='labelCar'>Telefone</label>
          <input id="telefone" v-model="telefone" class='inputCar' type='text' />

          <label class='labelCar'>Genero</label>
          <select id="genero" v-model="genero" name="genero" class='inputCar' >
            <option  selected></option>
            <option value="Homem">Homem</option>
            <option value="Mulher">Mulher</option>
            <option value="Outro">Outro</option>
          </select><br/>

          <button @click="putCliente" class="btn-inicio">Salvar !</button>
        </div>
        <button class="excluir" @click="excluirCliente(dados.id)">Excluir !</button>
    </div>
</template>

<script>
import axios from 'axios'
const BASE_URL = 'http://127.0.0.1:8000/api/cliente/'
export default{
props: ['id'],
data(){
   return{
       nome: '',
       documento: '',
       telefone: '',
       genero: '',
    id: this.$route.params.id, //passando o valor do id para o id que esta vindo da URL
    dados:{}, //estado inicial dos dados vindo da API
   }
},
//chamada da API por ID
 async mounted(){
     try{
         await axios.get(BASE_URL + this.id).then((response)=>{
            this.dados = response.data;
            this.nome = this.dados.nome;
            this.documento = this.dados.documento;
            this.telefone = this.dados.telefone;
            this.genero = this.dados.genero;
        })
     }catch(err){
        console.log(err)
     }
 },
   methods:{
      putCliente(){ //editar cliente por API
     const editForm={
        nome: this.nome,
        documento: this.documento,
        telefone: this.telefone,
        genero: this.genero
    }
         axios.put(BASE_URL + this.id, editForm)
         .then(response => {
          console.log('Dados atualizados:', response.data);
          alert('Dados salvo com sucesso')
        })
        .catch(error => {
          console.error(error);
        });
      },

      excluirCliente() {//exlcuir cliente na API
      try{
        axios.delete(BASE_URL + this.id)
        alert('Excluido com sucesso');
        this.$router.push('/cliente');
        }
        catch(err){
         console.log(err)
        }
      }
   }
 }
</script>

<style scoped>
.conteinerNewCar{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.titleNewCar{
  text-align: center;
}

.formCarro{
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 700px;
  padding: 20px;
  margin: 15px;
  border-radius: 10px;
}
.labelCar{
  margin-left: 15px;
  font-size: 25px;
  margin-right: 10px;
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
.btn-inicio{
  border: none;
  background-color: #fcde04;
  color: #116ea8;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  font-style: italic;
  font-size: 20px;
  transition: 0.5s ease, color 0.5s ease;
}
.btn-inicio:hover{
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  transition: 0.5s ease, color 0.5s ease;}
  .excluir{
  background-color: #fa7272;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  padding: 7px;
  cursor: pointer;
  transition: 0.3s ease, color 0.3s ease; 
}
.excluir:hover{
  background-color: #fff;
  color: rgb(250, 114, 114);
  transition: 0.3s ease, color 0.3s ease; 
  border: 1px solid rgb(250, 114, 114);
}
</style>