<template>
  <v-col md="4">
    <v-card class="mx-auto" max-width="380" @click="handleClick(shop)">
      <v-card-actions>
        <v-list-item-avatar>
        <v-img
          :src="shop.user.img"
        ></v-img>
      </v-list-item-avatar>
       <div> {{ shop.user.name }}</div>
      </v-card-actions>
      <v-img class="white--text align-end"  height="200px" v-if="shop.img" :src="shop.img"></v-img>

      <v-card-subtitle class="pb-0"><b>Time: </b>{{ shop.created_at }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div ><b>Name:</b> {{ shop.content }}</div>
        <div><b>Price: </b>{{ shop.price }}</div>
        <div><b>Description:</b> {{ shop.description }}</div>
         <div><b>Country:</b> {{ shop.country }} </div>
         <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
      </v-card-text>
      
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "ShopElement",
  props: {
    shop: {
      type: Object,
      default: {}
    },
    handleClick: Function,
  }
};
</script>