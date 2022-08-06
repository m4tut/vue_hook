<template>
  <div class="container">
    <h1 class="text-center text-light">Vue 3 custom hooks</h1>
    <UseFormExample />
  </div>
</template>

<script>
import UseFormExample from '@/components/molecules/UseFormExample.vue'

export default {
  name: 'PageMain',

  components: { UseFormExample }
}
</script>

<style lang="scss" scoped></style>
