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
            <div class="separate-header">
              学号：{{ metadata.studentID }} 姓名：{{ metadata.studentName }} 课程代码：{{ metadata.courseID }}
              课程名称：{{ metadata.courseName }} 学分：{{ metadata.credits }} 开班数：{{ metadata.classNum }}
            </div>
            <div class="table-style-1" id="table1">
              <tr>
                <th>教师姓名</th>
                <th>课程号</th>
                <th>学期</th>
                <th>上课时间</th>
                <th>上课地点</th>
                <th>面向对象</th> <!-- 定值 -->
                <th>余量/容量</th>
                <th>选课</th>
              </tr>
              <tr v-for="(item, iter) in queryResults" :key="iter">
                <td>{{ item.index.teacherName }}</td>
                <td>{{ item.index.classID }}</td>
                <td>{{ item.index.sem }}</td>
                <td>{{ item.index.classTime }}</td>
                <td>{{ item.index.classLocation }}</td>
                <td>{{ item.index.object }}</td>
                <td>{{ item.index.remain }}/{{ item.index.capacity }}</td>
                <td>
                  <div class="check-box">
                    <input type="checkbox" :value="iter" :id="iter" v-model="ticked" @change="addEnroll(iter)" :disabled="judgeCheckbox(iter)">
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
export default {
  name: 'EnrollPage',
  data () { // v-for cannot work if put 'queryResults' in props
    return {
      ticked: [],
      selected: [
        ['', null, '', '', '', '', 1], // 分别是教师姓名、课程号、学期、上课时间、上课地点、选课时间、志愿
        ['', null, '', '', '', '', 2],
        ['', null, '', '', '', '', 3]
      ],
      selected_num: 0,
      metadata: {
        studentID: 3150100000,
        studentName: 'DEF',
        courseName: '软件工程',
        courseID: 123456,
        credits: 1.5,
        classNum: 2 // 列表的项数
      },
      queryResults: [
        {
          index: {
            teacherName: 'ABC',
            classID: 21120261,
            sem: 'Spring',
            classTime: 'Mon-1,2',
            classLocation: '曹光彪-201',
            object: '所有本科生',
            capacity: 120,
            remain: 20
          }
        },
        {
          index: {
            teacherName: 'XYZ',
            classID: 21120222,
            sem: 'Summer',
            classTime: 'Feb-1,2',
            classLocation: '曹光彪-301',
            object: '所有本科生',
            capacity: 120,
            remain: 30
          }
        },
        {
          index: {
            teacherName: 'WSX',
            classID: 21120235,
            sem: 'Winter',
            classTime: 'Fri-1,2',
            classLocation: '曹光彪-301',
            object: '所有本科生',
            capacity: 120,
            remain: 10
          }
        }
      ]
    }
  },
  props: {},
  methods: {
    judgeCheckbox (param) {
      if (this.selected_num < 3) return false
      // == 3:
      return (this.ticked.indexOf(param) === -1)
    },
    addEnroll (param) {
      console.log(['ticked:', this.ticked, 'param:', param])
      if (this.ticked.indexOf(param) > -1) { // 完成选课
        this.selected_num++
        // $ajax 发送请求
        alert('选课成功')
        // whichRow: 添加到哪一行
        let whichRow = (this.selected[0][0] === '') ? 0 : (this.selected[1][0] === '') ? 1 : 2
        this.selected[whichRow][0] = this.queryResults[param].index.teacherName
        this.selected[whichRow][1] = this.queryResults[param].index.classID
        this.selected[whichRow][2] = this.queryResults[param].index.sem
        this.selected[whichRow][3] = this.queryResults[param].index.classTime
        this.selected[whichRow][4] = this.queryResults[param].index.classLocation
      } else { // 完成退课
        alert('退课成功')
        // 看退的课是下面表格中的哪一栏
        let col = 0
        for (let i = 0; i <= 2; i++) {
          // BUG: forget to add 'index' below, undefined
          if (this.selected[i][1] === this.queryResults[param].index.classID) {
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
          this.selected[0][6] = 1
          if (this.selected_num === 0) return
        }
        if (col === 0 || col === 1) {
          this.selected[1] = this.selected[2].slice(0)
          this.selected[1][6] = 2
          if (this.selected_num === 1) return
          this.selected[2] = ['', null, '', '', '', '', 3].slice(0)
        }
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
