import { reactive, ref, watch } from 'vue'

export function useField(field) {
  const errors = reactive({})
  const touched = ref(false)
  const valid = ref(true)
  const value = ref(field.value)

  const reassign = (val) => {
    valid.value = true
    Object.keys(field.validators ?? {}).map((name) => {
      const isValid = field.validators[name](val)
      errors[name] = !isValid

      if (!isValid) {
        valid.value = false
      }
    })
  }

  watch(value, reassign)
  reassign(field.value)

  return {
    blur: () => (touched.value = true),
    errors,
    touched,
    valid,
    value
  }
}
