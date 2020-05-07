<template>
  <div>
    <v-btn class="mx-auto" rounded color="primary" dark @click="goTo('post/create')">Tạo bài viết</v-btn>
    <hr class="ma-3" />
    <v-row>
    <PostElement v-for="(post, index) in posts" :key="index" :post="post" />
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { axios } from "axios";
import PostElement from "~/components/post/Element";
export default {
  methods: {
    goTo(url) {
      this.$router.push({ path: url });
    },
    ...mapActions({
      getPosts: "post/getPosts"
    })
  },
  components: {
    PostElement
  },
  computed: {
    ...mapState("post", {
      posts: "posts"
    })
  },
  mounted() {
    this.getPosts();
  }
};
</script>