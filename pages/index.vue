<template>
  <div>
    <!--<v-btn color="primary" to="/auth/login" class="abc">Login</v-btn>-->
    <v-btn color="primary" @click="goTo('auth/login')">Login</v-btn>
    <v-btn color="primary" @click="doLogout">Logout</v-btn>
    <h1>Welcome to VNsocial:  {{ userInfo.name }}</h1>
    <v-btn color="primary" @click="goTo('post')">Trang danh sách bài post</v-btn>
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
        doLogout: 'user/logout'
      }),
      goTo (url) {
        this.$router.push({ path: url });
      }
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