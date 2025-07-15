<script setup>

defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

let emit = defineEmits(['update:modelValue'])
function onTabDown(event) {
  let textarea = event.target

  let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd

  textarea.value = val.substring(0, start) + '\t' + val.substring(end)

  textarea.selectionStart = textarea.selectionEnd = start + 1
}

function update(e) {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <textarea
    @keydown.tab.prevent="onTabDown"
    @keyup="update"
  v-text="modelValue"
  />
</template>
