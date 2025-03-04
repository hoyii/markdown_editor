<template>
  <div class="toolbar">
    <button @click="insertSyntax('# ')">
      <Heading :size="14" />
    </button>
    <button @click="insertSyntax('****', 2)"><Bold :size="14" /></button>
    <button @click="insertSyntax('**', 1)">
      <Italic :size="14" />
    </button>
    <button @click="insertSyntax('- ')">
      <List :size="14" />
    </button>
    <button @click="insertSyntax('[]()', 1)">
      <Link :size="14" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { List, Link, Heading, Bold, Italic } from 'lucide-vue-next';
import $bus from '../../state/mitt';

// 插入标题、列表等语法
const insertSyntax = (syntax: string, cursor_offset: number = syntax.length) => {
  $bus.emit('insertSyntax', [syntax, cursor_offset]);
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
