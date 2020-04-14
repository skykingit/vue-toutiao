<template>
    <div>
        <Header/>
        <div class="hotPageArea">
            <div class="hHeader">
                <div class="hTitle">
                    头条热榜
                </div>
                <div class="hSubTitle">
                    <div class="hstArea">
                        <span>
                            {{(new Date).getFullYear()}}年{{(new Date).getMonth()+1}}月{{(new Date).getDate()}}日
                        </span> 
                        今日热点排行
                    </div>
                </div>
            </div>
            <div class="updateTips">
                实时热点,每十分钟更新一次
            </div>
            <div class="hotList">
                <div class="hotItem" v-for="(item,index) in hotList" :key="item.id">
                    <div class="iContent">
                        <b>{{index}}</b>
                        <span class="iName">{{item.name}}</span>
                        <div class=rightIcon>
                            <span class="typeIcon" v-if="item.type > 0">
                                {{  item.type == 0?'':(item.type==1?'爆':(item.type == 2?'热':(item.type == 3?'新':'')))
                                }}
                                </span>
                            <img src="../assets/icon/arrowL.svg" alt=">">
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="allShowTips">
                已显示全部内容
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import {mapGetters} from 'vuex'

export default {
    computed:mapGetters([
        'hotList'
    ]),
    components:{
        Header,
        Footer
    }
}
</script>
<style lang="scss" scoped>
@import "../style/common";
.hotPageArea{
    padding-top:39px;
    padding-bottom: 60px;
    .hHeader{
        background-color: red;
        padding:10px 0 30px;
        .hTitle{
            color:white;
            font-weight: bolder;
            text-align: center;
            font-size: 42px;
        }
        .hSubTitle{
            text-align: center;
            .hstArea{
                display: inline;
                background-color: yellow;
                color: red;
                padding:2px 4px;
                font-size: 12px;
                border-top-left-radius: 10px;
                border-bottom-right-radius: 10px;
                -webkit-border-top-left-radius: 10px;
                -webkit-border-bottom-right-radius: 10px;
                
            }
        }
    }
    .updateTips{
        background-color: $borderColor;
        color:$lightColor;
        padding:4px 10px;
        text-align: left;
        font-size: 12px;
    }
    .hotList{
        .hotItem{
            border-bottom: 1px solid $borderColor;
            .iContent{
                line-height: 40px;
                padding-left:15px;
                position: relative;
                text-align: left;
                    b{
                    color:red;
                    font-size: 24px;
                    padding-right:20px;
                }
                .iName{
                    font-size: 16px;
                }
                .rightIcon{
                    position:absolute;
                    right:15px;
                    top:0;
                    .typeIcon{
                        background-color: red;
                        font-size: 10px;
                        width: 16px;
                        height: 16px;
                        line-height: 16px;
                        display: inline-block;
                        text-align: center;
                        border-radius: 2px;
                        margin-right: 14px;
                        color:white;
                    }
                    img{
                        width:10px;
                    }
                }
            }
        }
    }
    .allShowTips{
        padding:20px;
        text-align: center;
        font-size: 16px;
        color:$lightColor;
    }
}
</style>