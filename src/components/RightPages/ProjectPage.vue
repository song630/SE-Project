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
              <ComboBox6 ref="input11"></ComboBox6>
              <!-- 子组件4把选择的学院的索引发送给父组件 父组件再发送给子组件5 -->
              <hr>
            </form>
            <Button1 :msg="msg" @submitSearch="submit"></Button1>
          </div>
        </div>
      </div><!-- widget-box -->
      <template v-if="ok">
        <PlanProjectPage></PlanProjectPage>
      </template>
    </div><!-- page-content-area -->
    <!--
    <router-link to="/ProjectPage/PlanProjectPage"><div class="router-link">PlanProjectPage</div></router-link>
    <router-view/>
    -->
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
export default {
  name: 'ProjectPage',
  components: { ComboBox3, ComboBox4, ComboBox5, ComboBox6, Button1, PlanProjectPage },
  data () {
    return {
      msg: '搜索',
      which_department: '0',
      ok: false
    }
  },
  methods: {
    departmentSelection (param) {
      console.log('param:', param)
      this.which_department = param
    },
    submit () {
      this.ok = true
      let toSubmit = [
        this.$refs.input8.selected,
        this.$refs.input9.selected,
        this.$refs.input10.selected,
        this.$refs.input11.selected
      ]
      $.ajax({
        type: 'GET',
        url: 'EnrollSystem/projectQuery',
        dataType: 'json',
        data: { toSubmit },
        success: function (result) {
          sessionStorage.obj = JSON.stringify(result) // save data
          window.open(window.location.origin + '/ProjectResultPage', '_self')
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
