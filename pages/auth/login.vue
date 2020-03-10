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
        <v-btn class="mt-2" outlined color="indigo">Đăng ký</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
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
  methods: {
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
    },
  },
}
</script>