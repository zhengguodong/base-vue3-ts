// src/plugins/index.ts
import { createApp } from 'vue'

/**
 * @description 加载所有 Plugins，导出loadAllPlugins
 * @param  {ReturnType<typeofcreateApp>} app 整个应用的实例
 */
export function loadAllPlugins (app: ReturnType<typeof createApp>) {
  // 获取当前目录下所哟.ts文件
  const files = require.context('.', true, /\.ts$/)
  // 遍历，过滤并加载插件
  files.keys().forEach(key => {
    if (typeof files(key).default === 'function') {
      if (key !== './index.ts') files(key).default(app)
    }
  })
}
