<template>
  <v-row>
    <v-col
      md="6"
      offset-md="3">
      <v-card class="pa-2">
        <TextField :label="'Email'" :doUpdate="updateEmail" :error="emailError"/>
        <TextField :label="'Mật khẩu'" :doUpdate="updatePassword" :error="passwordError"/>
        <TextField :label="'Nhập lại mật khẩu'" :doUpdate="updateConfirmPassword" :error="confirmPasswordError"/>
        <TextField :label="'Tên'" :doUpdate="updateName" :error="nameError"/>

        <v-btn class="mt-2" outlined color="indigo" to="/auth/login">Trở về đăng nhập</v-btn>
        <v-btn class="mt-2" outlined color="red" @click="doRegister">Đăng ký</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import TextField from '~/components/common/form/TextField';
  import axios from 'axios';

  export default {
    name: "AuthRegisterPage",
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
        nameError: '',
      }
    },
    methods: {
      doRegister () {
        // if (!this.email) {
        //   this.emailError = "Hãy nhập email";
        // }
        // else {
        //   this.emailError = '';
        // }
        // if (!this.password) this.passwordError = "Hãy nhập mật khẩu"; else this.passwordError = '';
        // if (!this.confirmPassword) this.confirmPasswordError = "Hãy nhập lại mật khẩu"; else this.confirmPasswordError = "";
        // if (!this.name) this.nameError = "Hãy nhập tên"; else this.nameError = "";

        this.emailError = this.email ? '' : "Hãy nhập email";
        this.passwordError = this.password ? '' : "Hãy nhập mật khẩu";
        this.nameError = this.name ? '' : "Hãy nhập tên";
        this.confirmPasswordError = this.password == this.confirmPassword ? '' : 'Mật khẩu nhập lại không đúng';

        if (this.emailError || this.passwordError || this.nameError || this.confirmPasswordError) return;

        var params = {
          email: this.email,
          password: this.password,
          name: this.name
        }
        axios.post('/api/auth/create', params)
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
      },
      updateEmail(newEmail) {
        this.email = newEmail;
      },
      updatePassword(newPassword) {
        this.password = newPassword;
      },
      updateConfirmPassword(newConfirmPassword) {
        this.confirmPassword = newConfirmPassword;
      },
      updateName(newName) {
        this.name = newName;
      }
    },
    components: {
      TextField
    },
  }
</script>