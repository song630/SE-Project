<template>
  <div class="page-content">
    <div class="page-content-area">
      <div class="widget-box">
        <div class="widget-header">
          <h4 class="widget-title">
            查找学生
          </h4>
        </div>
        <div class="widget-body">
          <div class="widget-content">
            <h3 class="widget-instructions">
              请输入以下信息
            </h3>
            <hr>
            <form class="form">
              <InputText :msg="msg[0]"></InputText>
              <div class="empty"></div>
              <InputText :msg="msg[1]"></InputText>
              <hr>
            </form>
            <Button1 :msg="msg[2]" @submitSearch="submit"></Button1>
          </div>
        </div>
      </div><!-- widget-box -->
      <template v-if="ok">
        <SubStuPage></SubStuPage>
      </template>
    </div><!-- page-content-area -->
  </div>
</template>

<script>
import Button1 from '../small/Button1'
import InputText from '../small/Text'
import SubStuPage from './SubStuPage'
export default {
  name: 'QueryStudentPage',
  components: { Button1, InputText, SubStuPage },
  data () {
    return {
      msg: ['学号', '学生姓名', '搜索'],
      ok: false
    }
  },
  methods: {
    submit () {
      this.ok = true
    }
  }
}
</script>

<style scoped>
@import "../../css/page.css";
.empty {
  margin-bottom: 10px;
}
</style>
