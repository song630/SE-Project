<template>
  <div class="form-group">
    <label class="label-combo-box" for="combo-box2">搜索选项</label>
    <select class="combo-box" id="combo-box2" @change="notifyParent" v-model="selected">
      <option selected>-----</option>
      <option value="include">包含</option>
      <option value="not include">不包含</option>
      <option value="eq">等于</option>
      <option value="ne">不等于</option>
      <option value="start with">始于</option>
      <option value="start without">不起始于</option>
      <option value="end with">止于</option>
      <option value="end without">非结束于</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ComboBox2',
  props: {
    selected: null
  },
  methods: {
    notifyParent () {
      this.$emit('notifyParent', this.selected)
    }
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 15px;
}
label {
  font-weight: normal;
  font-family:"Microsoft YaHei", "Microsoft JhengHei Light", Helvetica, sans-serif;
}
.combo-box {
  width: 150px;
  height: 30px;
  max-width: 100%;
  padding: 4px 4px;
  border: 1px solid #d5d5d5;
  margin-left: 20px; /* away from label */
}
</style>
