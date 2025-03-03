<script setup lang="ts">
import { ref, provide, watch } from 'vue';
import Layout from './layout/Layout.vue';

import markdownData from './state/data';

const content = ref(markdownData);

provide('content', content);

watch(content, (newContent) => {
  console.log('内容变化:', newContent);
});
</script>

<template>
  <!-- 给Layout 传递数据 -->
  <Layout />
</template>

<style scoped></style>
