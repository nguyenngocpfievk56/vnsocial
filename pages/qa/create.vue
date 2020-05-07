<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="6" offset-md="3">
        <h1 class="mb-4">Bạn muốn hỏi gì, {{ userInfo.name }}</h1>
        <div class="text-center">
          <croppa v-model="myCroppa"
              :width="500"
              :height="400"
              placeholder="Hãy chọn hình ảnh"
              :placeholder-font-size="20"
              :disabled="false"
              :prevent-white-space="true"
              :show-remove-button="true"
              :remove-button-size="40"
              remove-button-color="black">  
          </croppa >
          <br>
          <v-btn color="success" fab outlined small @click="rotate">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </div>

        <v-text-field
          v-model="content"
          label="Nội dung câu hỏi"
          class="mt-3"
          single-line
          hide-details="auto"
          :error-messages="contentError"
          outlined
        ></v-text-field>
        <v-textarea
          v-model="description"
          label="Mô tả chi tiết"
          class="my-2"
          hide-details="auto"
          single-line
          outlined
        ></v-textarea>
        <v-btn @click="doPost" block color="blue" dark>Đăng câu hỏi</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import axios from 'axios';

  export default {
    name: "QACreatePage",
    data() {
      return {
        content: '',
        contentError: '',
        description: '',
        myCroppa: null,
      }
    },
    computed: {
      ...mapState('user', {
        userInfo: 'info'
      }),
    },
    methods: {
      doPost() {
        if (this.content) {
          this.myCroppa.generateBlob((blob, err) => {
            if (blob) {
              const formData = new FormData();
              formData.append('img', blob);
              var data = {
                content: this.content,
                user_id: this.userInfo._id,
                description: this.description
              }
              formData.append('data', JSON.stringify(data))
              axios
                .post('/api/qa/create', formData)
                .then((res) => {
                  this.$router.push("/qa");
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          })
        } else {
          this.contentError = "Hãy nhập câu hỏi!";
        }
      },
      rotate() {
        this.myCroppa.rotate(1);
      },
    },
    watch: {
      content (newValue, oldValue) {
        if (newValue) {
          this.contentError = "";
        }
      }
    }
  }
</script>