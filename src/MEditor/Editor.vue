<template>
  <div ref="editor" id="editor" style="flex: 1"></div>
</template>

<script setup lang="ts">
import { EditorView, basicSetup } from 'codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { onMounted, ref } from 'vue';

const editor = ref(null);

onMounted(() => {
  if (editor.value) {
    const view = new EditorView({
      parent: editor.value,
      doc: "# Hello\n\n```javascript\nlet x = 'y'\n```",
      extensions: [basicSetup, markdown({ codeLanguages: languages })]
    });
    // 设置编辑器的样式
    view.dom.style.height = `${window.innerHeight}px`;
    view.scrollDOM.style.overflow = 'auto';
  }
});
</script>

<style scoped></style>
