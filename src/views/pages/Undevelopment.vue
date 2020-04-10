<template>
    <section class="contentArea">
        <div class="topArea">
            <div class="iconImg">
                <img src="../../assets/development.png" alt="开发中">
            </div>
            <div class="tips">
                <span>{{pageTitle}}</span>页面开发中.........
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props:{
        pageTitle:{
            type:String,
            default:"当前"
        }
    }
}
</script>
<style lang="scss" scoped>
.contentArea{
    width: 100%;
    padding: 70px 10px  50px;
    .topArea{
        margin-top:40px;
        .iconImg{
            width:60%;
            margin-left:20%;
            img{
                width:100%;
            }
        }
        .tips{
            text-align: center;
            padding: 0;
            font-size: 16px;
            span{
                color: red;
            }
        }
    }
}
</style>