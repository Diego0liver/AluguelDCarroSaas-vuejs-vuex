
<template>
  <main>
    <nav class="nav">
    <h1 class="navTitulo">Alugeul de carros</h1>
    </nav>

    <div class='cardCorpo'>
      <div class='card'>
        <h2>Clientes</h2>
        <p class='subtitulo'>Codastro de clientes</p>
        <img class='imgHome' src='@/img/peaple.png' alt='cliente'/><br/>
        <button class="btn-inicio" @click="clientes">Clientes !</button>
      </div>
    
      <div class='card'>
        <h2>Carros</h2>
        <p class='subtitulo'>Codastro de carros</p>
        <img class='imgHome' src='@/img/car.png' alt='carro'/><br/>
        <button class="btn-inicio" @click="carros">Carros !</button>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  methods: {
      clientes(){
        this.$router.push('/cliente')
      },
      carros(){
        this.$router.push('/carros')
      }
  }
}
</script>

<style scoped>
.nav{
    background: linear-gradient(126deg, rgba(17,110,168,1) 20%, rgba(252,222,4,1) 100%);
}
  .navTitulo{
 text-align: center;
 color: #fff;
 padding: 20px;
 font-size: 50px;
}
.cardCorpo{
  display: flex;
  justify-content: center;
}

.card{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 300px;
  margin-top: 20px;
  border-radius: 10px;
  margin: 20px;
}
.subtitulo{
  font-style: italic;
  font-size: 17px;
  color: darkgrey;
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
  transition: 0.5s ease, color 0.5s ease;
}
.imgHome{
  background-color: #fff4a4;
  border-radius: 100%;
  padding: 20px;
  width: 90px;
}
</style>