import { createApp } from 'vue';

import { preferences } from '@/config/preferences';
import { $t, setupI18n } from '@/locales';
import { initRouter, router } from '@/router';
import { initStores } from '@/stores';
import { unmountGlobalLoading } from '@/utils';

import App from './App.vue';

import '@unocss/reset/normalize.css';

async function bootstrap() {
  const app = createApp(App);

  // 国际化 i18n 配置
  await setupI18n(app);
  // 初始化全局状态管理
  initStores(app);
  // 初始化路由
  initRouter(app);
  // 动态更新标题
  watchEffect(() => {
    if (preferences.app.dynamicTitle) {
      const routeTitle = router.currentRoute.value.meta?.title;
      const pageTitle = (routeTitle ? `${$t(routeTitle)} - ` : '') + preferences.app.name;
      useTitle(pageTitle);
    }
  });
  // 移除并销毁loading
  unmountGlobalLoading();

  app.mount('#app');
}

bootstrap();
