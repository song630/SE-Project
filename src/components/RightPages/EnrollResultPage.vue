<template>
  <div class="page-content">
    <div class="page-content-area">
      <div class="widget-box">
        <div class="widget-header">
          <h4 class="widget-title">
            选课
          </h4>
        </div>

        <div class="widget-body">
          <div class="widget-content">
            <div class="table-style-1" id="table1">
              <tr>
                <th>教师姓名</th>
                <th>课程号</th>
                <th>课程名称</th>
                <th>课程类别</th>
                <th>学分</th>
                <th>学期</th>
                <th>上课时间</th>
                <th>上课地点</th>
                <th>选择</th>
              </tr>
              <tr v-for="(item, iter) in queryResults" :key="iter">
                <td>{{ item.teacherName }}</td>
                <td>{{ item.classID }}</td>
                <td>{{ item.courseTitle }}</td>
                <td>{{ item.courseType }}</td>
                <td>{{ item.credits }}</td>
                <td>{{ item.sem }}</td>
                <td>{{ item.classTime }}</td>
                <td>{{ item.classLocation }}</td>
                <td>
                  <div class="check-box">
                    <input type="checkbox" :value="iter" :id="iter" v-model="ticked" @change="addEnroll(iter, item.classID)" :disabled="judgeCheckbox(iter)">
                    <label :for="iter"></label>
                  </div>
                </td>
              </tr>
            </div>
<!-- ======================================================================== -->
            <div class="separate-header">已选教学班</div>
            <div class="table-style-1" id="table2">
              <tr>
                <th>教师姓名</th>
                <th>课程号</th>
                <th>课程名称</th>
                <th>课程类别</th>
                <th>学分</th>
                <th>学期</th>
                <th>上课时间</th>
                <th>上课地点</th>
                <th>选课时间</th>
                <th>选课志愿</th>
              </tr>
              <tr v-for="(item0, iter0) in selected" :key="iter0">
                <td v-for="(item1, iter1) in item0" :key="iter1">{{ item1 }}</td>
              </tr>
            </div>

          </div><!-- widget-content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'EnrollResultPage',
  data () { // v-for cannot work if put 'queryResults' in props
    return {
      ticked: [],
      selected: [
        ['', null, '', '', '', '', '', '', '', 1], // 分别是教师姓名、课程号、学期、上课时间、上课地点、选课时间、志愿
        ['', null, '', '', '', '', '', '', '', 2],
        ['', null, '', '', '', '', '', '', '', 3]
      ],
      selected_num: 0,
      queryResults: []
    }
  },
  mounted: function () {
    let param = this.$route.query.param
    for (let i = 0; i < param.length; i++) {
      this.queryResults.push({
        teacherName: param[i].teacherName,
        classID: param[i].classID,
        courseTitle: param[i].courseTitle,
        courseType: param[i].courseType,
        credits: param[i].credits,
        sem: param[i].sem,
        classTime: param[i].classTime,
        classLocation: param[i].classLocation
      })
    }
  },
  props: {},
  methods: {
    judgeCheckbox (param) {
      if (this.selected_num < 3) return false
      // == 3:
      return (this.ticked.indexOf(param) === -1)
    },
    addEnroll (param, id) {
      console.log(['ticked:', this.ticked, 'param:', param])
      if (this.ticked.indexOf(param) > -1) { // 完成选课
        this.selected_num++
        // $ajax 发送请求
        $.ajax({
          type: 'GET',
          url: 'http://localhost:8080/ClassSelect/confirmEnroll/' + encodeURI(JSON.stringify(id)) + '/select',
          dataType: 'json',
          header: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          success: (result) => {
            // whichRow: 添加到哪一行
            let whichRow = (this.selected[0][0] === '') ? 0 : (this.selected[1][0] === '') ? 1 : 2
            this.selected[whichRow][0] = this.queryResults[param].teacherName
            this.selected[whichRow][1] = this.queryResults[param].classID
            this.selected[whichRow][2] = this.queryResults[param].courseTitle
            this.selected[whichRow][3] = this.queryResults[param].courseType
            this.selected[whichRow][4] = this.queryResults[param].credits
            this.selected[whichRow][5] = this.queryResults[param].sem
            this.selected[whichRow][6] = this.queryResults[param].classTime
            this.selected[whichRow][7] = this.queryResults[param].classLocation
            this.$forceUpdate()
            alert('选课成功')
          },
          error: function () {
            alert('error')
          }
        })
      } else { // 完成退课
        // $ajax 发送请求
        $.ajax({
          type: 'GET',
          url: 'http://localhost:8080/ClassSelect/confirmEnroll/' + encodeURI(JSON.stringify(id)) + '/drop',
          dataType: 'json',
          header: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          success: (result) => {
            // 看退的课是下面表格中的哪一栏
            let col = 0
            for (let i = 0; i <= 2; i++) {
              if (this.selected[i][1] === this.queryResults[param].classID) {
                col = i
                console.log('found')
                break
              }
            }
            this.selected_num--
            // 找到之后
            console.log('col:', col)
            if (col === 0) {
              this.selected[0] = this.selected[1].slice(0) // deep copy
              this.selected[0][9] = 1
              if (this.selected_num === 0) return
            }
            if (col === 0 || col === 1) {
              this.selected[1] = this.selected[2].slice(0)
              this.selected[1][9] = 2
              if (this.selected_num === 1) return
              this.selected[2] = ['', null, '', '', '', '', '', '', '', 3].slice(0)
            }
            alert('退课成功')
          },
          error: function () {
            alert('error')
          }
        })
      }
    }
  }
}
</script>

<style scoped>
@import "../../css/page.css";
@import "../../css/table.css";
@import "../../css/checkbox.css";
.separate-header {
  background-color: #307ecc;
  color: #FFF;
  font-size: 14px;
  line-height: 38px;
  padding-left: 12px;
  margin-bottom: 1px;
  margin-top: 15px;
}
.table-style-1 {
  margin-top: 3px;
}
</style>
