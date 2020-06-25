<template>
  <div>
    <v-btn class="mx-auto" rounded color="primary" dark @click="goTo('post/create')">Tạo bài viết</v-btn>
    <hr class="ma-3" />
    <v-row>
    <PostElement v-for="(post, index) in posts" :key="index" :post="post"  :handleClick="handleClick" />
    <PostDialogs />
    </v-row>
    <div class="text-center">
      <v-btn @click="loadMore"> Xem thêm</v-btn>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { axios } from "axios";
import PostElement from "~/components/post/Element";
import PostDialogs from "~/components/post/Dialog";
export default {
  data(){
    return{
      page: 1
    }
  },
  methods: {
    goTo(url) {
      this.$router.push({ path: url });
    },
    ...mapActions({
      getPosts: "post/index",
      paginate: "post/loadMore",
    }),
    ...mapMutations({
      setCurrentPost: 'post/SET_CURRENT_POST',
      setShowDialog: 'post/SET_SHOW_DIALOG'
    }),
    handleClick (post) {
      this.setCurrentPost({
        currentPost: post
      })
    },
    loadMore(){
      this.page ++;
      this.paginate(this.page);
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
    this.getPosts(this.page);
  },
};
</script>