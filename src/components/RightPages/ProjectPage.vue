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
              <ComboBox4 ref="input9"></ComboBox4>
              <ComboBox5 ref="input10"></ComboBox5>
              <!-- 子组件4把选择的学院的索引发送给父组件 父组件再发送给子组件5 -->
              <hr>
            </form>
            <Button1 :msg="msg" @submitSearch="submit"></Button1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComboBox3 from '../small/ComboBox3'
import ComboBox4 from '../small/ComboBox4'
import ComboBox5 from '../small/ComboBox5'
import Button1 from '../small/Button1'
export default {
  name: 'ProjectPage',
  components: { ComboBox3, ComboBox4, ComboBox5, Button1 },
  data () {
    return { msg: '搜索' }
  },
  methods: {
    submit () {

    }
  }
}
</script>

<style scoped>
@import "../../css/page.css";
</style>
