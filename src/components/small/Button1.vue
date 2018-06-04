<template>
  <div class="button-div">
    <button class="submit-button" @click="submitSearch">{{ msg }}</button>
  </div>
</template>

<script>
export default {
  name: 'Button1',
  props: {
    msg: { type: String, default: '' }
  },
  methods: {
    submitSearch () {
      this.$emit('submitSearch')
    }
  }
}
</script>

<style scoped>
.submit-button {
  font-weight: normal;
  font-family:"Microsoft YaHei", "Microsoft JhengHei Light", Helvetica, sans-serif;
  cursor: pointer;
  background: #74ad5a;
  background-image: -webkit-linear-gradient(top, #74ad5a, #68a54b);
  background-image: -moz-linear-gradient(top, #74ad5a, #68a54b);
  background-image: -ms-linear-gradient(top, #74ad5a, #68a54b);
  background-image: -o-linear-gradient(top, #74ad5a, #68a54b);
  background-image: linear-gradient(to bottom, #74ad5a, #68a54b);
  -webkit-box-shadow: inset 0 1px 0 0 #9acc85;
  -moz-box-shadow: inset 0 1px 0 0 #9acc85;
  box-shadow: inset 0 1px 0 0 #9acc85;
  color: #ffffff;
  font-size: 16px;
  padding: 12px 30px 12px 30px;
  border: solid #FFF 1px;
  text-decoration: none;
  margin-bottom: 15px;
}
.submit-button:hover {
  color: #ffffff;
  background: #68a54b;
  text-decoration: none;
}
</style>
