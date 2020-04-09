<template>
    <div class="newsItemArea">
        <div class="item" v-if="type == 0">
            <div class="title">{{title}}</div>
            <div class="tip">
                <span class="type">置顶</span>
                <span class="author">{{author}}</span>
                <span class="commentNumber">{{commentNumber}}评论</span>
            </div>
        </div>
        <div class="item" v-if="type == 1">
            <div class="title">{{title}}</div>
            <div class="imgList">
                <div class="imgItem">
                    <img :src='"../assets/s1.jpeg"'>
                </div>
                <div class="imgItem">
                    <img :src='"../assets/s1.jpeg"'>
                </div>
                <div class="imgItem">
                    <img :src='"../assets/s1.jpeg"'>
                </div>
            </div>
            <div class="tip">
                <span class="author">{{author}}</span>
                <span class="commentNumber">{{commentNumber}}评论</span>
                <span class="time">{{newsData.time}}</span>
            </div>
        </div>
        <div class="item" v-if="type == 2">
            <div class="newsHead">
                <div class="userImg">
                    <img :src='"../assets/zym.jpeg"'>
                </div>
                <div class="hTitle">
                    {{author}}
                </div>
                <div class="hAuth">
                    {{newsData.authentication}}
                </div>
            </div>
            <div class="title">{{title}}</div>
            <div class="newsImg">
                <img :src='"../assets/s2.jpeg"' alt="">
            </div>
            <div class="tip">
                <span class="author">{{author}}</span>
                <span class="commentNumber">{{commentNumber}}评论</span>
                <span class="time">{{newsData.time}}</span>
            </div>
        </div>

        
    </div>
</template>
<script>
export default {
    props:{
        newsData:Object,
        type:Number,
        title:String,
        author:String,
        commentNumber:Number
    }
}
</script>
<style lang="scss" scoped>
.newsItemArea{
    width:100%;
    margin:10px 0;
    text-align: left;
    border-bottom: 1px solid #f9f2f2;
    .title{
        color: black;
        font-size: 16px;
        line-height: 24px;
    }
    .tip{
        line-height: 20px;
        font-size: 8px;
        .type{
            color: red;
        }
        span{
            padding-right: 4px;
        }
        .author,.commentNumber,.time{
            color: grey;
        }
    }
    .imgList{
        width:100%;
        font-size: 0;
        .imgItem{
            width:33.33%;
            float: left;
            padding:0px 3px;
            img{
                width:100%;
            }
        }
    }
    .newsHead{
        position: relative;
        padding-left:30px;
        height: 30px;
        .userImg{
            position: absolute;
            left:0;
            top:0;
            width:24px;
            height:24px;
            border-radius: 12px;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        .hTitle{
            line-height: 14px;
            font-size: 12px;
        }
        .hAuth{
            line-height: 10px;
            font-size: 8px;
            color: grey;
        }
    }
    .newsImg{
        img{
            width:100%;
        }
    }
}
</style>