  export default{
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
      },
      hotList:state=>{
          return state.hotList
      }
  }