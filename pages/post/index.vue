<template>
  <div class="text-center">
    <v-btn rounded color="primary" dark @click="goTo('post/create')">Tạo bài viết</v-btn>
  </div>
</template>
<script>
export default {
  methods:{
    goTo(url){
        this.$router.push({path: url})
    }
  }
}
</script>