<template>
  <div>
  tao moi hoan toan
  </div>
  </template>
<script>
export default {
  
}
</script>
<style >
  
</style>
=======
    Day la trang Index
  </div>
</template>
>>>>>>> 8b5dbbc3d7dece239140396508e835365fd2df1b
=======
    <!--<v-btn color="primary" to="/auth/login" class="abc">Login</v-btn>-->
    <v-btn color="primary" @click="goTo('auth/login')">Login</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      abc: "test-nuxt"
    }
  },
  methods: {
    goTo (url) {
      this.$router.push({ path: url });
    }
  },
}
</script>
>>>>>>> 3e204364485d2a634bc77513e7dd0490d714f369
