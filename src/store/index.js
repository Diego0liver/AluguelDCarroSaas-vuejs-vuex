import {createStore} from 'vuex';
import axios from 'axios'

export default createStore({
    state:{
      data:[]
    },
    mutations:{
      SET_DATA(state, newData){
        state.data = newData;
      },
      
    },
    getters:{

    },
    actions:{
         async apiGet({commit}){
            try{
                const res = await axios.get('http://127.0.0.1:8000/api/cliente')
                commit('SET_DATA', res.data)
            }catch(err){
                    console.log(err)
            }
         },
         async apiGetCar({commit}){
          try{
              const resCar = await axios.get('http://127.0.0.1:8000/api/carro')
              commit('SET_DATA', resCar.data)
          }catch(err){
            console.log(err)
          }
         }
    },
    modules:{

    }
})