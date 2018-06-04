<template>
  <div class="form-group" @change="notifyParent">
    <div>
      <label class="and-or-label">
        <input name="gender" value="1" type="radio" class="and-or-radio" v-model="picked">
        <span class="and-or-text">与</span>
      </label>
    </div>
    <div>
      <label class="and-or-label">
        <input name="gender" value="2" type="radio" class="and-or-radio" v-model="picked">
        <span class="and-or-text">或</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AndOr',
  props: {
    picked: null
  },
  methods: {
    notifyParent () {
      this.$emit('notifyParent', this.picked)
    }
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 15px;
}
span.and-or-text {
  font-weight: normal;
  font-family:"Microsoft YaHei", "Microsoft JhengHei Light", Helvetica, sans-serif;
}
.and-or-label {
  color: #478fca!important;
}
.and-or-radio, .and-or-text {
  cursor: pointer;
}
input[type="radio"] + span::before {
  content: "\a0"; /* 不换行空格 */
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  width: 1em;
  height: 1em;
  margin-right: .4em;
  border-radius: 50%;
  border: 1px solid #d5d5d5;
  text-indent: .15em;
  line-height: 1;
}
input[type="radio"]:checked + span::before {
  background-color: #32a3ce;
  background-clip: content-box;
  padding: .2em;
}
input[type="radio"] {  /* hide previous radio */
  position: absolute;
  clip: rect(0, 0, 0, 0);
}
</style>
