<template>
  
  <div>
     <v-btn color="primary" to="/shop/create">thêm ảnh</v-btn>
    <v-row>
    <ShopElement v-for="(shop, index) in shops" :key="index" :shop="shop"  :handleClick="handleClick" />
  </v-row>
    <ShopDialog/>
  </div>
  
</template>
  

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import ShopElement from "~/components/shop/Element";
import ShopDialog from '~/components/shop/Dialog';
export default {
  name: "ShopIndexPage",
     methods:{
        goTo(url) {
      this.$router.push({ path: url });
    },
      ...mapActions({
        getShops: 'shop/getShops',
      }),

  ...mapMutations({
        setCurrentShop: 'shop/SET_CURRENT_SHOP',
        setShowDialog: 'shop/SET_SHOW_DIALOG'
      }),
      handleClick (shop) {
      this.setCurrentShop({
        currentShop: shop
      })
    }
  },
    components: {
    ShopElement,
    ShopDialog
  },
  computed: {
    ...mapState("shop", {
      shops: "shops",
      currentShop: 'currentShop'
    })
  },
   mounted() {
    this.getShops();
  },
}
</script>
