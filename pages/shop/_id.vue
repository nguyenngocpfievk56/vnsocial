<template>
  <v-row>
    <v-col cols="6">
      <v-card
        class="mx-auto"
      >
        <v-img
          class="mb-3"
          :src="shop.img"
        ></v-img>

        <v-card-title>{{shop.name}}</v-card-title>
      </v-card>
    </v-col>

    <v-col cols="6">
      <ShopCommentList/>
    </v-col>
  </v-row>
</template>
  

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import axios from 'axios';
import ShopCommentList from '~/components/shop/CommentList.vue';

export default {
  name: "ShopIndex",
  data(){
    return{
      selection: 1,
      shop: {}
    }
  },
  computed: {
    ...mapState('user', {
      user: 'info'
    })
  },
  components: {
    ShopCommentList
  },
  methods: {
    ...mapActions({
      getShopComments: 'shop/getShopComments',
      createShopComments: 'shop/createShopComments'
    })
  },
  mounted() {
    axios.get(`/api/shop/detail/${this.$route.params.id}`)
      .then(res => {
        this.shop = res.data.data;
      })
      .catch(err => {
        console.log(err);
      })
  },
  watch:{
    user(newValue, oldValue){
      if (newValue._id) {
        this.createShopComments({
          shop: this.$route.params.id,
          content: "Day la test " + Math.random(),
          user: newValue._id
        })
      }
    }
  }
}
</script>
