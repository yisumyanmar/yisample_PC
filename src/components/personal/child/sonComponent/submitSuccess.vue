<template>
    <div class="success-wrapper">
        <com-header></com-header>
        <img src="@/assets/img/notice_3.jpg" alt="" />
        <el-button @click="backHome">返回主页</el-button>
    </div>
</template>

<script>
import ComHeader from "./comHeader";
export default {
    data() {
        return {};
    },
    methods: {
        backHome() {
            this.$emit("handleBack");
        }
    },
    components: {
        ComHeader
    }
};
</script>
<style lang="less">
.success-wrapper {
    .el-button {
        position: relative;
        left: 46%;
        margin: 10px 0px;
    }
}
</style>
<style lang="less" scoped>
.success-wrapper {
    img {
        display: block;
        margin: 10px auto;
    }
}
</style>
