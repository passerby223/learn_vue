<template>
  <li>
    <slot name="pre-icon" :value="value"></slot>
    <span v-if="!del">{{ title }}</span>
    <span v-else style="text-decoration: line-through">{{ title }}</span>
    <slot name="suf-icon">哈哈</slot>
    <button v-show="!del" @click="handleClick">删除</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    title: String,
    del: {
      type: Boolean,
      // 这里设置默认值属于ES6语法
      default: false
    },
  },
  // 定义要复用的模板字符串
  template: `
    <li>
    <slot name="pre-icon" :value="value"></slot>
    <span class="col" v-if="!del">{{ title }}</span>
    <span v-else style="text-decoration: line-through">{{ title }}</span>
    <slot name="suf-icon">哈哈</slot>
    <button v-show="!del" @click="handleClick">删除</button>
    </li>
  `,
  data: function () {
    return {
      value: Math.random()
    }
  },
  methods: {
    handleClick() {
      console.log('点击了删除按钮')
      // 手动抛出delete事件
      this.$emit("delete", this.title)
    }
  }
}
</script>

<!--  scoped：CSS组件化  -->
<style scoped>
.col {
  color: red;
}
</style>