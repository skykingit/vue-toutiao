<template>
    <section class="contentArea">
        <NewsItem 
        v-for="news in newList"
        v-bind:key="news.id"
        :newsData="news"
        :type="news.type"
        :title="news.title"
        :author="news.author"
        :commentNumber="news.commentNumber"
        ></NewsItem>
    </section>
</template>
<script>
import JSONData  from '../../config/JSONData'
import NewsItem from '../../components/NewsItem.vue'
export default {
    data:()=>{
        return{ newList:JSONData.News}
    },
    components:{
        NewsItem
    }
}
</script>
<style lang="scss" scoped>
.contentArea{
    width: 100%;
    padding: 70px 10px  50px;
}
</style>