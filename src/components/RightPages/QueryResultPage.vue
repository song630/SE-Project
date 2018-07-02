<template>
  <div class="page-content">
    <div class="page-content-area">
      <div class="widget-box">
        <div class="widget-header">
          <h4 class="widget-title">
            选课搜索结果
          </h4>
        </div>

        <div class="widget-body">
          <div class="widget-content">
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
              <el-table-column label="选课">
                <template slot-scope="scope">
                  <el-button type="primary" @click="enrollRequest(scope.row)">选课</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import R from '../../router/index.js'
export default {
  name: 'QueryResultPage',
  data () {
    return {
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
  methods: {
    enrollRequest (info) { // info: 包含课程的名称ID等信息
      $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/ClassSelect/newPage/' + encodeURI(JSON.stringify(info.courseTitle)),
        dataType: 'json',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        success: (result) => {
          // 转入勾选3项的页面
          R.push({ path: R.options.routes[3].children[1].path, query: { param: result } })
        },
        error: function () {
          alert('error')
        }
      })
    },
    courseInfoRequest (info) { // info: 包含课程的名称ID等信息
    }
  }
}
</script>

<style scoped>
@import "../../css/page.css";
@import "../../css/table.css";
.enroll-button {
  font-weight: normal;
  cursor: pointer;
  background: transparent;
  color: #669fc7;
  padding: 10px 25px 10px 25px;
  border: solid transparent 1px;
  text-decoration: none;
  outline: none; /* 去掉按钮选中时候的蓝色边框 */
}
.enroll-button:hover {
  border: solid transparent 1px;
  color: #478fca;
}

</style>
