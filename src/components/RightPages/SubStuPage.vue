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
        <div class="table-style-1" id="table1">
          <tr>
            <th>教师姓名</th>
            <th>课程号</th>
            <th>课程名</th>
            <th>课程类别</th>
            <th>学分</th>
            <th>学期</th>
            <th>上课时间</th>
            <th>上课地点</th>
            <th>删除</th>
          </tr>
          <tr v-for="(item, iter) in firstList" :key="iter">
            <td>{{ item.index.teacherName }}</td>
            <td>{{ item.index.classID }}</td>
            <td>{{ item.index.courseTitle }}</td>
            <td>{{ item.index.courseType }}</td>
            <td>{{ item.index.credits }}</td>
            <td>{{ item.index.sem }}</td>
            <td>{{ item.index.classTime }}</td>
            <td>{{ item.index.classLocation }}</td>
            <td><button @click="deleteStudent(item.index, iter)" class="delete-button">删除学生
            </button></td>
          </tr>
        </div>
        <hr>
        <div class="separate-header">补选课程列表</div>
        <div class="table-style-1" id="table2">
          <tr>
            <th>教师姓名</th>
            <th>课程号</th>
            <th>课程名</th>
            <th>课程类别</th>
            <th>学分</th>
            <th>学期</th>
            <th>上课时间</th>
            <th>上课地点</th>
            <th>同意</th>
            <th>拒绝</th>
          </tr>
          <tr v-for="(item, iter) in secondList" :key="iter">
            <td>{{ item.index.teacherName }}</td>
            <td>{{ item.index.classID }}</td>
            <td>{{ item.index.courseTitle }}</td>
            <td>{{ item.index.courseType }}</td>
            <td>{{ item.index.credits }}</td>
            <td>{{ item.index.sem }}</td>
            <td>{{ item.index.classTime }}</td>
            <td>{{ item.index.classLocation }}</td>
            <td><button @click="acceptStudent(item.index, iter)" class="accept-button">同意补选</button></td>
            <td><button @click="rejectStudent(item.index, iter)" class="reject-button">拒绝补选</button></td>
          </tr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      firstList: [
        {
          index: {
            teacherName: 'LYS',
            classID: 123456,
            courseTitle: '软件工程',
            courseType: '专业选修课',
            credits: 3.0,
            sem: 'spring',
            classTime: 'Mon-1, 2',
            classLocation: 'CGBBuilding-201'
          }
        },
        {
          index: {
            teacherName: 'LYS',
            classID: 123456,
            courseTitle: '软件工程',
            courseType: '专业必修课',
            credits: 3.5,
            sem: 'spring',
            classTime: 'Mon-1, 2',
            classLocation: 'CGBBuilding-201'
          }
        }
      ],
      secondList: [
        {
          index: {
            teacherName: 'LYS',
            classID: 222222,
            courseTitle: '软件工程',
            courseType: '专业选修课',
            credits: 2.0,
            sem: 'spring',
            classTime: 'Mon-1, 2',
            classLocation: 'CGBBuilding-301'
          }
        },
        {
          index: {
            teacherName: 'LYS',
            classID: 111111,
            courseTitle: '软件工程',
            courseType: '专业选修课',
            credits: 3.5,
            sem: 'spring',
            classTime: 'Fri-1, 2',
            classLocation: 'CGBBuilding-201'
          }
        }
      ]
    }
  },
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
