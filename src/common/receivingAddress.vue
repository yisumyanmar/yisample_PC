<template>
    <div style="margin-left: 15px">
        <el-select v-model="value" @change="selectAddress">
            <el-option
                v-for="(item,index) in defaultAddress"
                :key="index"
                :label="item.address"
                :value="item.id">
            </el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                onoff: false,
                defaultAddress: [],
                n: 0,
                value: "",
            }
        },
        mounted() {
            this.onofftrue();
        },
        methods: {
            onofftrue() {
                this.n++
                if (this.n <= 1) {
                    this.HTTP(this.$httpConfig.addressLists, {}, 'post').then(res => {
                        console.log(res.data.data, 222321321);
                        this.defaultAddress = [];

                        res.data.data.forEach((item, index) => {
                            var obj = {};
                            var str = item.prov_name + item.city_name + item.dist_name + item.address;
                            obj.address = str;
                            obj.prov = item.prov;
                            obj.id = item.id;
                            this.defaultAddress.push(obj)
                        })
                        this.value = this.defaultAddress[0].id;
                        this.$emit('trigger',this.defaultAddress[0].prov)
                    }).catch(err => {
                        console.log(err);
                    })
                }
                this.onoff = false

            },
            selectAddress(){
                console.log(this.value)
                this.defaultAddress.forEach((item,index)=>{
                    if(item.id == this.value){
                        this.$emit('trigger',item.prov)
                    }
                })
            },
            onofffalse() {
                this.onoff = false
            },

        }
    }
</script>

<style lang="less" scoped>
    .l {
        float: left;
    }

    .r {
        float: right;
    }

    .gp-area-wrap {
        position: relative;
        float: left;
        z-index: 5;
        height: 24px;
        cursor: default;

        .gp-area-text-wrap {
            float: left;
            position: relative;
            top: 0;
            height: 22px;
            background: #fff;
            border: 1px solid #CECBCE;
            padding: 0 20px 0 4px;
            line-height: 22px;
            overflow: hidden;

            .gp-area-text {
                line-height: 22px;
            }

            i {
                position: absolute;
                top: 5px;
                right: 5px;
            }
        }

        .gp-area-content {
            position: absolute;
            top: 22px;
            width: 460px;
            height: 100px;
            border: 1px solid #CECBCE;
            width: 390px;
            padding: 12px 12px 15px;
            background: #fff;
            // -webkit-box-shadow: 0 0 5px #ddd;
            box-shadow: 0 0 5px #ddd;
        }
    }

    .hover {
        .gp-area-text-wrap {
            height: 23px;
            z-index: 8;
            border-bottom: none;
        }
    }
</style>
