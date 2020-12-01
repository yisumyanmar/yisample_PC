<template>
  <div id="add"></div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  created(){
    this.HTTP(this.$httpConfig.randStore, {}, 'post').then((res) => {
          alert(res.data.message);
      }).catch(e=>{
        console.log(e)
      })
  },
}
</script>