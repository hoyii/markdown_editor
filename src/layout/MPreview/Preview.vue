<template>
  <div ref="previewer" style="flex: 1"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import $bus from '../../state/mitt';
import Markdown2Html from '@hoyii/markdown2html';

const previewer = ref<HTMLElement | null>(null);

onMounted(() => {
  const markdown2html = new Markdown2Html();
  $bus.on('editor-content-change', (content: string) => {
    if (previewer.value) {
      previewer.value.innerHTML = markdown2html.render(content);
    }
  });
});

onUnmounted(() => {
  $bus.off('editor-content-change');
});
</script>

<style scoped></style>
