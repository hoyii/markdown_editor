<template>
  <div ref="previewer" id="previewer" class="markdown-body" style="flex: 1"></div>
</template>

<script setup lang="ts">
import { inject, onMounted, ref, watch, type Ref } from 'vue';
import Markdown2Html from '@hoyii/markdown2html';
import $bus from '../../state/mitt';
import html2pdf from 'html2pdf.js';

const previewer = ref<HTMLElement | null>(null);

const content = inject<Ref>('content');

const markdown2html = new Markdown2Html();

watch(content!, (newContent) => {
  previewer.value!.innerHTML = markdown2html.render(newContent);
});

onMounted(() => {
  if (previewer.value) {
    previewer.value.innerHTML = markdown2html.render(content!.value);
  }
});

$bus.on('printPdf', exportPdf);

function exportPdf() {
  // 定义导出 PDF 的方法
  const exportToPDF = () => {
    const element = document.getElementById('previewer');

    if (element) {
      // 使用 html2pdf.js 导出 PDF
      html2pdf()
        .from(element) // 从指定的 DOM 元素导出
        .save('markdown-preview.pdf'); // 设置导出的文件名
    } else {
      console.error('Preview area not found.');
    }
  };
  exportToPDF();
}
</script>

<style>
@import './themes/github-markdown-light.css';
.markdown-body {
  padding: 16px;
}
</style>

<style scoped></style>
