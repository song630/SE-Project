<template>
  <div>
    <el-table :data="queryResults">
      <el-table-column prop="courseID" label="课程号">
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
      <el-table-column label="查看class">
        <template slot-scope="scope">
          <el-button type="primary" @click="viewClass(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import $ from 'jquery'
import R from '../../router/index.js'
export default {
  name: 'AllCourse',
  data () {
    return {
      queryResults: []
    }
  },
  methods: {
    viewClass: function (info) {
      $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/Admin/viewAllClasses/' + encodeURI(JSON.stringify(info.courseID)),
        dataType: 'json',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        success: (result) => {
          // 跳转到所有class的页面
          R.push({ path: R.options.routes[9].children[1].path, query: { param: result } })
        },
        error: function () {
          alert('error')
        }
      })
    }
  },
  mounted: function () {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/Admin/viewAllCourses',
      dataType: 'json',
      header: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      success: (result) => {
        for (let i = 0; i < result.length; i++) {
          this.queryResults.push({
            courseID: result[i].courseID,
            courseTitle: result[i].courseTitle,
            courseType: result[i].courseType,
            credits: result[i].credits,
            sem: result[i].sem
          })
        }
      },
      error: function () {
        alert('error')
      }
    })
  }
}
</script>

<style scoped>

</style>
