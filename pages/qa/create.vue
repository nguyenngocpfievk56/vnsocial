<template>
  <div>
    <h2>Bạn muốn hỏi gì, {{ userInfo.name }}</h2>
    <v-row>
      <v-col cols="12" sm="6">
          <v-text-field
            v-model="content"
            label="Nội dung câu hỏi"
            single-line
            outlined
          ></v-text-field>
          <v-btn @click="doPost">Đăng câu hỏi</v-btn>
        </v-col>
    </v-row>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import axios from 'axios';

  export default {
    name: "QACreatePage",
    data() {
      return {
        content: '',
      }
    },
    computed: {
      ...mapState('user', {
        userInfo: 'info'
      }),
    },
    methods: {
      doPost() {
        var data = {
          user_id: this.userInfo._id,
          content: this.content
        }
        axios.post('/api/qa/create', data)
          .then((res) => {
            this.$router.push('/qa');
          })
          .catch(() => {

          })
      }
    },
  }
</script>