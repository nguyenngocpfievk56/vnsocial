<template>
  <v-row>
    <v-col
      md="6"
      offset-md="3">
      <v-card class="pa-2">
        <v-text-field
          v-model="email"
          label="Email"
          outlined
          hide-details="auto"
          class="mb-2"
          :error-messages="emailError"
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Mật khẩu"
          outlined
          hide-details="auto"
          :error-messages="passwordError"
        ></v-text-field>

        <v-btn class="mt-2" outlined color="indigo" @click="doLogin">Đăng nhập</v-btn>
        <v-btn class="mt-2" outlined color="indigo" to="/auth/register">Đăng ký</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "LoginPage",
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    }
  },
  computed: {
    ...mapState('user', {
      userInfo: 'info'
    })
  },
  methods: {
    ...mapActions({
      login: 'user/login'
    }),
    doLogin() {
      if (!this.email) {
        this.emailError = "Vui lòng nhập email";
      } else {
        this.emailError = '';
      }

      if (!this.password) {
        this.passwordError = "Vui lòng nhập password";
      } else {
        this.passwordError = '';
      }

      if (!this.emailError && !this.passwordError) {
        var params = {
          email: this.email,
          password: this.password
        }
        this.login(params);
      }
    },
  },
  watch: {
    userInfo(newValue, oldValue) {
      if (newValue._id) {
        this.$cookies.set("uid", newValue._id, {
          path: '/',
          maxAge: 60 * 60 * 24 * 30
        });
        this.$router.push('/')
      }
    }
  },
}
</script>