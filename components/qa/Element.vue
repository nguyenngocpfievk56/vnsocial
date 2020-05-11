<template>
  <v-card
    max-width="344"
    class="mx-auto"
    @click="handleClick(qa)"
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img
          :src="qa.user.img"
        ></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{ qa.user.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ qa.created_at }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      v-if="qa.img"
      :src="qa.img"
      height="194"
    ></v-img>

    <v-card-text>
      {{ qa.content }}
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Read
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Bookmark
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "QaElement",
    props: {
      qa: {
        type: Object,
        default: {}
      },
      handleClick: Function,
    }
  }
</script>