<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="课程名称">
        <el-input v-model="form.courseTitle"></el-input>
      </el-form-item>
      <el-form-item label="课程号">
        <el-input v-model="form.classID"></el-input>
      </el-form-item>
      <el-form-item label="上课时间">
        <el-select v-model="form.classTime" placeholder="请选择上课时间">
          <el-option label="周一1, 2" value="Mon12"></el-option>
          <el-option label="周一3, 4, 5" value="Mon345"></el-option>
          <el-option label="周一6, 7" value="Mon67"></el-option>
          <el-option label="周一8, 9, 10" value="Mon8910"></el-option>
          <el-option label="周一11, 12, 13" value="Mon111213"></el-option>
          <el-option label="周二1, 2" value="Tue12"></el-option>
          <el-option label="周二3, 4, 5" value="Tue345"></el-option>
          <el-option label="周二6, 7" value="Tue67"></el-option>
          <el-option label="周二8, 9, 10" value="Tue8910"></el-option>
          <el-option label="周二11, 12, 13" value="Tue111213"></el-option>
          <el-option label="周三1, 2" value="Wed12"></el-option>
          <el-option label="周三3, 4, 5" value="Wed345"></el-option>
          <el-option label="周三6, 7" value="Wed67"></el-option>
          <el-option label="周三8, 9, 10" value="Wed8910"></el-option>
          <el-option label="周三11, 12, 13" value="Wed111213"></el-option>
          <el-option label="周四1, 2" value="Thu12"></el-option>
          <el-option label="周四3, 4, 5" value="Thu345"></el-option>
          <el-option label="周四6, 7" value="Thu67"></el-option>
          <el-option label="周四8, 9, 10" value="Thu8910"></el-option>
          <el-option label="周四11, 12, 13" value="Thu111213"></el-option>
          <el-option label="周五1, 2" value="Fri12"></el-option>
          <el-option label="周五3, 4, 5" value="Fri345"></el-option>
          <el-option label="周五6, 7" value="Fri67"></el-option>
          <el-option label="周五8, 9, 10" value="Fri8910"></el-option>
          <el-option label="周五11, 12, 13" value="Fri111213"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import $ from 'jquery'
import R from '../../router/index.js'
export default {
  name: 'EnrollPage',
  methods: {
    submit: function () {
      $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/ClassSelect/search/' + encodeURI(JSON.stringify(this.form)),
        dataType: 'json',
        header: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        success: (result) => {
          // 跳转到搜索结果
          R.push({ path: R.options.routes[1].children[1].path, query: { param: result } })
        },
        error: function () {
          alert('error')
        }
      })
    }
  },
  data () {
    return {
      form: {
        classID: 0,
        courseTitle: '',
        classTime: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
