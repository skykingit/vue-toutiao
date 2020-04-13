import Vue from 'vue'
import Vuex from 'vuex'
import  APIList  from '../config/API.js'

const _ = require('lodash');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList:APIList.NavMenuList,
    currentNavIndex:1,
    userCommonFuncList:APIList.CommonFuncList,
    userAuthorToolList:APIList.AuthorToolList,
    userMoreFuncList:APIList.MoreFuncList,
    searchHistoryList:APIList.HistoryList,
    historyArrowIconFlag:true,
    searchGuessLikeList:APIList.GuessLikeList,
    guessLikeFlag:true
  },
  getters:{
    navListData:state=>{
      return state.navList
    },
    activeNavIndex:state=>{
      return state.currentNavIndex
    },
    userCommonFuncList:state=>{
      return state.userCommonFuncList
    },
    userAuthorToolList:state=>{
      return state.userAuthorToolList
    },
    userMoreFuncList:state=>{
      return state.userMoreFuncList
    },
    searchHistoryList:state=>{
      return state.searchHistoryList
    },
    historyArrowIconFlag:state=>{
      return state.historyArrowIconFlag
    },
    searchGuessLikeList:state=>{
      return state.searchGuessLikeList
    },
    searchGuessLikeFlag:state=>{
      return state.guessLikeFlag
    }
  },
  mutations: {
    switchNav(state,index){
      state.currentNavIndex = index
    },
    addMoreHistory(state){
      state.searchHistoryList = _.concat(APIList.HistoryList,APIList.HistoryListMore)
      state.historyArrowIconFlag = false
    },
    removeHistoryListMore(state){
      state.searchHistoryList = APIList.HistoryList
      state.historyArrowIconFlag = true
    },
    showGuessLikeArea(state){
      state.guessLikeFlag = true
    },
    hideGuessLikeArea(state){
      state.guessLikeFlag = false
    }
  },
  actions: {
    switchNav({commit},index){
      commit('switchNav',index)
    },
    addMoreHistory({commit}){
      commit('addMoreHistory')
    },
    removeHistoryListMore({commit}){
      commit('removeHistoryListMore')
    },
    showGuessLikeArea({commit}){
      commit('showGuessLikeArea')
    },
    hideGuessLikeArea({commit}){
      commit('hideGuessLikeArea')
    }
  },
  modules: {
  }
})
