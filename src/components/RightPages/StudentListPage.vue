<template>
  <div class="page-content">
    <div class="page-content-area">
      <div class="widget-box">
        <div class="widget-header">
          <h4 class="widget-title">
            选课学生列表
          </h4>
        </div>

        <div class="widget-body">
          <div class="widget-content">
            <div class="separate-header">
              教师姓名：{{ metadata.teacherName }} 课程号：{{ metadata.classID }}
              课程名称：{{ metadata.courseName }} 课程类别：{{ metadata.courseType }}
              学分：{{ metadata.credits }} 学期：{{ metadata.sem }}
              课程时间：{{ metadata.classTime }} 课程地点：{{ metadata.classLocation }}
            </div>
            <div class="table-style-1" id="table1">
              <tr>
                <th>学生姓名</th>
                <th>学号</th>
                <th>学院</th>
                <th>专业</th>
                <th>年级</th>
                <th>删除学生</th>
              </tr>
              <tr v-for="(item, iter) in firstStudentList" :key="iter">
                <td>{{ item.index.stuName }}</td>
                <td>{{ item.index.stuID }}</td>
                <td>{{ item.index.department }}</td>
                <td>{{ item.index.major }}</td>
                <td>{{ item.index.grade }}</td>
                <td>
                  <button @click="deleteStudent(item.index, iter)" class="delete-button">删除学生
                  </button>
                </td><!-- 删除初选学生 -->
              </tr>
            </div>
            <!-- ======================================================================== -->
            <div class="separate-header">补选学生列表</div>
            <div class="table-style-1" id="table2">
              <tr>
                <th>学生姓名</th>
                <th>学号</th>
                <th>学院</th>
                <th>专业</th>
                <th>年级</th>
                <th>确认补选</th>
                <th>拒绝补选</th>
              </tr>
              <tr v-for="(item, iter) in secondStudentList" :key="iter">
                <td>{{ item.index.stuName }}</td>
                <td>{{ item.index.stuID }}</td>
                <td>{{ item.index.department }}</td>
                <td>{{ item.index.major }}</td>
                <td>{{ item.index.grade }}</td>
                <td><button @click="acceptStudent(item.index, iter)" class="accept-button">同意补选</button></td>
                <td><button @click="rejectStudent(item.index, iter)" class="reject-button">拒绝补选</button></td>
              </tr>
            </div>

            <hr>
            <PopLayer></PopLayer>
          </div><!-- widget-content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PopLayer from '../small/PopLayer'
export default {
  name: 'StudentListPage',
  components: { PopLayer },
  methods: {
    deleteStudent (stuInfo, index) {
      console.log('删除学生', stuInfo, index)
    },
    acceptStudent (stuInfo, index) {
      console.log('同意补选', stuInfo, index)
    },
    rejectStudent (stuInfo, index) {
      console.log('拒绝补选', stuInfo, index)
    }
  },
  data () {
    return {
      metadata: { // 基本课程信息
        teacherName: '刘玉生',
        classID: 21120261,
        courseName: '软件工程',
        courseType: '专业必修课',
        credits: 3.5,
        sem: '春夏学期',
        classTime: 'Mon-1,2',
        classLocation: '曹光彪-201'
      },
      firstStudentList: [
        {
          index: {
            stuName: 'AAA',
            stuID: 3150100000,
            department: 'CS',
            major: 'CS',
            grade: 2015
          }
        },
        {
          index: {
            stuName: 'BBB',
            stuID: 3150100369,
            department: 'EE',
            major: 'EE',
            grade: 2015
          }
        }
      ],
      secondStudentList: [
        {
          index: {
            stuName: 'CCC',
            stuID: 3150100001,
            department: 'CS',
            major: 'CS',
            grade: 2014
          }
        },
        {
          index: {
            stuName: 'DDD',
            stuID: 3150100111,
            department: 'EE',
            major: 'EE',
            grade: 2016
          }
        }
      ]
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
