<template>
  <div>
    <v-col md="8" offset-md="2">
      <div>
        <v-avatar class="mb-5">
          <img
            src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/s960x960/57101597_2355240434757259_6901541664716750848_o.jpg?_nc_cat=110&amp;_nc_sid=85a577&amp;_nc_oc=AQmDe8xSN2nMHGqhccAMVfekuicT9Std4MmT4lQ5aeSILoYoPJwLAUbQegme0APolgA&amp;_nc_ht=scontent.fhan2-4.fna&amp;_nc_tp=7&amp;oh=71c64482534f471a4de599f16849f1fc&amp;oe=5E902CCD"
            alt="Hùng Chu"
          />
        </v-avatar>
        <b>Hùng Chu</b>
      </div>
      <v-textarea
        v-model="post"
        label="Tạo bài viết"
        outlined
        dense
        height="150px"
        :error-messages="Errospost"
      >   
      </v-textarea>
      <div> 
      <v-btn class="ma-2" color="indigo" dark>
        <v-icon dark>mdi-cloud-upload</v-icon>
      </v-btn>
      </div>
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
export default {
  name: "CreatePost",
  data() {
    return {
      post: "",
      Errospost: ""
    };
  },
  methods: {
    Post() {
      if (!this.post) {
        this.Errospost = "Hãy nhập nội dung bài viết";
      } else {
        (Errospost = "false"), (this.Errospost = "");
      }
    }
  }
};
</script>