<template>
  <div class="text-center">
    <croppa v-model="myCroppa"
        v-if="initImg"
        :width="cWidth"
        :height="cHeight"
        :initial-image="initImg"
        placeholder="Hãy chọn hình ảnh"
        :placeholder-font-size="20"
        :disabled="false"
        :prevent-white-space="true"
        :show-remove-button="true"
        :remove-button-size="40"
        remove-button-color="black">  
    </croppa >
    <br>
    <v-btn @click="rotate" color="green" class="ma-1">Xoay ảnh</v-btn>
    <v-btn @click="uploadImage" color="teal" dark class="ma-1">Đăng ảnh</v-btn>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "",
    data() {
      return {
        myCroppa: null,
      }
    },
    props: {
      cWidth: Number,
      cHeight: Number,
      callback: Function,
      initImg: String
    },
    methods: {
      rotate() {
        this.myCroppa.rotate(1);
      },
      uploadImage() {
        this.myCroppa.generateBlob((blob, err) => {
          if (blob) {
            const formData = new FormData();
            formData.append('img', blob);
            axios
              .post('/api/upload/image', formData)
              .then((res) => {
                this.callback(res.data.url);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
      }
    },
  }
</script>