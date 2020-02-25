<template>
    <div>
        我的indexgggggdd
        <button type="primary" @click="primary()" size="primarySiz"> primary </button>
        <div>{{msg}}</div>
        <button type="warn" size="warnSize" @tap="warn"> warn </button>
        <div>
            <!-- <block v-for="(item,index) in arr" :key="index"> -->
                <ul>
                    <li :class="activeindex===index?'active':''" @click="dod(index)"  v-for="(item,index) in arr" :key="index">{{item}}</li>
                </ul>
            <!-- </block> -->
        </div>
        <list></list>   
        <div class="swiper-pic">
             <swiper indicator-dots="indicatorDots"
        autoplay="autoplay" circular="true">
          <swiper-item>
              <img src="/static/images/t1.jpg" alt="">    
          </swiper-item>
         <swiper-item>
              <img src="/static/images/t2.jpg" alt="">    
          </swiper-item>
          <swiper-item>
              <img src="/static/images/t1.jpg" alt="">    
          </swiper-item>
         <swiper-item>
              <img src="/static/images/t2.jpg" alt="">    
          </swiper-item>
      </swiper> 
        </div>
        <div class="rankbox" v-for="(item,index) in songlist" :key="index">
            <div class="rankbox1">
                <img :src="item.bg_pic" alt="">
            </div>
            <div class="rankbox2">{{item.comment}}</div>
        </div>
    </div>
</template> 

<script>
   import list from '../list/list.vue'
  import store from '../../store'
   import {
    mapState,
    mapGetters,
    mapActions
  } from "vuex"
  import Mylist from '../../datas/list-data.js'
export default {
    components:{
     list
    },
    store,
    mounted() {
        console.log(Mylist.list_data)
        const url= 'https://api.apiopen.top/musicRankings'
        console.log(this.getarr1)
       this.$fly.get(url).then(res => {
      this.songlist=res.data.result
       console.log(this.songlist)
    })
    },
    computed: {
        ...mapGetters(['getarr1'])
    },
    data(){
        return{
            msg:"谢谢",
            arr:["a","b","c"],
            activeindex:0,
            songlist:[]
        }
    },
    methods:{
        primary(){
           this.$store.dispatch('search',this.msg)
        },
       warn(){
wx.showLoading({
  title: '加载中',
})

setTimeout(function () {
  wx.hideLoading()
}, 2000)
       },
       dod(index){
        this.activeindex=index
       }           
    }
}
</script>

<style>
    .active{
        background: orange
    }
    .swiper-pic swiper{
        width: 100%;
        height: 500rpx;
    }
    swiper-item img{
        width: 100%
    }
    .rankbox{
        width: 90%;
        margin: 20rpx auto;
    }
    .rankbox1{
        width: 100%;
        height: 200rpx;
        text-align: center
    }
    .rankbox1 img{
        width: 100%;
         height: 200rpx;
    }
</style>