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
