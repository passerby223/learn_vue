<template>
  <div id="app">
    {{ message }}
    <p :id="message">哈哈哈</p>
    <div :id="message">辣辣辣</div>
    <hr>
    <todo-list>
      <todo-item @delete="handleDelete" v-for="item in list" :key="item.title" :title="item.title" :del="item.del">
        <template v-slot:pre-icon="{value}">
          <span>前置图标 {{ value }}</span>
        </template>
        <!--            <template v-slot:suf-icon>-->
        <!--                <span>后置图标</span>-->
        <!--            </template>-->
      </todo-item>
    </todo-list>
  </div>
</template>

<script>
// 这两个组件是出于局部作用域的，只在当前App.vue中生效；如果想注册为全局作用域，则需要去main.js中注册为全局组件
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoItem
  },
  data() {
    return {
      message: "hello world",
      list: [
        {
          title: "课程1",
          del: true
        },
        {
          title: "课程2",
          del: false
        },
        {
          title: "课程3",
          del: true
        },
      ],
    }
  },
  methods: {
    handleDelete(val) {
      console.log("handleDelete", val)
    }
  }
}
</script>

<style>

</style>
