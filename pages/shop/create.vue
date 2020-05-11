<template>
<v-row>
  <v-col
  
    md="6"
    offset-md="3">
    <TextField :label="'nhap link anh'" :error="imgError" :doUpdate="updateimg" />
         <TextField :label="'tên sản phẩm'" :doUpdate="updateProductName" :error="ProductNameError"/>
        <TextField :label="'giá'" :doUpdate="updateprice" :error="priceError"/>
        <TextField :label="'mô tả'" :doUpdate="updateDescription" :error="DescriptionError"/>
        <v-btn color="primary" class="mt-2" to="/shop">Cancel</v-btn>
     <v-btn @click="doCreate" color="teal" dark class="mt-2" >Đăng</v-btn>

  </v-col>
</v-row>
</template>
 

<script>
import TextField from '~/components/common/form/TextField';
import TextArea from "~/components/common/form/TextArea";
import { mapState, mapActions } from 'vuex';
  import axios from 'axios';

export default {
  name:"CreateShop",
 data() {
    return {
      img: '',
      imgError: '',
      ProductName:'',
      price: '',
      Description:'',
       imgError: '',
      ProductNameError:'',
      priceError:'',
      DescriptionError:'',
    }
  },
   components: {
    TextArea,
    TextField
  },
  computed: {
    ...mapState("user", {
      userInfo: "info",
      userIsLoading: "isLoading"
    }),
    ...mapState("shop",{
      toShop: "shops",
    })
  },
  methods: {
    ...mapActions({
        doCreate: 'shop/ToShops',
      }),
      updateimg(newimg){
        this.img = newimg;
      },
      updateProductName(newProductName) {
        this.ProductName = newProductName;
      },
      updateprice(newprice) {
        this.price = newprice;
      },
      updateDescription(newDescription) {
        this.Description = newDescription;
      },
      doCreate() {
      
       console.log(this.ProductName, this.price, this.Description, this.img)

     if(!this.img){
      this.imgError = "vui long chon 1 anh";
     }else{
          this.imgError="";
      }

       if(!this.ProductName){
         this.ProductNameError="Vui lòng nhập tên sp";
       }else{
         this.ProductNameError="";
       }
       if(!this.price){
         this.priceError="Vui lòng nhập giá tiền";
       }else{
         this.priceError="";
       }
       if(!this.Description){
         this.DescriptionError="Không được để trống"
       }
       else{
         this.DescriptionError="";
       }
       if (this.ProductNameError || this.priceError || this.DescriptionError)
       return;
         var params = {
           img: this.img,
            ProductName: this.ProductName,
            price: this.price,
            Description: this.Description,
         };
         console.log(params);
     axios.get('/api/shop/create', params)
        .then(res => {
          alert("thêm sản phẩm thành công");
          this.$router.push('/shop')
        })
        .catch(err => {
          console.log(err);
        });
  },
  },
   components: {
      TextField
    },
     watch: {
      toShops (newValue, oldValue) {
        if (newValue._id) {
          alert("thêm sản phẩm thành công");
          this.$router.push('/shop')
        }
      }
    },
}
</script>
