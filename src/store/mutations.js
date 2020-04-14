const _ = require('lodash');
import  APIList  from '../config/API.js'

export default{
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
}