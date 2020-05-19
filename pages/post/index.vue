<template>
  <div>
    <v-btn class="mx-auto" rounded color="primary" dark @click="goTo('post/create')">Tạo bài viết</v-btn>
    <hr class="ma-3" />
    <v-row>
    <PostElement v-for="(post, index) in posts" :key="index" :post="post"  :handleClick="handleClick" />
    <PostDialogs />
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { axios } from "axios";
import PostElement from "~/components/post/Element";
import PostDialogs from "~/components/post/Dialog";
export default {
  methods: {
    goTo(url) {
      this.$router.push({ path: url });
    },
    ...mapActions({
      getPosts: "post/getPosts"
    }),
    ...mapMutations({
      setCurrentPost: 'post/SET_CURRENT_POST',
      setShowDialog: 'post/SET_SHOW_DIALOG'
    }),
    handleClick (post) {
      this.setCurrentPost({
        currentPost: post
      })
    }
  },
  components: {
    PostElement,
    PostDialogs
  },
  computed: {
    ...mapState("post", {
      posts: "posts",
      currentPost : "currentPost"
    })
  },
  mounted() {
    this.getPosts();
  },
};
</script>