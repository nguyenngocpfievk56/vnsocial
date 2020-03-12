<template>
  <div class="text-center">
    <v-btn rounded color="primary" dark @click="goTo('post/create')">Tạo bài viết</v-btn>
    <hr class="ma-3">

    <v-card
      v-for="(post, index) in posts"
      :key="index"
      class="mx-auto mb-3"
      max-width="400"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="post.img"
      >
        <v-card-title>{{ post.title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">{{ post.date }}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ post.description }}</div>
      </v-card-text>

      <v-card-actions>
        <v-avatar class="mr-2">
          <img
            :src="post.user.avatar"
          >
        </v-avatar>
        {{ post.user.name }}
      </v-card-actions>
    </v-card>

  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1234,
          img: "https://picsum.photos/510/300?random",
          title: "Hôm nay trời nắng đẹp quá",
          description: "Trời nắng thế này, thì nên ăn gì nhỉ?",
          likes: 77,
          comments: 100,
          date: "Ngày 12/03/2020",
          user: {
            id: 27,
            avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
            name: "Ngoc",
          }
        },
        {
          id: 1235,
          img: "https://picsum.photos/510/300?random",
          title: "Hôm nay trời mưa",
          description: "Trời mưa thế này, thì nên ăn gì nhỉ?",
          likes: 16,
          comments: 11,
          date: "Ngày 11/03/2020",
          user: {
            id: 27,
            avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
            name: "Hồng",
          }
        },
        {
          id: 1236,
          img: "https://picsum.photos/510/300?random",
          title: "Hôm nay trời có tuyết",
          description: "Nói điêu, việt nam ko có tuyết đâu",
          likes: 1,
          comments: 1,
          date: "Ngày 10/03/2020",
          user: {
            id: 27,
            avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
            name: "Ngoc",
          }
        }
      ]
    }
  },
  methods:{
    goTo(url){
        this.$router.push({path: url})
    }
  }
}
</script>