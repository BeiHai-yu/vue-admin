// 项目启动入口
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 记载全局样式文件
import './styles/index.less'
// 创建vue根实例
// 把router配置到根实例中
// 通过render方法把app跟组件渲染到
createApp(App).use(router).mount('#app')
