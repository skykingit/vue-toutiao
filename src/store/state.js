import  APIList  from '../config/API.js'
const state={
    navList:APIList.NavMenuList,
    currentNavIndex:1,
    userCommonFuncList:APIList.CommonFuncList,
    userAuthorToolList:APIList.AuthorToolList,
    userMoreFuncList:APIList.MoreFuncList,
    searchHistoryList:APIList.HistoryList,
    historyArrowIconFlag:true,
    searchGuessLikeList:APIList.GuessLikeList,
    guessLikeFlag:true,
    hotList:APIList.HotList
  }
export default state;