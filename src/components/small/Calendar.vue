<template>
  <div class="calendar-range-picker">
    <div class="ranges">
      <ReadonlyText :msg="msg[0]" ref="r1" class="readonly-text"></ReadonlyText><!-- 起始日期 -->
      <ReadonlyText :msg="msg[1]" ref="r2" class="readonly-text"></ReadonlyText><!-- 结束日期 -->
    </div>
    <div class="calendar-left">
      <table class="calendar-table">
        <thead>
        <tr>
          <th class="pre" @click="move_before(0)"></th>
          <th colspan="5" align="middle" class="calendar-title">{{ months[cur_month[0]] + ' ' + cur_year[0] }}</th>
          <th class="next" @click="move_after(0)"></th>
        </tr>
        <tr class="seven-days">
          <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item1, index1) in Array(6)" :key="index1">
          <th v-for="(item2, index2) in Array(7)" :key="index2" align="middle" @click="select0(index1, index2)">{{ entries[0][index1][index2] }}</th>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="calendar-right">
      <table class="calendar-table">
        <thead>
        <tr>
          <th class="pre" @click="move_before(1)"></th>
          <th colspan="5" align="middle" class="calendar-title">{{ months[cur_month[1]] + ' ' + cur_year[1] }}</th>
          <th class="next" @click="move_after(1)"></th>
        </tr>
        <tr class="seven-days">
          <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item3, index3) in Array(6)" :key="index3">
          <th v-for="(item4, index4) in Array(7)" :key="index4" align="middle" @click="select1(index3, index4)">{{ entries[1][index3][index4] }}</th>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ReadonlyText from './ReadonlyText'
import Button1 from './Button1'
export default {
  name: 'Calendar',
  components: { ReadonlyText, Button1 },
  data () {
    return {
      msg: ['起始日期', '结束日期'],
      input: ['aaa', 'yyy'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      cur_month: [5, 5], // months的下标
      cur_year: [2018, 2018],
      cur_day: [1, 1],
      entries: [ // 初始化为2018年6月
        [[0, 0, 0, 0, 0, 1, 2],
          [3, 4, 5, 6, 7, 8, 9],
          [10, 11, 12, 13, 14, 15, 16],
          [17, 18, 19, 20, 21, 22, 23],
          [24, 25, 26, 27, 28, 29, 30],
          [0, 0, 0, 0, 0, 0, 0]],
        [[0, 0, 0, 0, 0, 1, 2],
          [3, 4, 5, 6, 7, 8, 9],
          [10, 11, 12, 13, 14, 15, 16],
          [17, 18, 19, 20, 21, 22, 23],
          [24, 25, 26, 27, 28, 29, 30],
          [0, 0, 0, 0, 0, 0, 0]]
      ]
    }
  },
  methods: {
    select0 (param1, param2) { // 选中了一个日期
      if (this.entries[0][param1][param2] === 0) return
      this.input[0] = this.cur_year[0] + '年' + (this.cur_month[0] + 1) + '月' + this.entries[0][param1][param2] + '日'
      // 父组件给子组件动态传值 调用子组件函数的同时完成传值
      this.cur_day[0] = this.entries[0][param1][param2]
      this.$refs.r1.getNewValue(this.input[0])
      // console.log(this.input[0])
    },
    select1 (param1, param2) { // 选中了一个日期
      if (this.entries[1][param1][param2] === 0) return
      this.input[1] = this.cur_year[1] + '年' + (this.cur_month[1] + 1) + '月' + this.entries[1][param1][param2] + '日'
      this.cur_day[1] = this.entries[1][param1][param2]
      this.$refs.r2.getNewValue(this.input[1])
    },
    move_before (which) { // 前移一个月
      console.log('move before')
      if (this.cur_month[which] === 0) {
        this.cur_month[which] = 11
        this.cur_year[which]--
      } else {
        this.cur_month[which]--
      }
      let days = this.get_days(this.cur_year[which], this.cur_month[which]) // 这一年的这个月共有多少天
      let start = this.get_weekday(this.cur_year[which], this.cur_month[which], 1) // 这个月的1号是周几
      console.log('月份的天数', days, '1号是周几', start)
      let count = 1
      for (let x = 0; x <= 5; x++) {
        for (let y = 0; y <= 6; y++) {
          this.entries[which][x][y] = ((6 * x + y) < start ? 0 : (count > days ? 0 : count))
          if ((6 * x + y) >= start) {
            count++
          }
        }
      }
      this.$forceUpdate() // 层次复杂时不会自动渲染更新
    },
    move_after (which) { // 后移一个月
      if (this.cur_month[which] === 11) {
        this.cur_month[which] = 0
        this.cur_year[which]++
      } else {
        this.cur_month[which]++
      }
      let days = this.get_days(this.cur_year[which], this.cur_month[which])
      let start = this.get_weekday(this.cur_year[which], this.cur_month[which], 1)
      let count = 1
      for (let x = 0; x <= 5; x++) {
        for (let y = 0; y <= 6; y++) {
          this.entries[which][x][y] = ((6 * x + y) < start ? 0 : (count > days ? 0 : count))
          if ((6 * x + y) >= start) {
            count++
          }
        }
      }
      this.$forceUpdate()
    },
    get_days (year, month) { // 某年某月共有多少天
      let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if (month === 1) return ((year % 4 === 0) && ((year % 100) !== 0)) || (year % 400 === 0) ? 29 : 28
      else return daysInMonths[month]
    },
    get_weekday (year, month, day) { // 周几
      let d = this.get_passed_days(year, month, day)
      console.log('num of passed days:', d)
      let y = year - 1
      let w = y * 365 + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + d
      console.log('w:', w)
      return w % 7
    },
    get_passed_days (year, month, day) { // 一年内已经过去的天数
      let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      let passed = 0
      for (let i = 0; i < month; i++) {
        passed += daysInMonths[i]
      }
      passed += day
      if ((month >= 2) && this.is_leap_year(year)) { // 闰年
        passed++
      }
      return passed
    },
    is_leap_year (year) {
      return (year % 4 === 0) ? (year % 100 !== 0) : false
    }
  }
}
</script>

<style scoped>
.readonly-text {
  display: inline-table; /* 并排显示 */
}
.calendar-left, .calendar-right {
  display: inline-table; /* 并排显示 */
}
.pre {
  display: inline-block;
  margin: 3px;
  border-left: 3px solid; border-bottom: 3px solid;
  width: 5px; height: 5px;
  transform: rotate(45deg);
}
.next {
  display: inline-block;
  margin: 3px;
  border-right: 3px solid; border-bottom: 3px solid;
  width: 5px; height: 5px;
  transform: rotate(-45deg);
}
th:hover {
  cursor: pointer;
  background-color: #eeeeee;
}
tr.seven-days th {
  width: 10px;
}
.calendar-table {
  border: solid 1px #d5d5d5;
  margin-bottom: 10px;
  padding: 10px;
}
thead tr th {
  font-weight: bold;
}
</style>
