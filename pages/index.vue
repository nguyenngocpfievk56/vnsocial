<template>
  <div>
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