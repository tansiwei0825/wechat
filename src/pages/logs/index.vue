<template>
    <div>
        logs
        <button type="primary" @click="godetail()" size="primarySiz"> 点击</button>
    </div>
</template>

<script>
export default {
    methods: {
        godetail(){
            console.log('aa')
            wx.navigateTo({ url: '/pages/detail/main?tab=2' });
        }
    },
    mounted() {
        const pages = getCurrentPages()
        console.log(pages)
    }
}
</script>