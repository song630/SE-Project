<template>
  <div class="page-content">
    <div class="page-content-area">
      <div class="widget-box">
        <div class="widget-header">
          <h4 class="widget-title">
            设置初选 补选 退选时间
          </h4>
        </div>

        <div class="widget-body">
          <div class="widget-content">
            <h3 class="widget-instructions">
              在下面设置日期范围
            </h3>
            <hr>
            <form class="form">
              <!-- add components here -->
              <Calendar></Calendar>
            </form>
            <!-- add button here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from '../small/Calendar'
import Button1 from '../small/Button1'
export default {
  name: 'SetDatePage',
  components: { Calendar, Button1 }
}
</script>

<style scoped>
@import "../../css/page.css";
</style>
