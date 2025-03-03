<template>
  <div class="toolbar">
    <button @click="insertMarkdown('## ')">
      <Heading :size="14" />
    </button>
    <button @click="toggleBold"><Bold :size="14" /></button>
    <button @click="toggleItalic">
      <Italic :size="14" />
    </button>
    <button @click="insertMarkdown('- ')">
      <List :size="14" />
    </button>
    <button @click="insertLink">
      <Link :size="14" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { List, Link, Heading, Bold, Italic } from 'lucide-vue-next';

// 参考: https://lucide.dev/icons/
const editorContent = ref('');

const insertMarkdown = (syntax: string) => {
  editorContent.value += syntax;
  // 在实际场景中，这里应该是光标位置插入相应的Markdown语法
};

const toggleBold = () => {
  const boldText = '**bold text**';
  editorContent.value += boldText;
};

const toggleItalic = () => {
  const italicText = '*italic text*';
  editorContent.value += italicText;
};

const insertLink = () => {
  const linkSyntax = '[Link](https://example.com)';
  editorContent.value += linkSyntax;
};
</script>

<style scoped>
.toolbar {
  display: flex;
  gap: 5px;
  padding: 5px;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 20px;
}

button:hover {
  background-color: #f0f0f0;
}
</style>
