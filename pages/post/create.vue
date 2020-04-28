<template>
  <div>
    <v-col md="8" offset-md="2">
      <div>
        <v-avatar class="mb-5">
          <img
            src="https://specials-images.forbesimg.com/imageserve/1183266467/960x0.jpg?"
            alt="Hùng Chu"
          />
        </v-avatar>
        <b>Hùng Chu</b>
      </div>
      <TextArea :label="'Nhập nội dung bài viết'" :error="ErrorPost" :doUpdate="updateContent"/>

        <!-- <v-file-input 
          class="ma-auto"
          style="width: 200px"
          label="Thêm ảnh"
          filled prepend-icon="mdi-camera"
          ></v-file-input> -->
      <TextField :label="'nhập đường dẫn ảnh'" :error="ErrorImg" :doUpdate="updateImg" />
      <div class="text-center">
        <v-btn class="ma-2" color="gray darken-2" dark to="/post">
          <v-icon dark left>mdi-arrow-left</v-icon>Back
        </v-btn>
        <v-btn rounded color="primary" dark @click="Post">Đăng</v-btn>
      </div>
    </v-col>
  </div>
</template>
<script>
import TextArea from "~/components/common/form/TextArea";
import TextField from "~/components/common/form/TextField";
import axios from 'axios';
export default {
  name: "CreatePost",
  data() {
    return {
      content: "",
      img: "",
      ErrorPost: "",
      ErrorImg: ""
    };
  },
  components:{
    TextArea,
    TextField
  },
  methods: {
    ...mapActions({
        doPost: 'post/ToPost',
      }),
    Post() {
      this.ErrorPost = this.content ? '' : "hãy nhập nội dung bài viết";
      this.ErrorImg = this.img ? '' : "hãy nhập đường dẫn ảnh";
      if(this.ErrorPost || this.ErrorImg) return;


      var params = {
        content: this.content,
        img: this.img
      }
      axios.post('/api/post/create', params)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        cosole.log(err)
      })
    },
    updateContent(newContent){
      this.content= newContent;
    },
    updateImg(newImg){
      this.img= newImg;
    }
  },
  watch: {
      toPosts (newValue, oldValue) {
        if (newValue._id) {
          alert("đăng bài thành công");
          this.$router.push('/post')
        }
      }
    },
};
</script>