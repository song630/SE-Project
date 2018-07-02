<template>
  <div class="page-content">
    <div class="page-content-area">
      <div class="widget-box">
        <div class="widget-header">
          <h4 class="widget-title">
            培养方案制定及查看
          </h4>
        </div>

        <div class="widget-body">
          <div class="widget-content">
            <h3 class="widget-instructions">
              请输入以下信息
            </h3>
            <hr>

            <form class="form">
              <ComboBox3 ref="input8"></ComboBox3>
              <ComboBox4 ref="input9" @notifyParent="departmentSelection"></ComboBox4>
              <ComboBox5 ref="input10" :which="parseInt(which_department)"></ComboBox5>
              <ComboBox6 ref="input11" @notifyParent="mySelection"></ComboBox6>
              <!-- 子组件4把选择的学院的索引发送给父组件 父组件再发送给子组件5 -->
              <hr>
            </form>
            <Button1 :msg="msg[0]" @submitSearch="submit"></Button1>
          </div>
        </div>
      </div><!-- widget-box -->
    </div><!-- page-content-area -->
  </div>
</template>

<script>
import ComboBox3 from '../small/ComboBox3'
import ComboBox4 from '../small/ComboBox4'
import ComboBox5 from '../small/ComboBox5'
import ComboBox6 from '../small/ComboBox6'
import Button1 from '../small/Button1'
import PlanProjectPage from './PlanProjectPage'
import $ from 'jquery'
import R from '../../router/index.js'
export default {
  name: 'ProjectPage',
  components: { ComboBox3, ComboBox4, ComboBox5, ComboBox6, Button1, PlanProjectPage },
  data () {
    return {
      msg: ['搜索', '提交'],
      which_department: '0',
      ok: false,
      myOption: 'plan_personal'
    }
  },
  methods: {
    departmentSelection (param) {
      console.log('param:', param)
      this.which_department = param
      console.log('which_department:', this.which_department)
    },
    mySelection (param) {
      this.myOption = param
    },
    submit () {
      this.ok = true
      let URL = ''
      let display = this.myOption === 'plan_personal'
      if (this.myOption === 'plan_personal') {
        URL = 'http://localhost:8080/ProjectPage/projectQuery/' + encodeURI(JSON.stringify(this.which_department))
      } else {
        URL = 'http://localhost:8080/ProjectPage/showProject'
      }
      $.ajax({
        type: 'GET',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        url: URL,
        dataType: 'json',
        success: (result) => {
          // 跳到PlanProjectPage
          R.push({ path: R.options.routes[2].children[1].path, query: { param: result, display: display } })
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
