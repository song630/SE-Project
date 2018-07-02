<template>
  <el-form ref="form" :model="form" label-width="80px">
    <h2 style="font-weight: normal; color: #3bbfce;">补选申请</h2>
    <el-form-item label="姓名">
      <el-input v-model="form.stuName"></el-input>
    </el-form-item>
    <el-form-item label="学号">
      <el-input v-model="form.stuID"></el-input>
    </el-form-item>
    <el-form-item label="课程名称">
      <el-input v-model="form.courseTitle"></el-input>
    </el-form-item>
    <el-form-item label="课程号">
      <el-input v-model="form.classID"></el-input>
    </el-form-item>
    <el-form-item label="补选理由">
      <el-input type="textarea" v-model="form.reason"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Second',
  data () {
    return {
      form: {
        stuName: '',
        stuID: 0,
        courseTitle: '',
        classID: 0,
        reason: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
      $.ajax({
        type: 'GET',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        url: 'http://localhost:8080/ClassSelect/reEnroll/' + encodeURI(JSON.stringify(this.form.classID)),
        dataType: 'json',
        success: (result) => {
          alert('success')
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

</style>
