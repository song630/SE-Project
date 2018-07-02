<template>
  <div class="widget-box">
    <div class="widget-header">
      <h4 class="widget-title">
        选课列表
      </h4>
    </div>
    <div class="widget-body">
      <div class="widget-content">
        <div class="separate-header">
          初选课程列表 学生姓名：{{ metadata.stuName }} 学号：{{ metadata.stuName }}
          学院：{{ metadata.department }} 专业：{{ metadata.major }} 年级：{{ metadata.grade }}
        </div>
        <el-table :data="firstList">
          <el-table-column prop="teacherName" label="教师姓名">
          </el-table-column>
          <el-table-column prop="classID" label="课程号">
          </el-table-column>
          <el-table-column prop="courseTitle" label="课程名称">
          </el-table-column>
          <el-table-column prop="courseType" label="课程类别">
          </el-table-column>
          <el-table-column prop="credits" label="学分">
          </el-table-column>
          <el-table-column prop="sem" label="学期">
          </el-table-column>
          <el-table-column prop="classTime" label="上课时间">
          </el-table-column>
          <el-table-column prop="classLocation" label="上课地点">
          </el-table-column>
          <el-table-column label="删除学生">
            <template slot-scope="scope">
              <el-button type="warning" @click="deleteStudent(scope.row, scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <hr>
        <div class="separate-header">补选课程列表</div>
        <el-table :data="secondList">
          <el-table-column prop="teacherName" label="教师姓名">
          </el-table-column>
          <el-table-column prop="classID" label="课程号">
          </el-table-column>
          <el-table-column prop="courseTitle" label="课程名称">
          </el-table-column>
          <el-table-column prop="courseType" label="课程类别">
          </el-table-column>
          <el-table-column prop="credits" label="学分">
          </el-table-column>
          <el-table-column prop="sem" label="学期">
          </el-table-column>
          <el-table-column prop="classTime" label="上课时间">
          </el-table-column>
          <el-table-column prop="classLocation" label="上课地点">
          </el-table-column>
          <el-table-column label="同意补选">
            <template slot-scope="scope">
              <el-button type="primary" @click="acceptStudent(scope.row, scope.$index)">同意</el-button>
            </template>
          </el-table-column>
          <el-table-column label="拒绝补选">
            <template slot-scope="scope">
              <el-button type="warning" @click="rejectStudent(scope.row, scope.$index)">拒绝</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'SubStuPage',
  data () {
    return {
      metadata: {
        stuName: 'AAA',
        stuID: '3150109999',
        department: 'CS',
        major: 'CS',
        grade: 2015
      },
      firstList: [],
      secondList: []
    }
  },
  mounted: function () {
    let param = this.$route.query.param
    this.metadata.stuName = param.stuName
    this.metadata.stuID = param.stuID
    this.metadata.department = param.department
    this.metadata.major = param.major
    this.metadata.grade = param.grade
    let first = param.enrollList
    let second = param.re_enrollList
    for (let i = 0; i < first.length; i++) {
      this.firstList.push({
        teacherName: first[i].teacherName,
        classID: first[i].classID,
        courseTitle: first[i].courseTitle,
        courseType: first[i].courseType,
        credits: first[i].credits,
        sem: first[i].sem,
        classTime: first[i].classTime,
        classLocation: first[i].classLocation
      })
    }
    for (let i = 0; i < second.length; i++) {
      this.secondList.push({
        teacherName: second[i].teacherName,
        classID: second[i].classID,
        courseTitle: second[i].courseTitle,
        courseType: second[i].courseType,
        credits: second[i].credits,
        sem: second[i].sem,
        classTime: second[i].classTime,
        classLocation: second[i].classLocation
      })
    }
  },
  methods: {
    deleteStudent (info, index) {
      console.log('删除学生')
      $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/Admin/delStudent/' + encodeURI(JSON.stringify(info.classID)) + '/' + encodeURI(JSON.stringify(this.metadata.stuID)),
        dataType: 'json',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        success: (result) => {
          this.firstList.splice(index, 1)
        },
        error: function () {
          alert('error')
        }
      })
    },
    acceptStudent (info, index) {
      console.log('同意补选')
      $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/Admin/acceptSecond/' + encodeURI(JSON.stringify(info.classID)) + '/' + encodeURI(JSON.stringify(this.metadata.stuID)),
        dataType: 'json',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        success: (result) => {
          this.firstList.push(this.secondList[index])
          this.secondList.splice(index, 1)
        },
        error: function () {
          alert('error')
        }
      })
    },
    rejectStudent (info, index) {
      console.log('拒绝补选')
      $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/Admin/rejectSecond/' + encodeURI(JSON.stringify(info.classID)) + '/' + encodeURI(JSON.stringify(this.metadata.stuID)),
        dataType: 'json',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        success: (result) => {
          this.secondList.splice(index, 1)
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
@import "../../css/table.css";
@import "../../css/threebuttons.css";
.separate-header {
  background-color: #307ecc;
  color: #FFF;
  font-size: 14px;
  line-height: 38px;
  padding-left: 12px;
  margin-bottom: 1px;
  margin-top: 15px;
}
</style>
