// src/store/index.ts
// 导入模块
// 使用vuex的createStore创建store实例
// 导出useStore方法，返回值Store，其他地方需要用到store的一定要使用useStore()
import { createStore, createLogger } from 'vuex'
import { store as app, AppStore, AppState } from '@/store/modules/app'

export interface RootState {
    app: AppState
}

export type Store = AppStore<Pick<RootState, 'app'>>

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []
export const store = createStore({
  plugins,
  modules: {
    app
  }
})

export function useStore (): Store {
  return store as Store
}
