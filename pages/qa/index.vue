<template>
  <div>
    <v-btn to="/qa/create">Đăng bài mới</v-btn>
    <v-row>
      <QaElement v-for="(qa, index) in qas" :key="index" :qa="qa" :handleClick="handleClick"/>
    </v-row>
    <v-btn @click="loadMore">Xem thêm</v-btn>
    <QaDialog/>
  </div>
</template>

<script>
  import { mapActions, mapState, mapMutations } from 'vuex';
  import QaElement from '~/components/qa/Element';
  import QaDialog from '~/components/qa/Dialog';
  
  export default {
    name: "QaIndexPage",
    data() {
      return {
        page: 1
      }
    },
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
      },
      loadMore() {
        this.getQas({ minId: this.minId, maxId: this.maxId});
      }
    },
    computed: {
      ...mapState('qa', {
        qas: 'qas',
        minId: 'minId',
        maxId: 'maxId',
        currentQa: 'currentQa'
      })
    },
    components: {
      QaElement,
      QaDialog
    },
    mounted() {
      this.getQas({ minId: this.minId, maxId: this.maxId});
    },
    watch: {
      currentQa (newValue, oldValue) {
        this.setShowDialog({ showDialog: true });
      }
    }
  }
</script>