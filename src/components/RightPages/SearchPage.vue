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
              <ComboBox2 @notifyParent="fromChild" ref="input2"></ComboBox2>
              <InputText :msg="msg[0]" ref="input3"></InputText>
              <hr>
              <AndOr @notifyParent="fromChild" ref="input4"></AndOr>
              <hr>
              <ComboBox1 @notifyParent="fromChild" ref="input5"></ComboBox1>
              <ComboBox2 @notifyParent="fromChild" ref="input6"></ComboBox2>
              <InputText :msg="msg[0]" ref="input7"></InputText>
              <hr>
            </form>
            <Button1 :msg="msg[1]" @submitSearch="submit"></Button1>
            <Pagination></Pagination>
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
import Pagination from '../small/Pagination'
import $ from 'jquery'
export default {
  name: 'SearchPage',
  props: {
    fill_in_values: new Array(7)
  },
  data () {
    return { msg: ['输入关键字', '搜索'] }
  },
  components: { ComboBox1, ComboBox2, AndOr, InputText, Button1, Pagination },
  methods: {
    fromChild (param) {
      alert(param)
    },
    submit () {
      let toSubmit = [
        this.$refs.input1.selected,
        this.$refs.input2.selected,
        this.$refs.input3.input_value,
        this.$refs.input4.picked,
        this.$refs.input5.selected,
        this.$refs.input6.selected,
        this.$refs.input7.input_value
      ]
      window.open(window.location.origin + '/#QueryResultPage')
      $.ajax({
        type: 'GET',
        url: 'EnrollSystem/classQuery', /* call method classQuery() in back-end */
        dataType: 'json', /* the type of data returned by server */
        data: { toSubmit }, // send to server
        success: function (result) { // result: data returned by server
          sessionStorage.obj = JSON.stringify(result) // save data, or it will lose when another page is loaded
          window.open(window.location.origin + '/QueryResultPage', '_self') // open a new page using router
          // _self: 在当前页面加载新页面 不打开新标签页
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
