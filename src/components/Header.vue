<template>
    <header>
        <div class="headContent">
            <div class="searchArea">
                <div class="searchIcon">
                    <img src="../assets/icon/search.svg" alt="Search">
                </div>
                <div class="recommandNews">
                    新加坡宣布封国 | 央视回应追责索赔
                </div>
            </div>
            <div class="issue">
                <div class="cameraIcon">
                    <img src="../assets/icon/camera.svg" alt="camera">
                </div>
                <div class="issueTitle">
                    发布
                </div>

            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
header{
    position: fixed;
    top: 0;
    height:40px;
    background-color: red;
    width: 100%;;
    padding: 5px 10px;
    .headContent{
        width:100%;
        height:100%;
        position: relative;
        .searchArea{
            background-color: white;
            margin-right: 30px;
            height: 100%;
            position: relative;
            border-radius: 15px;
            line-height: 30px;
            font-size: 12px;
            .searchIcon{
                position: absolute;
                top:0;
                bottom: 0;
                left:5px;
                margin: auto;
                img{
                    width:15px;
                };
            }
            .recommandNews{
                text-align: left;
                padding-left: 30px;
            }
        }
        .issue{
            position: absolute;
            right: 0;
            top: 0;
            width:30px;
            height: 100%;
            .cameraIcon{
                height: 20px;
                width: 20px;
                margin:-3px 5px 0;
                img{
                    width: 20px;
                }
            }
            .issueTitle{
                color: white;
                font-size: 10px;
            }
        }
    }
}
</style>