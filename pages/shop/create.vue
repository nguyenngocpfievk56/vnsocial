<template>
  <div>
    <v-col md="8" offset-md="2">
      <div>
        <v-avatar class="mb-5">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwX5GQqU8SYa9KSp03vJsx7uTV_Qa-Xh6HPDZovIKVfkVuPHWF&usqp=CAU" />
        </v-avatar>
        <b>{{userInfo.name}}</b>
      </div>
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
      <TextField :label="'nhập tên'" :doUpdate="updatecontent" :error="contentError"/>
        <TextField :label="'giá'" :doUpdate="updateprice" :error="priceError"/>
         <TextField :label="'quốc gia'" :doUpdate="updatecountry" :error="countryError"/>
        <TextField :label="'mô tả'" :doUpdate="updatedescription" :error="descriptionError"/>

      <!-- <TextField :label="'nhập đường dẫn ảnh'" :error="ErrorImg" :doUpdate="updateImg" /> -->
      <div class="text-center mb-10">
        <v-btn color="green" @click="rotate">Xoay ảnh</v-btn>
        <v-btn class="ma-2" color="gray darken-2" dark to="/shop">
          <v-icon dark left>mdi-arrow-left</v-icon>canel
        </v-btn>
        <v-btn rounded color="primary" dark @click="doShop">Đăng</v-btn>
      </div>
    </v-col>
  </div>
</template>

<script>
  import TextField from "~/components/common/form/TextField";
  import { mapState, mapActions } from 'vuex';
  import axios from 'axios';

  export default {
    name: "ShopCreatePage",
    data() {
      return {
        content: '',
        contentError: '',
        price :'',
        priceError:'',
        country:'',
        countryError:'',
        description: '',
        descriptionError:'',
        myCroppa: null,
      }
    },
    computed: {
      ...mapState('user', {
        userInfo: 'info'
      }),
    },
    components: {
    TextField
  },
    methods: {

    ...mapActions({
      doShop: "shop/ToShop"
    }),
      doShop() {
       if (this.content) {
        this.myCroppa.generateBlob((blob, err) => {
          if (blob) {
            const formData = new FormData();
            formData.append("img", blob);
            var data = {
                content: this.content,
                country: this.country,
                price: this.price,
                description: this.description,
                user_id: this.userInfo._id,
              }
            formData.append('data', JSON.stringify(data))
            axios
              .post("/api/shop/create", formData)
              .then(res => {
                console.log(res);
                this.$router.push("/shop");
              })
              .catch(err => {
                console.log(err);
              });
          }
        });
        } else {
          this.contentError = "Hãy nhập dữ liệu!";
        }
      },
      updatecontent(newcontent) {
      this.content = newcontent;
    },
    updateimg(newimg) {
      this.img = newimg;
    },
  
     updateprice(newprice) {
      this.price = newprice;
    },
     updatecountry(newcountry) {
      this.country = newcountry;
    },
  
   updatedescription(newdescription) {
      this.description = newdescription;
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