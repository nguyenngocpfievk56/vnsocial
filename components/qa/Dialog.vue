<template>
  <div class="text-center">
    <v-dialog
      @input="closeDialog"
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          {{ currentQa.content }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="closeDialog"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    data () {
      return {
        dialog: false,
      }
    },
    computed: {
      ...mapState('qa', {
        showDialog: 'showDialog',
        currentQa: 'currentQa'
      })
    },
    methods: {
      ...mapMutations({
        setShowDialog: 'qa/SET_SHOW_DIALOG'
      }),
      closeDialog() {
        this.dialog = false;
        this.setShowDialog({ showDialog: false });
      }
    },
    mounted() {
      this.dialog = this.showDialog
    },
    watch: {
      showDialog(newValue, oldValue) {
        this.dialog = newValue;
      }
    },
  }
</script>