<template>
  <div class="page-content">
    <div class="page-content-area">
      <div class="widget-box">
        <div class="widget-header">
          <h4 class="widget-title">
            选课搜索引擎信息输入
          </h4>
        </div>

        <div class="widget-body">
          <div class="widget-content">
            <h3 class="widget-instructions">
              请输入以下搜索信息
            </h3>
            <hr>

            <form class="form">
              <ComboBox1 ref="input1"></ComboBox1>
              <ComboBox2 ref="input2"></ComboBox2>
              <InputText :msg="msg[0]" ref="input3"></InputText>
              <hr>
              <AndOr ref="input4"></AndOr>
              <hr>
              <ComboBox1 ref="input5"></ComboBox1>
              <ComboBox2 ref="input6"></ComboBox2>
              <InputText :msg="msg[0]" ref="input7"></InputText>
              <hr>
            </form>
            <Button1 :msg="msg[1]" @submitSearch="submit"></Button1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComboBox1 from '../small/ComboBox1'
import ComboBox2 from '../small/ComboBox2'
import AndOr from '../small/AndOr'
import InputText from '../small/Text'
import Button1 from '../small/Button1'
import $ from 'jquery'
import R from '../../router/index.js'
export default {
  name: 'SearchPage',
  props: {
    fill_in_values: new Array(7)
  },
  data () {
    return { msg: ['输入关键字', '搜索'] }
  },
  components: { ComboBox1, ComboBox2, AndOr, InputText, Button1 },
  methods: {
    submit () {
      let toSubmit = {
        type1: this.$refs.input1.selected,
        option1: this.$refs.input2.selected,
        content1: this.$refs.input3.input_value,
        and_or: this.$refs.input4.picked,
        type2: this.$refs.input5.selected,
        option2: this.$refs.input6.selected,
        content2: this.$refs.input7.input_value
      }
      $.ajax({
        type: 'GET',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        url: 'http://localhost:8080/ClassSearch/classQuery/' + encodeURI(JSON.stringify(toSubmit)),
        dataType: 'json',
        success: function (result) {
          // 跳转到选课结果
          R.push({ path: R.options.routes[1].children[1].path, query: { param: result } })
        },
        error: function () {
          alert('error')
        }
      })
    }
  }
}
</script>
<style scoped>
@import "../../css/page.css";
</style>
