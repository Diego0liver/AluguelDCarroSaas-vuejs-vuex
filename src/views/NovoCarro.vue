<template>
<div class='conteinerNewCar'>
        <h1 class='titleNewCar'>Adicionar um novo Carro</h1>
        <router-link to='/carros'>
         <img class='back' src='@/img/back.png' alt='back' />
        </router-link>
        <h3 class='titleNewCar'>Formulario para adicionar um novo carro no sistema. Atencao preencher todos os campo</h3>
        <div class='formCarro'>
          <label class='labelCar'>Modelo/Ano:</label>
          <input class='inputCar' placeholder='Ex: Palio/14' />

          <label class='labelCar'>Cor:</label>
          <input class='inputCar' /><br/>

          <label class='labelCar'>Placa:</label>
          <input class='inputCar' />

          <label class='labelCar'>KM:</label>
          <input class='inputCar' /><br/>

          <label class='labelCar'>Valor Diaria:</label>
          <input class='inputCar' /><br/>
          <button onClick={newCarId} class='btn-inicio'>Salvar !</button>
        </div>
    </div>
</template>

<script>
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