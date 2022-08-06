<template>
  <div class="container">
    <h1 class="text-center text-light">Vue 3 custom hooks</h1>
    <UseFormExample />
    <Suspense>
      <UseFetchExample />
      <template #fallback>
        <div class="card p-5 h1">
          <span v-if="error" class="text-danger">{{ error }}</span>
          <span v-else>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import UseFormExample from '@/components/molecules/UseFormExample.vue'
import UseFetchExample from '@/components/molecules/UseFetchExample.vue'
import { ref } from '@vue/reactivity'
import { onErrorCaptured } from '@vue/runtime-core'

export default {
  name: 'PageMain',

  components: {
    UseFormExample,
    UseFetchExample
  },

  setup() {
    const error = ref('')

    onErrorCaptured((e) => {
      error.value = e.message
    })

    return { error }
  }
}
</script>
