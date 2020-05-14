<template>
  <div class="text-center">
    <v-dialog @input="closeDialog" v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          <v-card-actions>
            <v-avatar class="mr-1">
              <img src="https://specials-images.forbesimg.com/imageserve/1183266467/960x0.jpg?" />
            </v-avatar>
             hungchu2
          </v-card-actions>
        </v-card-title>

        <v-card-text>{{currentPost.content}}</v-card-text>
        <v-img class="pa-1" v-if="currentPost.img" :src="currentPost.img"></v-img>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog">Đóng</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapState("post", {
      showDialog: "showDialog",
      currentPost: "currentPost",
      posts: "posts",
    }),
     
  },
  methods: {
    ...mapMutations({
      setShowDialog: "post/SET_SHOW_DIALOG",
    }),
    closeDialog() {
      this.dialog = false;
      this.setShowDialog({ showDialog: false });
    }
  },

  mounted() {
    this.dialog = this.showDialog;
  },
  watch: {
    showDialog(newValue, oldValue) {
      this.dialog = newValue;
    }
  }
};
</script>