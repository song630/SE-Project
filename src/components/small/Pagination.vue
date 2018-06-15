<template>
  <div>
    <ul class="pagination">
      <li><a href="#">«</a></li>
      <li v-for="(item, index) in Array(num_pages)" :key="index" @clicked="change_page(index)">
        <a href="#">{{ index + 1 }}</a>
      </li>
      <li><a href="#">»</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data () {
    return {
      num_pages: 7,
      selected_page_num: 1
    }
  },
  methods: {
    change_page (param) {
      this.selected_page_num = param
    }
  }
}
</script>

<style scoped>
ul.pagination {
  display: inline-block;
  padding: 0;
  margin-bottom: 10px;
}
ul.pagination li {display: inline;}
ul.pagination li a {
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  font-family:"Microsoft YaHei", "Microsoft JhengHei Light", Helvetica, sans-serif;
  font-weight: normal;
  color: #478fca;
  transition: background-color .3s;
  border: 1px solid #ddd;
}
ul.pagination li a:active {
  background-color: #4CAF50;
  color: white;
  border: 1px solid #4CAF50;
}
ul.pagination li a:hover:not(.active) {background-color: #ddd;}
</style>
