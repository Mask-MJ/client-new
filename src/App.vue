<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui';

import { preferences, useDesignTokens } from '@/config/preferences';
import { darkTheme, dateEnUS, dateZhCN, enUS, lightTheme, zhCN } from 'naive-ui';

defineOptions({ name: 'App' });
const { commonTokens } = useDesignTokens();

const tokenLocale = computed(() => (preferences.app.locale === 'zh-CN' ? zhCN : enUS));
const tokenDateLocale = computed(() => (preferences.app.locale === 'zh-CN' ? dateZhCN : dateEnUS));
const tokenTheme = computed(() => (preferences.theme.mode === 'dark' ? darkTheme : lightTheme));

const themeOverrides = computed((): GlobalThemeOverrides => {
  return {
    common: commonTokens,
  };
});
</script>

<template>
  <n-config-provider
    :locale="tokenLocale"
    :date-locale="tokenDateLocale"
    :theme="tokenTheme"
    :theme-overrides="themeOverrides"
    class="h-full"
  >
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>
