import { computed, ref } from 'vue';

import { createSharedComposable } from '@vueuse/core';

export type Locale = 'en-US' | 'zh-CN';

export const messages: Record<Locale, Record<string, string>> = {
  'en-US': {
    cancel: 'Cancel',
    collapse: 'Collapse',
    confirm: 'Confirm',
    expand: 'Expand',
    reset: 'Reset',
    submit: 'Submit',
  },
  'zh-CN': {
    cancel: '取消',
    collapse: '收起',
    confirm: '确认',
    expand: '展开',
    reset: '重置',
    submit: '提交',
  },
};

export const getMessages = (locale: Locale) => messages[locale];

export const useSimpleLocale = createSharedComposable(() => {
  const currentLocale = ref<Locale>('zh-CN');

  const setSimpleLocale = (locale: Locale) => {
    currentLocale.value = locale;
  };

  const $t = computed(() => {
    const localeMessages = getMessages(currentLocale.value);
    return (key: string) => {
      return localeMessages[key] || key;
    };
  });
  return {
    $t,
    currentLocale,
    setSimpleLocale,
  };
});
