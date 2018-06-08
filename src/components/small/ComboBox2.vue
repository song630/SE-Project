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
  data () {
    return { selected: '' }
  },
  methods: {
    notifyParent () {
      console.log(this.selected)
      this.$emit('notifyParent', this.selected)
    }
  }
}
</script>

<style scoped>
@import '../../css/combobox.css';
</style>
