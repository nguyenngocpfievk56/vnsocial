<template>
  <div>
    <v-textarea
      v-model="model"
      :label="label"
      outlined
      dense
      height="150px"
      :error-messages="error"
    ></v-textarea>
  </div>
</template>
<script>
export default {
  name: "TextAreaComponent",
  props: {
    doUpdate: Function,
    label: String,
    error: String,
  },
  data() {
    return {
      model: ""
    };
  },
  watch:{
      model(newValue, oldValue){
          this.doUpdate(newValue);
      }
  }
};
</script>