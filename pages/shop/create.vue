
<template>

<v-row>
  <v-col
    md="6"
    offsetmd="3">
    <v-card class="pa-2">
      <v-text-field
            v-model="ProductName"
            label="Tên sp"
            outlined
            hide-details="auto"
            class="mb-2"
            :error-messages="ProductNameError"
          ></v-text-field>
          <v-text-field
           v-model="price"
            label="Giá $"
            outlined
            hide-details="auto"
            class="mb-2"
            :error-messages="priceError"
          ></v-text-field>
      <v-text-field
          v-model="Description"
            label="Miêu tả sp"
            outlined
            hide-details="auto"
            :error-messages="DescriptionError"
          ></v-text-field>
      
        <v-btn class="mt-2"  @click="doCreate"  to="/shop">Cancel</v-btn>
      

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
export default {
  name:"CreateShop",
 data() {
    return {
      ProductName: "",
      price: "",
      Description:"",
      ProductNameError:"",
      priceError:"",
      DescriptionError:"",
    }
  },
  methods: {
     doCreate() {
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
  },
}
</script>