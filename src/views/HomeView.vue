<script setup>
import TabbableTextArea from '@/components/TabbableTextArea.vue'
import { ref } from 'vue'

let comment = ref('test value');
</script>

<template>
  <main>
    <TabbableTextArea v-model="comment" style="width: 100%; height: 300px" />
  </main>
</template>
