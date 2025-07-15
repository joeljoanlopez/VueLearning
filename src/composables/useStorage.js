import { ref, watch } from 'vue'

export function useStorage(key, val = null) {
  let storedval = read()

  if (storedval) {
    val = ref(storedval)
  } else {
    val = ref(val)

    write()
  }

  watch(val, write, { deep: true })

  function read() {
    return JSON.parse(localStorage.getItem(key))
  }

  function write() {
    if (val.value === null || val.value === undefined) {
      localStorage.removeItem(key)
      return
    }
    localStorage.setItem(key, JSON.stringify(val.value))
  }

  return val
}
