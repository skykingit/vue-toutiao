<template>
    <footer>
        <router-link to="/home" class="fItem">
            <div class="fIconArea">
                <img src="../assets/icon/home.svg" class="fIcon" alt=""> 
                <img src="../assets/icon/homeHover.svg" class="activeIcon" alt="">
            </div>
            <div class="fTitle">
                首页    
            </div>
        </router-link>
        <router-link to="/xigua" class="fItem">
            <div class="fIconArea">
                <img src="../assets/icon/xigua.svg" class="fIcon" alt=""> 
                <img src="../assets/icon/xiguaHover.svg" class="activeIcon" alt="">
            </div>
            <div class="fTitle">
                西瓜视频    
            </div>
        </router-link>
        <router-link to="/hot" class="fItem">
            <div class="fIconArea">
                <img src="../assets/icon/search.svg" class="fIcon" alt=""> 
                <img src="../assets/icon/searchHover.svg" class="activeIcon" alt="">
            </div>
            <div class="fTitle">
                热搜    
            </div>
        </router-link>
        <router-link to="/movie" class="fItem">
            <div class="fIconArea">
                <img src="../assets/icon/video.svg" class="fIcon" alt=""> 
                <img src="../assets/icon/videoHover.svg" class="activeIcon" alt="">
            </div>
            <div class="fTitle">
                放映厅    
            </div>
        </router-link>
        <router-link to="/user" class="fItem">
            <div class="fIconArea">
                <img src="../assets/icon/my.svg" class="fIcon" alt=""> 
                <img src="../assets/icon/myHover.svg" class="activeIcon" alt="">
            </div>
            <div class="fTitle">
                我的    
            </div>
        </router-link>
    </footer>
</template>

<style lang="scss" scoped>
footer{
    position: fixed;
    bottom: 0;
    height:50px;
    background-color: #f9f3f3;
    width: 100%;
    .fItem{
        width:20%;
        display: block;
        height: 100%;
        float: left;
        text-decoration: none;
        .fIconArea{
            width:20px;
            height:50%;
            margin:0 auto;
            padding-top: 2px;
        }
        img{
            width:20px;
        }
        .fTitle{
            font-size: 10px;
            color: black;
        }
        .activeIcon{
            display: none;
        }
    }
    .router-link-exact-active{
        .fTitle{
            color: red;;
        }
        .activeIcon{
            display: block;
        }
        .fIcon{
            display: none;
        }
    }
}
</style>