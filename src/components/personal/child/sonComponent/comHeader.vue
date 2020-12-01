<template>
    <div class="header-wrapper">
        <div class="header">
            <h1>举报违规</h1>
        </div>
        <div class="container">
            <ol>
                <li>
                    1.
                    请提供充分的证据确保举报成功,珍惜会员权利,帮助更好管理会员网站
                </li>
                <li>
                    2.
                    被举报商品信息不能反复提交,下架商品不能举报,商家继续上传违规商品可进行举报
                </li>
                <li>3. 举报进针对商品本身,若产生纠纷可进行投诉</li>
                <li>4. 举报按顺序进行,上传图片包括三张</li>
            </ol>
        </div>
        <h6>举报商品</h6>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header-wrapper {
    .header {
        margin: 20px;
        border-bottom: 1px solid #e7e7e7;
        padding-bottom: 10px;
        width: 800px;
        h1 {
            color: #d19e29;
            font-size: 16px;
            // border-bottom: 2px solid #d19e29
        }
    }
    .container {
        background: #eff8ff;
        display: flex;
        margin: 0 15px;
        ol {
            padding: 30px;
            li {
                padding: 5px;
            }
        }
    }
    h6 {
        font-size: 17px;
        border-bottom: 1px solid #e3e3e3;
        margin: 16px;
        padding-bottom: 7px;
    }
}
</style>
