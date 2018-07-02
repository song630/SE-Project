<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>选课</template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="$router.push($router.options.routes[1].children[0].path)">课程搜索</el-menu-item>
            <el-menu-item index="1-2" @click="$router.push($router.options.routes[3].children[0].path)">选课</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push($router.options.routes[8].children[0].path)">补选</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>培养方案</template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="$router.push($router.options.routes[2].children[0].path)">制定培养方案</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>选课管理</template>
          <el-menu-item-group>
            <el-menu-item index="3-1" @click="$router.push($router.options.routes[5].children[0].path)">设置选课时间</el-menu-item>
            <el-menu-item index="3-2" @click="$router.push($router.options.routes[9].children[0].path)">查看课程</el-menu-item>
            <el-menu-item index="3-3" @click="$router.push($router.options.routes[7].children[0].path)">查找学生</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-button type="text" @click="$router.push($router.options.routes[0].children[0].path)" style="float: left; margin-top: 10px;">
          首页
        </el-button>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>user01</span>
      </el-header>

      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>
