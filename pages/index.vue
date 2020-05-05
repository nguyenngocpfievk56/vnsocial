<template>
  <div>
    <!--<v-btn color="primary" to="/auth/login" class="abc">Login</v-btn>-->
    <v-btn color="primary" @click="goTo('auth/login')">Login</v-btn>

    <h1>Welcome to VNsocial:  {{ userInfo.name }}</h1>
    <v-btn color="primary" @click="logout">Logout</v-btn>
    <nuxt-link to="/qa/create">Dan toi trang QA create</nuxt-link>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapState('user', {
        userInfo: 'info',
        userIsLoading: 'isLoading'
      })
    },
    methods: {
      ...mapActions({
        doLogout: 'user/logout',
      }),
      goTo (url) {
        this.$router.push({ path: url });
      },
      logout () {
        this.doLogout();
        this.$cookies.remove('uid');
      }
    },
    beforeMount(){

    },
    mounted() {
      this.$cookies.set("test", "Day la test",{
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      })
    },
    watch: {
      userInfo (newValue, oldValue) {
        if (!newValue._id) {
          this.$router.push('/auth/login');
        }
      }
    },
  }
</script>