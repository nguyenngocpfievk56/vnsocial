<template>
  <div>
    <v-col md="8" offset-md="2">
      <div>
        <v-avatar class="mb-5">
          <img src="https://specials-images.forbesimg.com/imageserve/1183266467/960x0.jpg?" />
        </v-avatar>
        <b>{{userInfo.name}}</b>
      </div>
      <TextArea :label="'Nhập nội dung bài viết'" :error="ErrorPost" :doUpdate="updateContent" />
      <div class="text-center">
        <croppa
          v-model="myCroppa"
          :width="500"
          :height="400"
          class="mx-auto"
          placeholder="Hãy chọn hình ảnh"
          :placeholder-font-size="20"
          :disabled="false"
          :prevent-white-space="true"
          :show-remove-button="true"
          :remove-button-size="40"
          remove-button-color="black"
        ></croppa>
      </div>

      <!-- <TextField :label="'nhập đường dẫn ảnh'" :error="ErrorImg" :doUpdate="updateImg" /> -->
      <div class="text-center mb-10">
        <v-btn color="yellow" @click="xoayAnh">Xoay ảnh</v-btn>
        <v-btn class="ma-2" color="gray darken-2" dark to="/post">
          <v-icon dark left>mdi-arrow-left</v-icon>Back
        </v-btn>
        <v-btn rounded color="primary" dark @click="doPost">Đăng</v-btn>
      </div>
    </v-col>
  </div>
</template>
<script>
import TextArea from "~/components/common/form/TextArea";
import TextField from "~/components/common/form/TextField";
import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
  name: "CreatePost",
  middleware: "unAuthenticated",
  data() {
    return {
      content: "",
      img: "",
      ErrorPost: "",
      myCroppa: null
    };
  },
  components: {
    TextArea,
    TextField
  },
  computed: {
    ...mapState("user", {
      userInfo: "info"
    }),
    ...mapState("post", {
      toPosts: "posts"
    })
  },
  methods: {
    ...mapActions({
      doPost: "post/ToPost"
    }),
    xoayAnh() {
      this.myCroppa.rotate(1);
    },
    doPost() {
      if (this.content) {
        // this.myCroppa.generateBlob((blob, err) => {
        //   if (blob) {
            const formData = new FormData();
            // formData.append("img", blob);
            var data = {
                content: this.content,
                user_id: this.userInfo._id,
              }
            console.log(data);
            // formData.append('data', JSON.stringify(data))
            axios
              .post("/api/post/create", data)
              .then(res => {
                alert("đăng bài thành công");
                this.$router.push("/post");
              })
              .catch(err => {
                console.log(err);
              });
          // }
        // });
      } else {
        this.ErrorPost = "Hãy nhập nội dung bài post";
      }
    },
    updateContent(newContent) {
      this.content = newContent;
    },
    updateImg(newImg) {
      this.img = newImg;
    }
  },
  watch: {
    content(newValue, oldValue) {
      if (newValue) {
        this.ErrorPost = "";
      }
    }
  }
};
</script>