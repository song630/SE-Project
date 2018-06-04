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
              <ComboBox1 @notifyParent="fromChild" ref="input1"></ComboBox1>
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
export default {
  name: 'SearchPage',
  props: {
    fill_in_values: new Array(7)
  },
  data () {
    return { msg: ['输入关键字', '搜索'] }
  },
  components: { /* parent component uses child component */
    ComboBox1,
    ComboBox2,
    AndOr,
    InputText,
    Button1
  },
  methods: {
    fromChild (param) {
      alert(param)
    },
    submit () {
      var toSubmit = [
        this.$refs.input1.selected,
        this.$refs.input2.selected,
        this.$refs.input3.input_value,
        this.$refs.input4.picked,
        this.$refs.input5.selected,
        this.$refs.input6.selected,
        this.$refs.input7.input_value
      ]
      alert(toSubmit)
    }
  }
}
</script>

<style scoped>
.page-content-area {
  border: 1px solid #CCC;
  background-color: rgb(255, 255, 255);
  min-height: 100%;
}
.widget-box {
  margin: 7px 7px 15px 15px;
  border: 1px solid #CCC; /* apply to 4 borders */
  text-align: left;
  font-weight: lighter;
}
.widget-header {
  background: #F7F7F7;
  box-sizing: content-box;
  position: relative;
  min-height: 38px;
  color: #669fc7;
  border-bottom: 1px solid #DDD;
  padding-left: 12px;
  padding-right: 12px;
}
.widget-header>.widget-title {
  line-height: 36px;
  font-size: 18px;
  font-weight: lighter;
  padding: 0;
  margin: 0;
  display: inline;
  font-family: "Microsoft JhengHei Light", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.widget-body { /* w/o this, the line on the right will be incomplete */
  padding-left: 6px;
  padding-right: 12px;
}
.widget-content {
  background-color: #FFF;
  min-height: 100%;
  padding-bottom: 0;
  font-family: "Microsoft JhengHei Light", "Helvetica Neue", Helvetica, sans-serif;
  font-size: 13px;
  color: #393939;
  line-height: 1.5;
  padding-left: 15px;
  padding-right: 15px;
  /* will apply to all inner elements */
}
.widget-instructions {
  font-size: 22px;
  font-weight: lighter;
  color: #478fca!important;
}
div.widget-body hr {
  /* inherit selector */
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}
</style>
