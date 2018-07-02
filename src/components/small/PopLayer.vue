<template>
  <div>
    <Button1 :msg="msg[0]" class="click-pop"></Button1>
    <div class="pop-background"></div>
    <!--弹出框-->
    <div class="pop">
      <div class="pop-top">
        <h2>输入学号添加学生</h2>
      </div>
      <div class="pop-content">
        <InputText style="margin-left: -20px"></InputText>
      </div>
      <div class="pop-foot">
        <button class="pop-ok">确定</button>
        <button class="pop-cancel">取消</button>
      </div>
    </div>

  </div>
</template>

<script>
import Button1 from '../small/Button1'
import InputText from '../small/Text'
import $ from 'jquery'
$(document).ready(function () {
  $('.pop-ok, .pop-cancel').click(function () {
    $('.pop-background,.pop').fadeOut(300)
  })
  $('.click-pop').click(function () {
    $('.pop-background,.pop').fadeIn(300)
  })
})

export default {
  name: 'PopLayer',
  components: { Button1, InputText },
  data () {
    return {
      msg: ['添加学生', '输入学号']
    }
  }
}
</script>

<style scoped>
.pop {
  font-weight: normal;
  font-family: "Microsoft YaHei", "Microsoft JhengHei Light", Helvetica, sans-serif;
  display: none;
  width: 300px;
  height: 150px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  padding: 25px;
  z-index: 130;
  background-color: #fff;
}
.pop-top h2 {
  float: left;
  color: #669fc7;
  font-weight: normal;
}
.pop-foot {
  height: 30px;
  line-height: 50px;
  width: 100%;
  border-top: 1px #E5E5E5 solid;
  text-align: right;
}
.pop-cancel, .pop-ok {
  font-family:"Microsoft YaHei", "Microsoft JhengHei Light", Helvetica, sans-serif;
  cursor: pointer;
  color: #FFFFFF;
  text-shadow: #333333;
  border: solid transparent 1px;
  padding: 5px 10px 5px 10px;
}
.pop-cancel {
  background-color: #dd8735;
}
.pop-ok {
  background-color: #4ec9d6;
}
.pop-content {
  height: 100px;
}
.pop-background { /* 遮罩层 */
  display: none;
  position: absolute;
  z-index: 129;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.2;
  transition: background-color 0.5s;
}
</style>
