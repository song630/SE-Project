<template> <!-- 专业 -->
  <div class="form-group">
    <label class="label-combo-box" for="combo-box1">专业</label>
    <select class="combo-box" id="combo-box1" v-model="selected">
      <option selected>-----</option>
      <option v-for="(item, index) in majors[which]" :value="index" :key="item">{{ item }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ComboBox5',
  props: {
    which: { type: Number, default: 0 } // 父组件更改 哪个学院
  },
  data () {
    return {
      selected: { default: null },
      majors: [ // 对应每个学院
        ['aaa1', 'bbb1', 'ccc1'], ['aaa2', 'bbb2', 'ccc2'], ['aaa3', 'bbb3', 'ccc3'],
        ['aaa4', 'bbb4', 'ccc4'], ['aaa5', 'bbb5', 'ccc5'], ['aaa6', 'bbb6', 'ccc6'],
        ['aaa7', 'bbb7', 'ccc7'], ['aaa8', 'bbb8', 'ccc8'], ['aaa9', 'bbb9', 'ccc9'],
        ['aaa10', 'bbb10', 'ccc10'], ['aaa11', 'bbb11', 'ccc11'], ['aaa12', 'bbb12', 'ccc12'],
        ['aaa13', 'bbb13', 'ccc13'], ['aaa14', 'bbb14', 'ccc14'], ['aaa15', 'bbb15', 'ccc15'],
        ['aaa16', 'bbb16', 'ccc16'], ['aaa17', 'bbb17', 'ccc17'], ['aaa18', 'bbb18', 'ccc18'],
        ['aaa19', 'bbb19', 'ccc19'], ['aaa20', 'bbb20', 'ccc20'], ['aaa21', 'bbb21', 'ccc21'],
        ['aaa22', 'bbb22', 'ccc22'], ['aaa23', 'bbb23', 'ccc23'], ['aaa24', 'bbb24', 'ccc24'],
        ['aaa25', 'bbb25', 'ccc25'], ['aaa26', 'bbb26', 'ccc26'], ['aaa27', 'bbb27', 'ccc27']
      ]
    }
  }
}
</script>

<style scoped>
@import '../../css/combobox.css';
</style>
