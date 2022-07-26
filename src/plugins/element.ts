import ElementPlus from 'element-plus'
// import '../../node_modules/element-plus/lib/theme-chalk/index.css'
import i18n from '@/locales'
export default function loadComponent (app: any) {
  // 注意，此处的i18n: i18n.global.t是必须的，如果不设置，切换语言的时候，将会对element-plus组件无效。
  app.use(ElementPlus, { size: 'small', i18n: i18n.global.t })
}
