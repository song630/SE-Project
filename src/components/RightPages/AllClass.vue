<template>
  <div>
    <el-table :data="queryResults">
      <el-table-column prop="teacherName" label="教师姓名">
      </el-table-column>
      <el-table-column prop="classID" label="课程号">
      </el-table-column>
      <el-table-column label="课程名称">
        <template slot-scope="scope">
          <el-button type="text" @click="courseInfoRequest(scope.row)">
            {{ scope.row.courseTitle }}
          </el-button>
        </template>
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
      <el-table-column label="查看学生">
        <template slot-scope="scope">
          <el-button type="primary" @click="viewStudents(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import $ from 'jquery'
import R from '../../router/index.js'
export default {
  name: 'AllClass',
  data () {
    return {
      queryResults: []
    }
  },
  methods: {
    courseInfoRequest: function (info) {},
    viewStudents: function (info) {
      $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/Admin/viewStudentsOfClass/' + encodeURI(JSON.stringify(info.classID)),
        dataType: 'json',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        success: (result) => {
          // 跳转到所有选课学生的页面
          R.push({ path: R.options.routes[9].children[2].path, query: { param: result } })
        },
        error: function () {
          alert('error')
        }
      })
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
  }
}
</script>

<style scoped>

</style>
