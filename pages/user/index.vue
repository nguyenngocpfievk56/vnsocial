<template>
  <div>
    <v-row>
      <v-col cols="12" sm="8" md="6" offset-sm="2" offset-md="3">
        <h1> {{ message }} </h1>
        <UploadImage :cWidth="300" :cHeight="300" :callback="updateUserImage" :initImg="userInfo.img"/>
        <div class="text-center display-1 mt-4" v-if="isShowing">
          {{ userInfo.name }}
          <v-btn @click="showEdit" class="ma-2" outlined x-small fab color="indigo">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </div>
        <div class="d-flex mt-4" v-else>
          <v-text-field
            v-model="name"
            label="Tên hiển thị"
            width="200"
            class="d-inline"
            outlined
          ></v-text-field>
          <v-btn @click="saveName" class="ma-2" outlined x-small fab color="indigo">
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import UploadImage from '~/components/common/UploadImage';

  export default {
    name: "UserIndexPage",
    middleware: "unAuthenticated",
    data() {
      return {
        isShowing: true,
        name: '',
        message: ''
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
        updateInfo: 'user/updateInfo'
      }),
      showEdit() {
        this.name = this.userInfo.name;
        this.isShowing = false;
      },
      saveName() {
        this.isShowing = true;
        var params = {
          userId: this.userInfo._id,
          name: this.name
        }
        this.updateInfo(params);
      },
      updateUserImage(img) {
        var params = {
          userId: this.userInfo._id,
          img: img
        }
        this.updateInfo(params);
      }
    },
    components: {
      UploadImage
    },
    watch: {
      userIsLoading(newValue, oldValue) {
        this.message = '';
        if (oldValue == true && newValue == false) {
          this.message = "Đã thay đổi thành công";
        }
      }
    },
  }
</script>