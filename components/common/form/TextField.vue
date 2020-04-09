<template>
  <div>
    <v-text-field
      v-model="model"
      :label="label"
      outlined
      hide-details="auto"
      class="mb-2"
      :error-messages="error"
    ></v-text-field>
  </div>
</template>

<script>
  export default {
    name: "CommonFormTextFieldComponent",
    // Nhận dữ liệu từ bên ngoài
    props: {
      doUpdate: Function,
      label: String,
      error: String
    },
    // Dữ liệu cục bộ (local)
    data() {
      return {
        model: '',
      }
    },
    watch: {
      model (newValue, oldValue) {
        this.doUpdate(newValue)
      }
    },
  }
</script>