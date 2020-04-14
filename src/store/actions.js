export default{
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
}