<template>
  <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Danh sách Shop</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Shop</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.id" label="Id"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.image" label="Image"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.ratePoint" label="Rate Point"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.country" label="Country"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.image=" { item } "> 
        <v-img height="50" width="100" :src="item.image"></v-img>
    </template>
    <template v-slot:item.ratePoint="{ item }">
        <v-chip :color="getColor(item.ratePoint)" dark>{{ item.ratePoint }}</v-chip>
    </template>
    <template v-slot:item.actions ="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "AdminShopListPage",
  layout: "admin",
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Id",
        align: "start",
        sortable: false,
        value: "id"
      },
      { text: "Name", value: "name" },
      { text: "Image", value: "image" },
      { text: "Rate Point", value: "ratePoint" },
      { text: "Country", value: "country" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      name: "",
      image: "",
      ratePoint: "",
      country: ""
    },
    defaultItem: {
      id: "",
      name: "",
      image: "",
      ratePoint: "",
      country: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    getColor (ratePoint) {
        if (ratePoint > 4) return 'red'
        else if (ratePoint > 2) return 'orange'
        else return 'green'
    },
    initialize() {
      this.desserts = [
        {
          id: 1,
          name: "Apple Store",
          image: "https://picsum.photos/510/301?random",
          ratePoint: 4,
          country: "USA"
        },
        {
          id: 2,
          name: "Samsung Store",
          image: "https://picsum.photos/510/302?random",
          ratePoint: 4.5,
          country: "Korea"
        },
        {
          id: 3,
          name: "Vin Store",
          image: "https://picsum.photos/510/303?random",
          ratePoint: 5,
          country: "VN"
        },
        {
          id: 4,
          name: "Xiaomi Store",
          image: "https://picsum.photos/510/304?random",
          ratePoint: 4.5,
          country: "China"
        },
        {
          id: 5,
          name: "ASUS Store",
          image: "https://picsum.photos/510/305?random",
          ratePoint: 4,
          country: "USA"
        },
        {
          id: 6,
          name: "Huwi Store",
          image: "https://picsum.photos/510/306?random",
          ratePoint: 4,
          country: "China"
        },
        {
          id: 7,
          name: "Mixi Store",
          image: "https://picsum.photos/510/307?random",
          ratePoint: 4,
          country: "USA"
        },
        {
          id: 8,
          name: "JM Store",
          image: "https://picsum.photos/510/308?random",
          ratePoint: 5,
          country: "VN"
        },
        {
          id: 9,
          name: "TTG Store",
          image: "https://picsum.photos/510/309?random",
          ratePoint: 5,
          country: "VN"
        },
        {
          id: 10,
          name: "MiSu Store",
          image: "https://picsum.photos/510/310?random",
          ratePoint: 5,
          country: "VN"
        },
        {
          id: 11,
          name: "OP Store",
          image: "https://picsum.photos/510/311?random",
          ratePoint: 4,
          country: "USA"
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>