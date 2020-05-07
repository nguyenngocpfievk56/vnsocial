<template>
  <div>
    <v-btn to="/qa/create">Đăng bài mới</v-btn>
    <v-row>
      <QaElement v-for="(qa, index) in qas" :key="index" :qa="qa" :handleClick="handleClick"/>
    </v-row>
    <QaDialog/>
  </div>
</template>

<script>
  import { mapActions, mapState, mapMutations } from 'vuex';
  import QaElement from '~/components/qa/Element';
  import QaDialog from '~/components/qa/Dialog';
  
  export default {
    name: "QaIndexPage",
    methods: {
      ...mapActions({
        getQas: 'qa/getQas'
      }),
      ...mapMutations({
        setCurrentQa: 'qa/SET_CURRENT_QA',
        setShowDialog: 'qa/SET_SHOW_DIALOG'
      }),
      handleClick(qa) {
        this.setCurrentQa({
          currentQa: qa
        })
      }
    },
    computed: {
      ...mapState('qa', {
        qas: 'qas',
        currentQa: 'currentQa'
      })
    },
    components: {
      QaElement,
      QaDialog
    },
    mounted() {
      this.getQas();
    },
    watch: {
      currentQa (newValue, oldValue) {
        this.setShowDialog({ showDialog: true });
      }
    }
  }
</script>