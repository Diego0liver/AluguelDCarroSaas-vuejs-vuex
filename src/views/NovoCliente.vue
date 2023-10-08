<template>
    
    <div class='conteinerNewCar'>
        <h1 class='titleNewCar'>Adicionar um novo Cliente</h1>
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

          <button @click="postCliente" class="btn-inicio">Salvar !</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8000/api/cliente'
export default{
data(){
   return{
       nome: '',
       documento: '',
       telefone: '',
       genero: ''
   }},
   methods: {
    async postCliente(e){
      e.preventDefault();
      if(!this.nome ||
      !this.documento ||
      !this.telefone ||
      !this.genero ){
        alert("Preencha todos os campos.")
      }
      const datas ={
        nome: this.nome,
        documento: this.documento,
        telefone: this.telefone,
        genero: this.genero
      }
      try{
           const res = await axios.post(BASE_URL, datas)
           console.log(res.data)
           this.nome = ''
           this.documento = ''
           this.telefone = ''
           this.genero = ''
           alert("Cliente cadastrado")
      }catch(err){
        console.log(err)
      }
      
    }
   },
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
</style>