
<template>

<v-row>
  <v-col
    md="6"
    offsetmd="3">
    <v-card class="pa-2">
           <TextField :label="'ProductName'" :doUpdate="updateProductName" :error="ProductNameError"/>
        <TextField :label="'price'" :doUpdate="updateprice" :error="priceError"/>
        <TextField :label="'Description'" :doUpdate="updateDescription" :error="DescriptionError"/>
        <v-btn class="mt-2"  to="/shop" >Cancel</v-btn>
      

    <v-btn
      class="mt-2"
      color="success"
      @click="doCreate" 
    >
      Save
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>cached</v-icon>
        </span>
      </template>
    </v-btn>
    </v-card>
  </v-col>
</v-row>
</template>
 

<script>
import TextField from '~/components/common/form/TextField';
  import axios from 'axios';

export default {
  name:"CreateShop",
 data() {
    return {
      ProductName:'',
      price: '',
      Description:'',
      ProductNameError:'',
      priceError:'',
      DescriptionError:'',
    }
  },
  methods: {
     doCreate () {
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
    
    //  console.log(this.ProductName, this.price, this.Description);
    // if(this.ProductName && this.price){
    //   console.log("điền đủ Tên SP và Giá ");
    // }else if(!this.ProductName){
    //   console.log("Thiếu Tên SP ");
    // }else if(!this.price){
    //    console.log("Thiếu Gía");
    //  }else{
    //   console.log("thiếu cả 2");
    // }
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
  },
   components: {
      TextField
    },
}
</script>