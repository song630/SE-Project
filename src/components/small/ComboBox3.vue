<template> <!-- 年级 -->
  <div class="form-group">
    <label class="label-combo-box" for="combo-box1">年级</label>
    <select class="combo-box" id="combo-box1" v-model="selected">
      <option selected>-----</option>
      <option value="2010">2010</option>
      <option value="2011">2011</option>
      <option value="2012">2012</option>
      <option value="2013">2013</option>
      <option value="2014">2014</option>
      <option value="2015">2015</option>
      <option value="2016">2016</option>
      <option value="2017">2017</option>
      <option value="2018">2018</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ComboBox3',
  data () {
    return { selected: '' }
  }
}
</script>

<style scoped>
@import '../../css/combobox.css';
</style>
