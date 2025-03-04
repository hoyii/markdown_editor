<template>
  <div class="layout">
    <div class="md-toolbar-wrapper"><Toolbar /></div>
    <div class="md-editor-preview" style="display: flex">
      <div
        class="md-editor-preview-wrapper"
        style="display: flex; flex: 1; position: relative; width: 0"
      >
        <Editor class="md-editor" /> <Preview class="md-preview" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Editor from './MEditor/Editor.vue';
import Preview from './MPreview/Preview.vue';
import Toolbar from './MToolbar/Toolbar.vue';
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow: hidden;
}

.md-toolbar-wrapper {
  flex-shrink: 0;
  overflow-y: hidden;
}

.md-editor-preview {
  display: flex;
  flex: 1;
  flex-shrink: 0;
  height: 0;
  position: relative;
}

.md-editor {
  width: 50%;
}
.md-preview {
  box-sizing: border-box;
  flex: 1;
  overflow: auto;
  position: relative;
}
</style>
