<template>
  <div>
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
      </v-img>
 <v-card-title>{{ post.title }}</v-card-title>
 <v-rating
          :value="5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <p>$ • Italian, Cafe</p>
      
      <v-card-subtitle class="pb-0">{{ post.date }}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ post.description }}</div>
      </v-card-text>
 <span class="ml-4">{{ post.address }}</span>
      <v-card-actions>
        <v-avatar class="mr-2">
          <img
            :src="post.user.avatar"
          >
        </v-avatar>
        {{ post.user.name }}
      </v-card-actions>
    </v-card>
    <div class="text-center">
    <hr class="ma-3">
<v-btn rounded color="primary" @click="goTo('shop/create')">Thêm sản phẩm</v-btn></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1234,
          img:"https://cdn.vuetifyjs.com/images/cards/cooking.png",
          title: "Cafe Badilico",
          description: "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.?",
          likes: 77,
          address:"London",
          comments: 100,
          date: "Ngày 16/03/2020",
          user: {
            id: 27,
            avatar: "https://www.flaticon.com/premium-icon/icons/svg/2412/2412363.svg",
            name: "England",
          }
        },
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
<style>
  .v-rating{
    margin-left:15px;
  }
  .v-application p{
    margin-bottom:0px;
     margin-left:15px;
  }
</style>