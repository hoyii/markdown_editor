<template>
  <div ref="editor" id="editor" style="flex: 1"></div>
</template>

<script setup lang="ts">
import { EditorView, basicSetup } from 'codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { onMounted, ref, inject, type Ref } from 'vue';

const editor = ref(null);

const content = inject<Ref>('content');

onMounted(() => {
  if (editor.value) {
    const view = new EditorView({
      parent: editor.value,
      doc: content!.value,
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
      const newContent = update.state.doc.toString();
      console.log('文本变化:', newContent);
      content!.value = newContent;
    }
  });
}
</script>

<style scoped></style>
