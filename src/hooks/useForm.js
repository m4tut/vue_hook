import { computed, reactive } from 'vue'
import { useField } from './useField'

const KEY_VALID = 'valid'

const withoutValid = (k) => k !== KEY_VALID

export function useForm(init = {}) {
  const form = reactive({})

  for (const [key, value] of Object.entries(init)) {
    form[key] = useField(value)
  }

  form[KEY_VALID] = computed(() => {
    return Object.keys(form)
      .filter(withoutValid)
      .reduce((acc, k) => {
        acc = form[k].valid
        return acc
      }, true)
  })
  return form
}
