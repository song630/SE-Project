<template>
  <div class="page-content">
    <div class="page-content-area">
      <div class="widget-box">
        <div class="widget-header">
          <h4 class="widget-title">
            查找学生
          </h4>
        </div>
        <div class="widget-body">
          <div class="widget-content">
            <h3 class="widget-instructions">
              请输入以下信息
            </h3>
            <hr>
            <div class="demo-input-suffix">
              学号：
              <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="toSubmit.stuID">
              </el-input>
            </div>
            <div class="demo-input-suffix">
              姓名：
              <el-input placeholder="请输入内容" v-model="toSubmit.stuName">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </div>
            <el-button type="primary" @click="submit">搜索</el-button>
          </div>
        </div>
      </div><!-- widget-box -->
    </div><!-- page-content-area -->
  </div>
</template>

<script>
import Button1 from '../small/Button1'
import InputText from '../small/Text'
import SubStuPage from './SubStuPage'
import $ from 'jquery'
import R from '../../router/index.js'
export default {
  name: 'QueryStudentPage',
  components: { Button1, InputText, SubStuPage },
  data () {
    return {
      toSubmit: {
        stuID: 0,
        stuName: ''
      }
    }
  },
  methods: {
    submit () {
      $.ajax({
        type: 'GET',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        url: 'http://localhost:8080/Admin/studentQuery/' + encodeURI(JSON.stringify(this.toSubmit)),
        dataType: 'json',
        success: (result) => {
          R.push({ path: R.options.routes[7].children[1].path, query: { param: result } })
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
.empty {
  margin-bottom: 10px;
}
</style>
