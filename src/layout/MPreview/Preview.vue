<template>
  <div ref="previewer" style="flex: 1"></div>
</template>

<script setup lang="ts">
import { inject, onMounted, ref, watch, type Ref } from 'vue';
import Markdown2Html from '@hoyii/markdown2html';

const previewer = ref<HTMLElement | null>(null);

const content = inject<Ref>('content');

watch(content!, (newContent) => {
  console.log('preview:', newContent);
});

onMounted(() => {
  const markdown2html = new Markdown2Html();
  if (previewer.value) {
    previewer.value.innerHTML = markdown2html.render(content!.value);
  }
});
</script>

<style scoped></style>
