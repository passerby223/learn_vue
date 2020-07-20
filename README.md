# 学习vue的一些demo
## 创建Vue组件化项目所需环境配置
* 安装`Node.js`
    * 使用`wget`下载安装包
        ```bash
        wget https://nodejs.org/dist/latest-v12.x/node-v12.18.2-linux-x64.tar.gz
        ```
    * 查看`Node.js`是否安装成功
        ```bash
        node -v
        ```
    * 查看`npm`是否安装成功
        ```bash
        npm -v
        ```
* 安装`cnpm`淘宝镜像源
    ```bash
    sudo npm install -g cnpm --registry=https://registry.npm.taobao.org
    ```
* 安装`vue-cli`脚手架
    ```bash
    # 建议使用cnpm，速度快
    cnpm install -g @vue/cli
    # 使用npm
    npm install -g @vue/cli
    ```
* 创建`Vue`项目步骤
    * 创建项目
        ```bash
        vue create 项目名
        ```
    * 使用`WebStorm`打开刚创建完成的项目并进行以下配置
        * 点击`Add Configuration`
        * 选择`Add New Configuration`
        * 在弹出的对话框中按照如下配置进行设置
            ![web_npm](pictures/web_npm.png)
## UI组件库Element环境配置
* 安装
    ```bash
    cnpm i element-ui -S
    ```
* `Element`完整引入
    * 在 main.js 中写入以下内容
        ```bash
        import Vue from 'vue';
        import ElementUI from 'element-ui';
        import 'element-ui/lib/theme-chalk/index.css';
        import App from './App.vue';
        
        Vue.use(ElementUI);
        
        new Vue({
          el: '#app',
          render: h => h(App)
        });
        ```
## 安装Vue.js官方的路由管理器Vue Router
```bash
cnpm install vue-router
```
## 安装http请求库axios
```bash
cnpm install axios -s
```