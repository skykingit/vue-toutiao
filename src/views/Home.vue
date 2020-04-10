<template>
    <div>
        <Header/>
        <PageSlider/>
        <div>
            <!-- <router-view></router-view> -->
            <recommand v-if="activeNavIndex == 1" />
            <Undevelopment v-if="activeNavIndex != 1" :pageTitle="navListData[activeNavIndex].name" />
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageSlider from '../components/PageSlider.vue'
import Recommand from './pages/Recommand.vue'
import Undevelopment from './pages/Undevelopment.vue'
import {mapGetters} from 'vuex'
export default {
    computed:mapGetters([
        'activeNavIndex',
        'navListData'
    ]),
    components:{
        Header,
        Footer,
        PageSlider,
        Recommand,
        Undevelopment
    }
}
</script>