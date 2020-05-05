<template>
  <div>
    <v-btn to="/qa/create">Đăng bài mới</v-btn>
    <v-row>
      <QaElement v-for="(qa, index) in qas" :key="index" :qa="qa"/>
    </v-row>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import QaElement from '~/components/qa/Element';
  
  export default {
    name: "QaIndexPage",
    methods: {
      ...mapActions({
        getQas: 'qa/getQas'
      })
    },
    computed: {
      ...mapState('qa', {
        qas: 'qas'
      })
    },
    components: {
      QaElement
    },
    mounted() {
      this.getQas();
    },
  }
</script>