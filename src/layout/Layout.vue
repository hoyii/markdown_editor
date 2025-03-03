<template>
  <div>
    <Toolbar />
  </div>
  <div style="display: flex">
    <Editor />
    <Preview />
  </div>
</template>

<script setup lang="ts">
import Editor from './MEditor/Editor.vue';
import Preview from './MPreview/Preview.vue';
import Toolbar from './MToolbar/Toolbar.vue';
</script>
