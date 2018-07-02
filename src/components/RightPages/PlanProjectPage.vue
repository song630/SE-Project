<template>
  <div class="page-content">
    <div class="page-content-area">
      <div class="widget-box">
        <div class="widget-header">
          <h4 class="widget-title">
            制定个人培养方案
          </h4>
        </div>

        <div class="widget-body">
          <div class="widget-content">
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
              <el-table-column label="选择" v-if="this.$route.query.display">
                <template slot-scope="scope">
                  <div class="check-box">
                    <input type="checkbox" :value="scope.row.courseID" v-model="ticked">
                  </div>
                </template>
              </el-table-column>
            </el-table>
            <hr>
            <el-button @click="submit">提交</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'PlanProjectPage',
  data () {
    return {
      ticked: [],
      queryResults: []
    }
  },
  mounted: function () {
    let param = this.$route.query.param
    for (let i = 0; i < param.length; i++) {
      this.queryResults.push({
        courseID: param[i].courseID,
        courseTitle: param[i].courseTitle,
        courseType: param[i].courseType,
        credits: param[i].credits,
        sem: param[i].sem
      })
    }
  },
  props: {},
  methods: {
    submit () {
      console.log('选定的课程：', this.ticked)
      $.ajax({
        type: 'GET',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        url: 'http://localhost:8080/ProjectPage/submitPersonalProject/' + encodeURI(JSON.stringify(this.ticked)),
        dataType: 'json',
        success: (result) => {
          alert(result.enrollResult)
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
@import "../../css/checkbox.css";
</style>
