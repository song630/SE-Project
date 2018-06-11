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
              <tr v-for="item in queryResults" :key="item">
                <td>{{ item.index.teacherName }}</td>
                <td>{{ item.index.classID }}</td>
                <td><a :href=item.index.courseInfoLink>{{ item.index.courseTitle }}</a></td>
                <td>{{ item.index.courseType }}</td>
                <td>{{ item.index.credits }}</td>
                <td>{{ item.index.sem }}</td>
                <td>{{ item.index.classTime }}</td>
                <td>{{ item.index.classLocation }}</td>
                <td>
                  <button class="enroll-button" @click="enrollRequest(item.index)">转入选课</button>
                </td>
              </tr>
              <!-- :key相当于是索引的作用，提高循环性能 -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'QueryResultPage',
  data () { // v-for cannot work if put 'queryResults' in props
    return {
      queryResults: [
        {
          index: {
            teacherName: 'LYS',
            classID: 21120261,
            courseTitle: '软件工程',
            courseInfoLink: 'http://jwbinfosys.zju.edu.cn/html_kc/22188080.html',
            courseType: '专业必修课',
            credits: 2.0,
            sem: 'Spring',
            classTime: 'Mon-1,2',
            classLocation: '曹光彪-201'
          }
        },
        {
          index: {
            teacherName: 'LYS',
            classID: 21120222,
            courseTitle: '软件工程',
            courseInfoLink: 'http://jwbinfosys.zju.edu.cn/html_kc/22188082.html',
            courseType: '专业选修课',
            credits: 3.0,
            sem: 'Summer',
            classTime: 'Feb-1,2',
            classLocation: '曹光彪-301'
          }
        }
      ]
    }
  },
  props: {},
  methods: {
    enrollRequest (info) { // info: item.index, 包含课程的名称ID等信息
      window.open(window.location.origin + '/#EnrollPage')
      $.ajax({
        type: 'GET',
        url: 'EnrollSystem/classEnroll',
        dataType: 'json',
        data: { info },
        success: function (result) {
          // 发起转入选课的请求后要返回两类结果
          // 1.course的metadata信息
          // 2.所有可选的class列表
          sessionStorage.obj = JSON.stringify(result)
          window.open(window.location.origin + '/QueryResultPage/EnrollPage', '_self')
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
