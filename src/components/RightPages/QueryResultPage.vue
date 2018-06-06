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
            <div class="table-style-1" id="table1">
              <tr>
                <th>教师姓名</th>
                <th>课程号</th>
                <th>课程名称</th><!-- should be a link -->
                <th>课程类别</th>
                <th>学分</th>
                <th>学期</th>
                <th>上课时间</th>
                <th>上课地点</th>
                <th>选课</th>
              </tr>
              <tr v-for="query_result in query_results" :key="query_result.entry">
                <!-- :key相当于是索引的作用，提高循环性能 -->
                <td>{{ query_result.teacherName }}</td>
                <td>{{ query_result.classID }}</td>
                <td><a ref="query_result.courseInfoLink">{{ query_result.courseTitle }}</a></td>
                <td>{{ query_result.courseType }}</td>
                <td>{{ query_result.credits }}</td>
                <td>{{ query_result.sem }}</td>
                <td>{{ query_result.classTime }}</td>
                <td>{{ query_result.classLocation }}</td>
                <td><a ref="query_result.enroll">转入选课</a></td>
              </tr>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QueryResultPage',
  props: {
    query_results: [
      {
        entry: {
          teacherName: '刘玉生',
          classID: 21120261,
          courseTitle: '软件工程',
          courseInfoLink: 'http://jwbinfosys.zju.edu.cn/html_kc/22188080.html',
          courseType: 'public',
          credits: 2.0,
          sem: 'Spring',
          classTime: 'Mon-1,2',
          classLocation: 'CGBBuilding-201',
          enroll: 'http://jwbinfosys.zju.edu.cn/xscxbm.aspx'
        }
      },
      {
        entry: {
          teacherName: '刘玉生',
          classID: 21120262,
          courseTitle: '软件工程',
          courseInfoLink: 'http://jwbinfosys.zju.edu.cn/html_kc/22188081.html',
          courseType: 'public',
          credits: 2.0,
          sem: 'Summer',
          classTime: 'Mon-3,4',
          classLocation: 'CGBBuilding-301',
          enroll: 'http://jwbinfosys.zju.edu.cn/xscxbm.aspx'
        }
      }
    ]
  }
}
</script>

<style scoped>
@import "../../css/page.css";
.table-style-1 {
  box-sizing: border-box;
  border: 1px solid #ddd;
  width: 100%;
  max-width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: transparent;
  vertical-align: middle;
}
tr th {
  font-family: Microsoft YaHei, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 15px;
  padding: 5px 20px 5px 20px;
  background: linear-gradient(#eeeeee, #DDDDDD);
  border-bottom-width: 5px;
  border-left: 1px solid #ddd;
}
</style>
