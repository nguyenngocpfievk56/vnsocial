<template>
<div>
  <v-btn rounded color="primary" dark @click="goTo('post/create')">Tạo bài viết</v-btn>
  <hr class="ma-3">
  <v-row>
    <v-card
      v-for="(Post, index) in Posts"
      :key="index"
      class="mx-auto mb-3"
      max-width="380"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="Posts.img"
      >
      </v-img>

      <v-card-subtitle class="pb-0">{{ Posts.created_at }}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ Posts.content }}</div>
      </v-card-text>

      <v-card-actions>
        <v-avatar class="mr-2">
          <img
            src="https://specials-images.forbesimg.com/imageserve/1183266467/960x0.jpg?"
          >
        </v-avatar>
        {{ userInfo.name }}
      </v-card-actions>
    </v-card>

  </v-row>
</div>
  
</template>
<script>
  import { mapState } from 'vuex';
export default {
  data(){
    return{
    }
  },
  computed: {
    ...mapState("post", {
      Posts: "posts",
    }),
    ...mapState("user", {
      userInfo: "info",
    })
  },
  methods:{
    goTo(url){
        this.$router.push({path: url})
    }
  },
}
</script>