<template>
    <div class="searchPage">
       <div class="sHeader">
           <div class="searchIcon">
                    <img src="../assets/icon/search.svg" alt="Search">
            </div>
           <div class="cancleBtn" @click="$router.go(-1)">
               取消
           </div>
           <input type="text" name="" id="" placeholder="苏州许可馨时间后续">
       </div>
       <div class="recommandNews">
           <div class="rItem">
               苏州许可馨时间后续
           </div>
           <div class="rItem">
               美团回应集体诉讼
           </div>
       </div>
       <div class="spliteLineSmall"></div>
       <div class="historyList">
           <div class="hHeader">
               历史记录 
               <img src="../assets/icon/arrow_down.svg" alt="arrow_down" @click="addMoreHistory" v-if='historyArrowIconFlag'>
               <img src="../assets/icon/arrow_up.svg" alt="arrow_down" @click="removeHistoryListMore" v-if='!historyArrowIconFlag'>
           </div>
           <div class="hList">
               <div class="hItem" v-for="item in searchHistoryList" :key="item.name">
                   {{item.name}}
               </div>
           </div>
       </div>
       <div class="spliteLineSmall"></div>
       <div class="guessLike" v-if="searchGuessLikeFlag">
           <div class="gHeader">
               猜你喜欢
               <div class="hideGuessBtn" @click="hideGuessLikeArea">
                   <img src="../assets/icon/hideEye.svg" alt="Hide">
               </div>
           </div>
           <div class="gList">
               <div class="gItem" v-for="item in searchHistoryList" :key="item.name">
                   {{item.name}}
               </div>
           </div>
       </div>
       <div class="checkGuessArea" v-if="!searchGuessLikeFlag" @click="showGuessLikeArea">
           <img src="../assets/icon/eye.svg" alt="EYE"> 查看全部推荐词
       </div>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'

export default {
    created:()=>{
        console.log(this)
    },
    computed:mapGetters([
        'searchHistoryList',
        'historyArrowIconFlag',
        'searchGuessLikeList',
        'searchGuessLikeFlag'
    ]),
    methods:mapActions([
        'addMoreHistory',
        'removeHistoryListMore',
        'showGuessLikeArea',
        'hideGuessLikeArea'
    ])
}
</script>

<style lang="scss" scoped>
@import '../style/common';
.searchPage{
    padding:10px;
    .sHeader{
        padding: 10px 60px 10px 50px;
        background-color:$borderColor;
        position: relative;
        height:50px;
        .searchIcon{    
            position: absolute;
            left:10px;
            top:10px;
            img{
                width:30px;
            }
        }
        .cancleBtn{
            position: absolute;
            right: 0;
            height: 20px;
            top: 15px;
            text-align: center;
            width: 60px;
            line-height: 20px;
            border-left: 1px solid grey;
            color:grey;
        }
        input{
            width:100%;
            height:100%;
            background-color: transparent;
            border:0;
        }
    }
    .recommandNews{
        text-align: left;
        padding:10px 0;
        .rItem{
            display: inline-block;
            font-size: 16px;
            width:50%;
            overflow: hidden;
        }
        .rItem:last-child{
            border-left: 1px solid $borderColor;
            padding-left: 15px;
        }
    }
    .historyList{
        .hHeader{
            font-size: 14px;
            color:$lightColor;
            text-align: left;
            padding:5px 0;
            img{
                width:12px;
            }
        }
        .hList{
            text-align: left;
            .hItem{
                display: inline-block;
                width:50%;
                padding:8px 0;
                font-size: 14px;
            }
            .hItem:nth-child(2n){
                padding-left:10px;
                border-left:1px solid $borderColor;
            }
        }
    }
    .guessLike{
        padding:10px 0;
        .gHeader{
            position:relative;
            font-size: 14px;
            color:$lightColor;
            text-align: left;
            .hideGuessBtn{
                position: absolute;
                right:0;
                top:0;
                img{
                    width:20px;
                }
            }
        }
        .gList{
            text-align: left;
            .gItem{
                display: inline-block;
                width:50%;
                padding:8px 0;
                font-size: 14px;
            }
            .gItem:nth-child(2n){
                padding-left:10px;
                border-left:1px solid $borderColor;
            }
        }
    }
    .checkGuessArea{
        padding:20px;
        line-height: 30px;
        color: $lightColor;
        font-size: 14px;
        img{
            width:20px;
        }
    }
}
</style>