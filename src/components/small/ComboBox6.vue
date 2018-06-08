<template>
  <div class="form-group">
    <label class="label-combo-box" for="combo-box1">选项</label>
    <select class="combo-box" id="combo-box1" v-model="selected">
      <option selected>-----</option>
      <option value="plan_personal_program">制定个人培养方案</option>
      <option value="view_default_program">查看默认培养方案</option>
      <option value="view_personal_program">查看个人培养方案</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ComboBox6',
  data () {
    return { selected: { default: null } }
  }
}
</script>

<style scoped>
@import '../../css/combobox.css';
</style>
