<template>
    <div>
        <Header/>
        <Undevelopment :pageTitle="'放映厅'" />
        <Footer/>
    </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Undevelopment from './pages/Undevelopment.vue'
export default {
    components:{
        Header,
        Footer,
        Undevelopment
    }
}
</script>