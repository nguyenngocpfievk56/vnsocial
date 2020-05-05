<template>
  <v-col md="4">
    <v-card class="mx-auto" max-width="380">
      <v-img class="white--text align-end" height="200px" :src="post.img"></v-img>

      <v-card-subtitle class="pb-0">{{ post.created_at }}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ post.content }}</div>
      </v-card-text>

      <v-card-actions>
        <v-avatar class="mr-2">
          <img src="https://specials-images.forbesimg.com/imageserve/1183266467/960x0.jpg?" />
        </v-avatar>
        {{ post.user.name }}
      </v-card-actions>

    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "PostElement",
  props: {
    post: {
      type: Object,
      default: {}
    }
  }
};
</script>