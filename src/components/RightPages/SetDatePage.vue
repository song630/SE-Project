<template>
  <div class="page-content">
    <div class="page-content-area">
      <div class="widget-box">
        <div class="widget-header">
          <h4 class="widget-title">
            设置初选 补选 退选时间
          </h4>
        </div>

        <div class="widget-body">
          <div class="widget-content">
            <h3 class="widget-instructions">
              在下面设置日期范围
            </h3>
            <hr>
            <form class="form">
              <div class="separate-header">设置初选时间</div>
              <Calendar ref="c1"></Calendar>
            </form>
            <hr>
            <form class="form">
              <div class="separate-header">设置补选时间</div>
              <Calendar ref="c2"></Calendar>
            </form>
            <hr>
            <form class="form">
              <div class="separate-header">设置退课时间</div>
              <Calendar ref="c3"></Calendar>
            </form>
            <hr>
            <Button1 :msg="msg" @submitSearch="submit"></Button1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Calendar from '../small/Calendar'
import Button1 from '../small/Button1'
export default {
  name: 'SetDatePage',
  components: { Calendar, Button1 },
  data () {
    return {
      msg: '提交'
    }
  },
  methods: {
    submit () {
      let submit = {
        firstBegin: (this.$refs.c1.cur_year[0] + '') + (this.$refs.c1.cur_month[0] + '') + (this.$refs.c1.cur_day[0] + ''),
        firstEnd: (this.$refs.c1.cur_year[1] + '') + (this.$refs.c1.cur_month[1] + '') + (this.$refs.c1.cur_day[1] + ''),
        secondBegin: (this.$refs.c2.cur_year[0] + '') + (this.$refs.c2.cur_month[0] + '') + (this.$refs.c2.cur_day[0] + ''),
        secondEnd: (this.$refs.c2.cur_year[1] + '') + (this.$refs.c2.cur_month[1] + '') + (this.$refs.c2.cur_day[1] + ''),
        dropBegin: (this.$refs.c3.cur_year[0] + '') + (this.$refs.c3.cur_month[0] + '') + (this.$refs.c3.cur_day[0] + ''),
        dropEnd: (this.$refs.c3.cur_year[1] + '') + (this.$refs.c3.cur_month[1] + '') + (this.$refs.c3.cur_day[1] + '')
      }
      let toSubmit = [
        [this.$refs.c1.cur_year,
          this.$refs.c1.cur_month,
          this.$refs.c1.cur_day],
        [this.$refs.c2.cur_year,
          this.$refs.c2.cur_month,
          this.$refs.c2.cur_day],
        [this.$refs.c3.cur_year,
          this.$refs.c3.cur_month,
          this.$refs.c3.cur_day]
      ]
      let flag = [false, false, false]
      for (let i = 0; i <= 2; i++) {
        flag[i] = (toSubmit[i][0][0] > toSubmit[i][0][1] ? false : (toSubmit[i][1][0] > toSubmit[i][1][1] ? false : (toSubmit[i][2][0] < toSubmit[i][2][1])))
      }
      console.log('flag:', flag)
      if (flag[0] === false || flag[1] === false || flag[2] === false) {
        alert('Invalid input.')
        return
      }
      console.log('to submit:', toSubmit)
      $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/Time/enrollSetting/' + encodeURI(JSON.stringify(submit)),
        dataType: 'json',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        success: (result) => {
          alert('success')
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
.separate-header {
  background-color: #307ecc;
  color: #FFF;
  font-size: 14px;
  line-height: 38px;
  padding-left: 12px;
  margin-bottom: 5px;
  margin-top: 15px;
  width: 324px;
}
</style>
