<template>
    <div class="footer-detail-wrapper">
        <ul>
            <li
                v-for="(item, index) in navList"
                :key="index"
                @click="handleItemClick(index)"
            >
                {{ item }}
            </li>
        </ul>
        <div class="show-wrapper">
            <div class="show-com">
                ICP备{{
                    footInfo.record_number
                }}号|有任何问题请联系我们在线客服 电话：{{
                    footInfo.intnet_phone
                }}
            </div>
            <div class="show-com">{{ footInfo.intnet_licence }}</div>
            <div class="show-com">{{ footInfo.intnet_copyright }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            footInfo: {},
            navList: ["关于我们", "帮助中心", "商家入驻", "联系我们"]
        };
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
        this.footInfo = JSON.parse(sessionStorage.webKey);
        this.$emit('handleItemInfo',this.footInfo)
    },
    methods: {
        handleItemClick(index) {
            this.$router.push({
                name: "guide"
            });
        }
    },
    components: {}
};
</script>
<style lang="less">
.footer-detail-wrapper {
}
</style>
<style lang="less" scoped>
.footer-detail-wrapper {
    position: fixed;
    width: 100%;
    height: 15%;
    bottom: 0;
    background: #f1f1f1;
    z-index: 111;
    overflow-y: scroll;
    ul {
        display: flex;
        justify-content: center;
        li {
            margin: 10px;
            color: #a6a6a6;
            cursor: pointer;
            &:hover{
                color: rgba(142, 202, 206, 0.776);
            }
        }
    }
    .show-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        .show-com {
            line-height: 25px;
            color: #a6a6a6;
        }
    }
}
</style>
