<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed left temporary>
      <v-img src="https://duongleteach.com/wp-content/uploads/2018/04/nghi-luan-bao-ve-moi-truong-thien-nhien-de-cuu-lay-su-song-tren-trai-dat-7800-2-678x381.jpg" position="top center">
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <template v-if="false">
            <v-avatar :size="60" class="mb-1">
              <img :src="userInfo.img" alt="avatar" />
            </v-avatar>
            <v-flex shrink>
              <div class="subtitle-1">{{ userInfo.name }}</div>
            </v-flex>
          </template>
        </v-layout>
      </v-img>

      <v-list>
        <div v-for="(item, index) in menus" :key="'menu-' + index">
          <v-subheader v-if="item.header">{{ item.header }}</v-subheader>
          <v-divider v-else-if="item.divider" />
          <v-list-item
            v-else
            :to="item.to"
            router
            exact
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <div>
          <v-list-item to="/user" router exact v-show="userInfo && userInfo._id">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Thông tin tài khoản</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/auth/login" router exact v-show="!userInfo || !userInfo._id">
            <v-list-item-icon>
              <v-icon>mdi-needle</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Đăng nhập</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dark
      color="#fcb69f"
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container class="main-container">
      <nuxt/>
    </v-container>
  </v-app>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: "DefaultLayout",
    data() {
      return {
        drawer: false,
        menus: [
          {
            icon: "mdi-home",
            title: "Trang chủ",
            to: "/"
          },
          {
            icon: "mdi-alert-decagram",
            title: "Hỏi đáp",
            to: "/qa"
          },
          {
            icon: "mdi-clipboard-outline",
            title: "Bài viết",
            to: "/post",
          },
        ]
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
        getUserInfo: 'user/getUserInfo'
      }),
      toggleDrawer() {
        this.drawer = !this.drawer;
      }
    },
    mounted() {
      this.getUserInfo({ id: this.$cookies.get("uid") });
    },
  }
</script>

<style>
  .main-container {
    margin-top: 64px;
  }
</style>