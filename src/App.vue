<template>
    <div id="web" v-show="$constant.copyright">
        <router-view :key="$route.path + $route.query.id"></router-view>
    </div>
</template>
<script>
import $ from "jquery";
export default {
    data() {
        return {};
    },
    created() {},
    methods: {},
    mounted() {}
};
</script>
<style>
html,
body {
    width: 100%;
    height: 100%;
}
</style>

<style lang="less" scoped>
#web {
    width: 100%;
    height: 100%;
}
</style>
