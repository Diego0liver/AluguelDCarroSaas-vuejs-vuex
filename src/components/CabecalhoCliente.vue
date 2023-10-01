<template>
     <div className='cabecalho'>
         <router-link to="/novoCliente">
         <img class='addImg' src='@/img/add.png' alt='add' />
        </router-link>
         <input class='inputBusca' placeholder='Buscar cliente' />
       </div>
</template>


<script>

</script>

<style scoped>

.cabecalho{
  display: flex;
  justify-content: center;
}
.addImg{
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-right: 15px;
}

.inputBusca{
  border: 2px solid #116ea8;
  border-radius: 05px;
  width: 300px;
  padding: 5px;
}
.inputBusca:focus{
  box-shadow: 0 0 5px #fcde04;
  outline: none;
}
</style>