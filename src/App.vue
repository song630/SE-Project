<template>
  <div id="app">
    <router-view/>
    <!-- router-link to=/ 表示就显示在当前页面上 -->
    <router-link to="/"><div class="router-link">HelloWorld</div></router-link>
    <router-link to="/SearchPage"><div class="router-link">SearchPage</div></router-link>
    <router-link to="/ProjectPage"><div class="router-link">ProjectPage</div></router-link>
    <!--
    <router-link to="/ProjectPage"><div class="router-link">PlanProjectPage</div></router-link>
    -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link {
  margin-left: 0;
  alignment: left;
}
</style>
