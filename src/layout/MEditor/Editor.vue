<script setup lang="ts">
import { EditorView, basicSetup } from 'codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { onMounted, ref, inject, type Ref } from 'vue';
import $bus from '../../state/mitt';

const editor = ref(null);

const content = inject<Ref>('content');

let view = <EditorView | null>null;

onMounted(() => {
  if (editor.value) {
    view = new EditorView({
      parent: editor.value,
      doc: content!.value,
      extensions: [
        basicSetup,
        markdown({ codeLanguages: languages }), // 监听编辑器内容变化
        createTextChangeListener()
      ]
    });
    // 设置编辑器的样式
    view.dom.style.height = `100%`;
    // view.dom.style.width = `100%`;
    // view.dom.style.overflow = 'hidden';
  }

  // 监听插入文本事件
  $bus.on('insertSyntax', ([text, cursor_offset]) => {
    insertTextAtCursor(text, cursor_offset);
    // 使编辑器获得焦点
    if (view) {
      view.focus();
    }
  });
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

// 插入文本的方法
function insertTextAtCursor(text: string, cursor_offset: number) {
  if (view) {
    const cursor = view.state.selection.main.head;
    // 更新光标位置
    const newCursorPosition = cursor + cursor_offset;

    const newSelection = { anchor: newCursorPosition, head: newCursorPosition };

    // 设置光标位置：插入文本之后
    const selectionTr = view.state.update({
      changes: { from: cursor, to: cursor, insert: text },
      selection: newSelection
    });

    // 执行选择更新
    view.dispatch(selectionTr);
  }
}
</script>

<template>
  <div ref="editor" id="editor"></div>
</template>

<style scoped></style>
