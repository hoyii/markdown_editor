<template>
  <div ref="editor" id="editor" style="flex: 1"></div>
</template>

<script setup lang="ts">
import { EditorView, basicSetup } from 'codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { onMounted, ref } from 'vue';
import $bus from '../../state/mitt';

const editor = ref(null);

onMounted(() => {
  if (editor.value) {
    const view = new EditorView({
      parent: editor.value,
      doc: "# Hello\n\n```javascript\nlet x = 'y'\n```",
      extensions: [
        basicSetup,
        markdown({ codeLanguages: languages }), // 监听编辑器内容变化
        createTextChangeListener()
      ]
    });
    // 设置编辑器的样式
    view.dom.style.height = `${window.innerHeight}px`;
  }
});

// 用来监听文档内容变化的扩展
function createTextChangeListener() {
  return EditorView.updateListener.of((update) => {
    if (update.docChanged) {
      console.log('文本变化:', update.state.doc.toString());
      $bus.emit('editor-content-change', update.state.doc.toString());
    }
  });
}
</script>

<style scoped></style>
