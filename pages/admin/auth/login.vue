<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>

                  <v-text-field v-model="username" label="Username" name="username" type="text" :error-messages="usernameError"/>

                  <v-text-field v-model="password" id="password" label="Password" name="password" type="password" :error-messages="passwordError"/>

                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="doLogin">Login</v-btn>
                <v-btn color="indigo">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "LoginPage",
  layout: "noneTemplate",

  props: {
    source: String
  },
  data() {
    return {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
    }
  },
  methods: {
    doLogin(redirect) {
      if ( !this.username ) {
        this.usernameError = "Vui lòng nhập username";
      } else {
        this.usernameError = "";
      }
      if (!this.password) {
        this.passwordError = "Vui lòng nhập password";
      } else {
        this.passwordError = "";
      }
      if (this.username=="admin" && this.password=="admin") {
        this.$router.push({path: '/admin'})
      } else {
        alert("Sai username hoặc password, vui lòng nhập lại!")
      }
    }
  }
};
</script>
