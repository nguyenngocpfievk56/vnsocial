<template>
  <v-row>
    <v-card
      v-for="(shop, index) in shops"
      :key="index"
      class="mx-auto my-12"
      max-width="374"
      :to="`/shop/${shop._id}`"
    >
      <v-img
        class="mb-3"
        :src="shop.img"
      ></v-img>

      <v-card-title>{{shop.name}}</v-card-title>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
          <div class="grey--text ml-4">4</div>
          
        </v-row>
      </v-card-text>
    </v-card>
    <v-progress-linear
      v-if="loading"
      indeterminate
      color="green"
      class="mb-5"
    ></v-progress-linear>
  </v-row>
</template>
  

<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: "ShopIndex",
  data(){
    return{
      selection: 1,
    }
  },
  computed: {
    ...mapState('shop', {
      shops: 'shops',
      minId: 'minId',
      maxId: 'maxId',
      loading: 'loading'
    })
  },
	destroyed() {
		window.removeEventListener('scroll', this.handleWindowScroll);
	},
  methods: {
    ...mapActions({
      getShops: "shop/getShops"
    }),
    ...mapMutations({
      clearShops: "shop/CLEAR_SHOPS"
    }),
    handleWindowScroll() {
      // quãng đường đã lăn từ top: document.documentElement.scrollTop
      // chiều cao màn hình: window.innerHeight
      // chiều cao hiện tại của trang web: document.documentElement.offsetHeight
			let bottomOfWindow =
				document.documentElement.scrollTop + window.innerHeight + 100 >= document.documentElement.offsetHeight;
			if (bottomOfWindow) {
        this.getShops({ minId: this.minId, maxId: this.maxId});
			}
		},
  },
  mounted() {
		window.addEventListener('scroll', this.handleWindowScroll);
    this.getShops({ minId: this.minId, maxId: this.maxId});
  },
}
</script>
