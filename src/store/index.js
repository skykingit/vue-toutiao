import Vue from 'vue'
import Vuex from 'vuex'
import  APIList  from '../config/API.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList:APIList.NavMenuList,
    currentNavIndex:1
  },
  getters:{
    navListData:state=>{
      return state.navList
    },
    activeNavIndex:state=>{
      return state.currentNavIndex
    }
  },
  mutations: {
    switchNav(state,index){
      state.currentNavIndex = index
    }
  },
  actions: {
    switchNav({commit},index){
      commit('switchNav',index)
    }
  },
  modules: {
  }
})
