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
                <td><a :href=item.index.enroll>转入选课</a></td>
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
            classLocation: '曹光彪-201',
            enroll: 'http://jwbinfosys.zju.edu.cn/xscxbm.aspx'
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
            classLocation: '曹光彪-301',
            enroll: 'http://jwbinfosys.zju.edu.cn/xscxbm.aspx'
          }
        }
      ]
    }
  },
  props: {
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
  alignment: center;
}
tr td {
  font-family: Microsoft YaHei, Helvetica, sans-serif;
  font-weight: normal;
  padding: 5px 20px 5px 20px;
  border: 0.005em solid #ddd;
}
a:link {
  color: #669fc7;
  text-decoration: none; /* remove underline */
}
a:visited {
  color: #478fca;
  text-decoration: none;
}
a:hover {
  color: #478fca;
  text-decoration: underline;
  cursor: pointer;
}
</style>
