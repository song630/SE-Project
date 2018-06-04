<template>
  <div class="form-group">
    <label class="label-text" for="label-text1">{{ msg }}</label>
    <input type="text" class="input-text" id="label-text1" v-model="input_value">
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    msg: { type: String, default: '' },
    input_value: { type: String, default: '' }
  }
}
</script>

<style scoped>
.label-text {
  font-weight: normal;
  font-family:"Microsoft YaHei", "Microsoft JhengHei Light", Helvetica, sans-serif;
}
.input-text {
  border: 1px solid #d5d5d5;
  margin-left: 20px; /* away from label */
}
</style>
