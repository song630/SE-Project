<template>
  <div>
    <div class="separate-header">
      教师姓名：{{ metadata.teacherName }} 课程号：{{ metadata.classID }}
      课程名称：{{ metadata.courseName }} 课程类别：{{ metadata.courseType }}
      学分：{{ metadata.credits }} 学期：{{ metadata.sem }}
      课程时间：{{ metadata.classTime }} 课程地点：{{ metadata.classLocation }}
    </div>
    <el-table :data="firstStudentList">
      <el-table-column prop="stuName" label="学生姓名">
      </el-table-column>
      <el-table-column prop="stuID" label="学号">
      </el-table-column>
      <el-table-column prop="department" label="学院">
      </el-table-column>
      <el-table-column prop="major" label="专业">
      </el-table-column>
      <el-table-column prop="grade" label="年级">
      </el-table-column>
      <el-table-column label="删除学生">
        <template slot-scope="scope">
          <button @click="deleteStudent(scope.row, scope.$index)" class="delete-button">删除学生</button>
        </template>
      </el-table-column>
    </el-table>
    <!-- ======================================================================== -->
    <!--
    <div class="separate-header">补选学生列表</div>
    <el-table :data="secondStudentList">
      <el-table-column prop="stuName" label="学生姓名">
      </el-table-column>
      <el-table-column prop="stuID" label="学号">
      </el-table-column>
      <el-table-column prop="department" label="学院">
      </el-table-column>
      <el-table-column prop="major" label="专业">
      </el-table-column>
      <el-table-column prop="grade" label="年级">
      </el-table-column>
      <el-table-column label="确认补选">
        <template slot-scope="scope">
          <button @click="acceptStudent(scope.row, scope.$index)" class="accept-button">同意</button>
        </template>
      </el-table-column>
      <el-table-column label="拒绝补选">
        <template slot-scope="scope">
          <button @click="rejectStudent(scope.row, scope.$index)" class="reject-button">拒绝</button>
        </template>
      </el-table-column>
    </el-table>
    -->
  </div>
</template>

<script>
import PopLayer from '../small/PopLayer'
import $ from 'jquery'
export default {
  name: 'StudentListPage',
  components: { PopLayer },
  methods: {
    deleteStudent (info, index) {
      $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/Admin/delStudent/' + encodeURI(JSON.stringify(this.metadata.classID)) + '/' + encodeURI(JSON.stringify(info.stuID)),
        dataType: 'json',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        success: (result) => {
          this.firstStudentList.splice(index, 1)
        },
        error: function () {
          alert('error')
        }
      })
    },
    acceptStudent (info, index) {
      $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/Admin/acceptSecond/' + encodeURI(JSON.stringify(this.metadata.classID)) + '/' + encodeURI(JSON.stringify(info.stuID)),
        dataType: 'json',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        success: (result) => {
          // this.firstStudentList.push(this.secondStudentList[index])
          // this.secondStudentList.splice(index, 1)
        },
        error: function () {
          alert('error')
        }
      })
    },
    rejectStudent (info, index) {
      $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/Admin/rejectSecond/' + encodeURI(JSON.stringify(this.metadata.classID)) + '/' + encodeURI(JSON.stringify(info.stuID)),
        dataType: 'json',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        success: (result) => {
          // this.secondStudentList.splice(index, 1)
        },
        error: function () {
          alert('error')
        }
      })
    }
  },
  mounted: function () {
    let param = this.$route.query.param
    this.metadata = {
      teacherName: param.teacherName,
      classID: param.classID,
      courseName: param.courseName,
      courseType: param.courseType,
      credits: param.credits,
      sem: param.sem,
      classTime: param.classTime,
      classLocation: param.classLocation
    }
    let param1 = this.$route.query.param.stuList
    // let param2 = this.$route.query.param.secondStudentList
    for (let i = 0; i < param1.length; i++) {
      this.firstStudentList.push({
        stuName: param1[i].stuName,
        stuID: param1[i].stuID,
        department: param1[i].department,
        major: param1[i].major,
        grade: param1[i].grade
      })
    }
    /*
    for (let i = 0; i < param2.length; i++) {
      this.secondStudentList.push({
        stuName: param2[i].stuName,
        stuID: param2[i].stuID,
        department: param2[i].department,
        major: param2[i].major,
        grade: param2[i].grade
      })
    }
    */
  },
  data () {
    return {
      metadata: null,
      firstStudentList: []
      // secondStudentList: []
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
.table-style-1 {
  margin-top: 3px;
}
</style>
