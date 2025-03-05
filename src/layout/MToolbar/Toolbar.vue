<template>
  <div class="toolbar">
    <button @click="insertSyntax('# ')">
      <Heading :size="14" />
    </button>
    <button @click="insertSyntax('****', 2)"><Bold :size="14" /></button>
    <button @click="insertSyntax('**', 1)">
      <Italic :size="14" />
    </button>
    <button @click="insertSyntax('~~~~', 2)">
      <Strikethrough :size="14" />
    </button>
    <button @click="insertSyntax('- ')">
      <List :size="14" />
    </button>
    <button @click="insertSyntax('1. ')">
      <ListOrdered :size="14" />
    </button>
    <button @click="insertSyntax('[]()', 1)">
      <Link :size="14" />
    </button>
    <button @click="insertSyntax('![]()', 2)">
      <Image :size="14" />
    </button>
    <button @click="insertSyntax('***')">
      <PencilLine :size="14" />
    </button>
    <button @click="insertSyntax('> ')">
      <Quote :size="14" />
    </button>
    <button @click="informPrint()">
      <Printer :size="14" />
    </button>
  </div>
</template>

<script setup lang="ts">
import {
  Heading,
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Link,
  Image,
  PencilLine,
  Quote,
  Printer
} from 'lucide-vue-next';
import $bus from '../../state/mitt';

/**
 * Inserts a given syntax at the current cursor position in the editor.
 *
 * @param {string} syntax - The syntax string to be inserted.
 * @param {number} [cursor_offset=syntax.length] - The offset position of the cursor after insertion. Defaults to the length of the syntax string.
 */
const insertSyntax = (syntax: string, cursor_offset: number = syntax.length) => {
  $bus.emit('insertSyntax', [syntax, cursor_offset]);
};

const informPrint = () => {
  $bus.emit('printPdf');
};
</script>

<style scoped>
.toolbar {
  display: flex;
  flex-shrink: 0;
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
