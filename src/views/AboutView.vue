<script setup>
import { useFlash } from '@/composables/useFlash.js'

let { flash } = useFlash()
</script>

<template>
  <p>
    <button @click="flash('It works on the about page!')">Click me</button>
  </p>
</template>
