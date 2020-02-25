<template>
    <div>
        跳转路由
    </div>
</template>

<script>
export default {
     mounted() {
        const pages = getCurrentPages()
        console.log(this)
        console.log(this.$root.$mp.query.tab)
    }
}
</script>