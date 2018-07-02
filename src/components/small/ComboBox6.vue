<template>
  <div class="form-group">
    <label class="label-combo-box" for="combo-box1">选项</label>
    <select class="combo-box" id="combo-box1" v-model="selected" @change="notifyParent">
      <option selected>-----</option>
      <option value="plan_personal">制定个人培养方案</option>
      <option value="view_default">查看默认培养方案</option>
      <option value="view_personal">查看个人培养方案</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ComboBox6',
  data () {
    return { selected: { default: null } }
  },
  methods: {
    notifyParent () {
      console.log('combobox6.selected:', this.selected)
      this.$emit('notifyParent', this.selected)
    }
  }
}
</script>

<style scoped>
@import '../../css/combobox.css';
</style>
