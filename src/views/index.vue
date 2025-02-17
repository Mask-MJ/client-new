<script setup lang="ts">
import { DEFAULT_HOME_PATH } from '@/config/constants';
import { router } from '@/router';

router.push({ path: DEFAULT_HOME_PATH });
</script>

<template>
  <div></div>
</template>

<style lang="" scoped></style>

<route lang="json">
{
  "name": "root",
  "meta": {
    "requiresAuth": false
  }
}
</route>
