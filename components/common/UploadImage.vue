<template>
  <div class="text-center">
    <croppa v-model="myCroppa"
        :width="600"
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
    <v-btn @click="latNgang" color="error" class="ma-1">lat ngang</v-btn>
    <v-btn @clicl="latDoc" color="primary" class="ma-1">lat doc</v-btn>
    <v-btn @click="quay" color="green" class="ma-1">quay</v-btn>
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
    methods: {
      latNgang() {
        this.myCroppa.flipX();
      },
      latDoc() {
        this.myCroppa.flipY();
      },
      quay() {
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
                console.log(res);
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