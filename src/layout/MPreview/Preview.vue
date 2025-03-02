<template>
  <div ref="html" style="flex: 1"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const html = ref<HTMLElement | null>(null);

onMounted(() => {
  if (html.value) {
    html.value.innerHTML = `
      <h1>Vue 3</h1>
      <p>Vue 3 is the latest version of Vue.js</p>
    `;
  }
});
</script>

<style scoped></style>
