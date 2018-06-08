<template>
  <!--
  <div class="page-content">
    <div class="page-content-area">
    -->
      <div class="widget-box">
        <div class="widget-header">
          <h4 class="widget-title">
            制定个人培养方案
          </h4>
        </div>

        <div class="widget-body">
          <div class="widget-content">
            <div class="table-style-1" id="table1">
              <tr>
                <th>课程号</th>
                <th>课程名称</th>
                <th>课程类别</th>
                <th>学分</th>
                <th>学期</th>
                <th>选择</th> <!-- 勾选框 -->
              </tr>
              <tr v-for="(item, iter) in queryResults" :key="iter">
                <td>{{ item.index.courseID }}</td>
                <td><a :href=item.index.courseInfoLink>{{ item.index.courseTitle }}</a></td>
                <td>{{ item.index.courseType }}</td>
                <td>{{ item.index.credits }}</td>
                <td>{{ item.index.sem }}</td>
                <td>
                  <div class="check-box">
                    <input type="checkbox" :id="iter" :value="item.index.courseID" v-model="ticked">
                    <label :for="iter"></label>
                  </div>
                </td>
              </tr>

            </div>
            <hr>
            <Button1 :msg="msg" @submitSearch="submit"></Button1>
          </div>
        </div>
      </div>
<!--
    </div>
  </div>-->
</template>

<script>
import Button1 from '../small/Button1'
import $ from 'jquery'
export default {
  name: 'PlanProjectPage',
  components: { Button1 },
  data () { // v-for cannot work if put 'queryResults' in props
    return {
      msg: '提交',
      ticked: [],
      queryResults: [
        {
          index: {
            courseID: 21120261,
            courseTitle: '软件工程',
            courseInfoLink: 'http://jwbinfosys.zju.edu.cn/html_kc/22188080.html',
            courseType: '专业必修课',
            credits: 2.0,
            sem: 'Spring'
          }
        },
        {
          index: {
            courseID: 21120222,
            courseTitle: '软件工程',
            courseInfoLink: 'http://jwbinfosys.zju.edu.cn/html_kc/22188082.html',
            courseType: '专业选修课',
            credits: 3.0,
            sem: 'Summer'
          }
        }
      ]
    }
  },
  props: {},
  methods: {
    submit () {
      let toSubmit = this.ticked
      $.ajax({
        type: 'POST',
        url: 'EnrollSystem/submitPersonalProject',
        dataType: 'json',
        data: { toSubmit },
        success: function (result) {
          // alert()
          sessionStorage.obj = JSON.stringify(result)
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
