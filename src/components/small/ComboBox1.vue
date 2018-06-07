<template>
  <div class="form-group">
    <label class="label-combo-box" for="combo-box1">关键字类型</label>
    <select class="combo-box" id="combo-box1" @change="notifyParent" v-model="selected">
      <option selected>-----</option>
      <option value="course name">课程名称</option>
      <option value="id">课程代码</option>
      <option value="teacher name">教师姓名</option>
      <option value="type">课程类别</option>
      <option value="time">上课时间</option>
      <option value="location">上课地点</option>
      <option value="semester">学期</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ComboBox1',
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
@import '../../css/combobox.css';
</style>
