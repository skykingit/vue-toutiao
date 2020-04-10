<template>
    <section class="pSliderArea">
        <div v-swiper:mySwiper="swiperOption" class="sArea">
            <div class="swiper-wrapper">
                <div class="swiper-slide" :key="bannerItem.name" v-for="(bannerItem,index) in banners" :class="index == activeIndex?'activeNav':''" @click="switchNav(index)">
                    <!-- <router-link :to="bannerItem.router" :class="index == activeIndex?'activeNav':''"> -->
                        {{bannerItem.name}}
                        <div class="activeLine"></div>
                    <!-- </router-link> -->
                </div>
            </div>
        </div>
    </section>
  
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
  export default {
    data () {
      return {
        swiperOption: {
            freeMode:true,
            freeModeMomentumRatio:0.5,
            slidesPerView:'auto'
        }
      }
    },
    computed:mapGetters({
        banners:'navListData',
        activeIndex:'activeNavIndex'
    }),
    methods:mapActions([
        'switchNav'
    ]),
    mounted() {
      console.log('Current Swiper instance object', this.mySwiper)
    //   this.mySwiper.slideTo(3, 1000, false)
    }
  }
</script>
<style lang="scss" scoped>
.pSliderArea{
    position: fixed;
    top: 40px;
    left: 0;
    width: 100%;
    padding:0 10px;
    background-color: white;
    .sArea{
        .swiper-wrapper{
            padding-right:15px;
        }
        .swiper-slide{
            width:auto !important;
            padding:4px 2px 4px 2px;
            position: relative;
            font-size: 14px;
            a{
                text-decoration: none !important;
                color: black;
            }
            .activeLine{
                position:absolute;
                width:40%;
                height:1px;
                bottom: 0;
                left:30%;
            }
        }
        .activeNav{
            color: red;
            .activeLine{
                border-top:1px solid red;
            }
        }
    }
}
</style>