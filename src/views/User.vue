<template>
    <div>
        <div class="pageContent">
            <div class="uHeaderArea">
                <div class="uHeader">
                    <div class="uImg">
                        <img src="../assets/tsl.jpeg" alt="User">
                    </div>
                    <div class="uName">
                        Skykingit <img src="../assets/icon/arrowL.svg" alt=">">
                    </div>
                    <div class="uInfo">
                        <div class="uItem">
                            <span class="ikey">头条</span>
                            <span class="iVal">120</span>
                        </div>
                        <div class="uItem">
                            <span class="ikey">关注</span>
                            <span class="iVal">170</span>
                        </div>
                        <div class="uItem">
                            <span class="ikey">粉丝</span>
                            <span class="iVal">96</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="splitLine"></div>
            <div class="gridArea">
                <div class="gHeadTitle">
                    常用功能
                </div>
                <div class="gList">
                    <div class="gItem" v-for="item in userCommonFuncList" :key="item.name">
                        <div class="gIcon">
                            <img :src="item.icon">
                        </div>
                        <div class="gName">
                            {{item.name}}
                        </div>
                    </div>
                </div>

            </div>

            <div class="splitLine"></div>
            <div class="gridArea">
                <div class="gHeadTitle">
                    作者工具
                </div>
                <div class="gList">
                    <div class="gItem" v-for="item in userAuthorToolList" :key="item.name">
                        <div class="gIcon">
                            <img :src="item.icon">
                        </div>
                        <div class="gName">
                            {{item.name}}
                        </div>
                    </div>
                </div>

            </div>

            <div class="splitLine"></div>
            <div class="gridArea">
                <div class="gHeadTitle">
                    更多功能
                </div>
                <div class="gList">
                    <div class="gItem" v-for="item in userMoreFuncList" :key="item.name">
                        <div class="gIcon">
                            <img :src="item.icon">
                        </div>
                        <div class="gName">
                            {{item.name}}
                        </div>
                    </div>
                </div>

            </div>

            
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../components/Footer'
import {mapGetters} from 'vuex'

export default {
    computed:mapGetters([
        'userCommonFuncList',
        'userAuthorToolList',
        'userMoreFuncList'
    ]),
    components:{
        Footer
    }
}
</script>

<style lang="scss" scoped>
@import "../style/common";
.pageContent{
    width:100%;
}
.uHeaderArea{
    padding:10px;
}
.uHeader{
    width:100%;
    position: relative;
    padding-left:60px;
    height:50px;
    .uImg{
        position:absolute;
        top:0px;
        left:0px;
        img{
            width:50px;
        }
    }
    .uName{
        height:24px;
        line-height: 24px;
        font-size: 14px;
        text-align: left;
        font-weight: bold;
        img{
            width:10px;
        }
    }
    .uInfo{
        height:16px;
        font-size: 10px;
        text-align: left;
        .uItem{
            padding-right: 20px;
            display: inline-block;
            .iVal{
                font-weight: bold;
                padding-left: 4px;
            }
        }
    }
}
.gridArea{
    padding:10px;
    .gHeadTitle{
        font-size: 16px;
        text-align: left;
        line-height: 30px;
    }
    .gList{
        padding:5px 0;
        text-align: left;
        .gItem{
            width:25%;
            display: inline-block;
            padding:10px 0;
            .gIcon{
                width:24px;
                margin:0 auto;
                img{
                    width:100%;
                }
            }
            .gName{
                font-size: 10px;
                text-align: center;
                padding-top: 10px;;
            }
        }
    }
}
</style>