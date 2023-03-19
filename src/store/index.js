import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 定义一个name，以供全局使用
    name: '张三',
    // 定义一个number，以供全局使用
    number: 0,
  },
  getters:{
    getNumber(state){
      return state.number+"个"
    }
  },
  mutations:{
    changeNum(state,payload){
      state.number=payload.number
    }
  },
  actions:{
    setNum(context,payload){
      return new Promise((res)=>{
         setTimeout(()=>{
           context.commit('changeNum',{number:payload.number})
           res()
         },1000)
      })
    }
  }
});

export default store;
