<template> <!-- 学院 -->
  <div class="form-group">
    <label class="label-combo-box" for="combo-box1">学院</label>
    <select class="combo-box" id="combo-box1" v-model="selected" @change="notifyParent">
      <option selected>-----</option>
      <option v-for="(item, index) in departments" :value="index" :key="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ComboBox4',
  props: {},
  data () {
    return {
      selected: '',
      departments: [ // 27 items
        '经济学院', '法学院', '教育学院', '人文学院', '外语学院', '理学院',
        '生命科学学院', '机械与能源工程学院', '材料与化学工程学院', '电气工程学院',
        '信息科学与工程学院', '建筑工程学院', '生物系统工程与食品科学学院',
        '环境与资源学院', '生物医学工程与仪器科学学院', '农业与生物技术学院',
        '动物科学学院', '医学院', '药学院', '管理学院', '计算机科学与技术学院',
        '软件学院', '国际教育学院', '公共管理学院', '传媒与国际文化学院',
        '航空航天学院', '国际联合学院'
      ]
    }
  },
  mounted: function () {
    console.log('mounted')
  },
  methods: {
    notifyParent () {
      console.log('combobox4.selected:', this.selected)
      this.$emit('notifyParent', this.selected)
    }
  }
}
</script>

<style scoped>
@import '../../css/combobox.css';
</style>
