<template>
  <div class="page-content">
    <div class="page-content-area">
      <div class="widget-box">
        <div class="widget-header">
          <h4 class="widget-title">
            课程详细信息
          </h4>
        </div>

        <div class="widget-body">
          <div class="widget-content">

            <form class="form">
              <ReadonlyText :msg="msg[1]" :input_value="courseID"></ReadonlyText>
              <ReadonlyText :msg="msg[2]" :input_value="department"></ReadonlyText>
              <ReadonlyText :msg="msg[3]" :input_value="credits"></ReadonlyText>
              <ReadonlyText :msg="msg[4]" :input_value="prerequisite"></ReadonlyText>
              <ReadonlyText :msg="msg[5]" :input_value="hours"></ReadonlyText>
              <div class="form-group">
                <label class="label-text" for="label-text6">课程简介</label>
                <div>
                <textarea class="text-area" id="label-text6" maxlength="50" readonly v-model="introduction">
                </textarea>
                </div>
              </div>
              <div class="form-group">
                <label class="label-text" for="label-text7">教学计划</label>
                <div>
                <textarea class="text-area" id="label-text7" maxlength="50" readonly v-model="plan">
                </textarea>
                </div>
              </div>
              <hr>
            </form>
            <Button1 :msg="msg[0]" @submitSearch="close"></Button1>
          </div>
        </div>
      </div><!-- widget-box -->
    </div><!-- page-content-area -->
  </div>
</template>

<script>
import Button1 from '../small/Button1'
import ReadonlyText from '../small/ReadonlyText'
export default {
  name: 'CourseInfoPage',
  components: { Button1, ReadonlyText },
  methods: {
    close () {
      window.opener = null
      window.close()
    }
  },
  data () {
    return {
      msg: ['关闭', '课程代码', '学院', '学分', '预修要求', '学时'],
      courseID: 21191820,
      department: '计算机科学与技术学院',
      credits: 3.5,
      prerequisite: 'xxxxxxxxxxxxxxxxx',
      hours: '3.0-1.0', // 学时
      introduction: '本课程的主要任务是研究并实践体验软件开发过程的工程现象及产品管理、创新管理、项目管理、' +
      '过程管理、服务管理等相关管理活动的基本知识和技术。\n' +
      '课程内容包括软件项目的市场定位、商业创意及立项管理，软件项目开发管理，软件交付、运行及维护的持续性服务管理，' +
      '复杂产品系统创新管理，软件开发过程及管理等。\n' +
      '课程将首先指导学生贴合届时应用热点，获得满足市场定位和商业创意要求的选题，作为贯穿课程的小组实践案例，' +
      '结合学习过程中理论讲解、案例分析、课堂提问和讨论、资料检索、课外阅读和专题写作等活动，建立起全面有效的' +
      '问题解决方案，逐步完成选题，并最终完成课程学习。\n' +
      '通过本课程的学习，应使学生认识和知晓工程、理解管理，初步能够运用软件工程管理的基本思想和方法，思考、执行' +
      '并最终管理软件项目的开发过程，从而为能够最终被培养并成长为高素质、复合型软件工程人才打下坚实基础。',
      plan: '本课程是软件工程及其管理思想和方法的主要理论基础，同时也是实践该类思想和方法的主要环节。其有关工程' +
      '及管理的思想和方法，必将影响学生一生。\n' +
      '课程的主要任务是学习并实践体验软件开发过程的工程现象及产品管理、创新管理、项目管理、过程管理、服务管理等' +
      '相关管理思想、方法、技术和活动，使学生认识和知晓工程、理解管理，能够初步运用软件工程管理的基本思想和方法，' +
      '思考、执行并最终管理软件工程活动，对塑造学生成为高级复合型工程技术专业人才意义重大。\n' +
      '课程作为专业核心理论学习和工程实践体验的主要环节，将提前适度导入有关领域知识，宣导并鼓励学生实践“指尖上' +
      '的知识”的现代知识获取理念，鼓励学习理念创新、学习方法创新、学习过程创新、学习体验创新，鼓励学习成果的' +
      '个性张扬，避免学习目标和结果的同质化。\n' +
      '课程并不会也无法提供所谓的“标准答案”，但会帮助学生掌握获得“正确”答案的理念和方法，并会和学生讨论自主' +
      '获得的成果或结论的现实意义。\n' +
      '课程将努力帮助学生克服拘谨、胆小、不擅/愿表达观点等传统教育下形成的积弊，鼓励学生大胆探索、创新、表达和质疑。\n' +
      '课程所有的学习环节、过程、成果，都将实现定量化测量，以让全体学生能够随时感知学习过程获取正确或可用成果' +
      '的必要和艰辛，以及取得成功的乐趣。\n' +
      '课程同时还要兼顾到平行的其它的专业核心理论课程和开发技术课程。'
    }
  }
}
</script>

<style scoped>
@import "../../css/page.css";
.label-text {
  font-weight: normal;
  font-family:"Microsoft YaHei", "Microsoft JhengHei Light", Helvetica, sans-serif;
}
.text-area {
  border: 2px solid #d5d5d5;
  /* overflow-y:auto; */
  font-family:"Microsoft YaHei", "Microsoft JhengHei Light", Helvetica, sans-serif;
  color: #555555;
  padding: 15px;
  width: 450px;
  height: 100px;
}
.text-area:hover {
  border: 2px solid #aaaaaa;
}
</style>
