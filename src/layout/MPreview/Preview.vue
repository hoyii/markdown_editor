<template>
  <div ref="html" style="flex: 1"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import $bus from '../../state/mitt';

const html = ref<HTMLElement | null>(null);

onMounted(() => {
  $bus.on('editor-content-change', (content: string) => {
    if (html.value) {
      html.value.innerHTML = content;
    }
  });
});
</script>

<style scoped></style>
