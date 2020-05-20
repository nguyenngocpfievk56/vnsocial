<<template>
  <div class="text-center">
    <v-dialog @input="closeDialog" v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          <v-card-actions>
            {{ currentShop.user && currentShop.user.name }}
          </v-card-actions>
        </v-card-title>

        <v-card-text>{{currentShop.content}}</v-card-text>
        <v-img class="pa-1" v-if="currentShop.img" :src="currentShop.img"></v-img>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog">apect</v-btn>
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
      ...mapState('shop', {
        showDialog: 'showDialog',
        currentShop: 'currentShop',
        shops: "shops",
      })
    },
    methods: {
      ...mapMutations({
        setShowDialog: 'shop/SET_SHOW_DIALOG'
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