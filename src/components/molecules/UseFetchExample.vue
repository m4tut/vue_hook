<template>
  <div class="card px-2 py-3">
    <h2 class="mb-3">useFetch</h2>
    <ul class="list-group">
      <li v-for="comment in comments" :key="comment.id" class="list-group-item">
        <div><b>Email: </b> {{ comment.email }}</div>
        <p>{{ comment.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { useFetch } from '@/hooks/useFetch'

export default {
  name: 'UseFetchExample',

  async setup() {
    const { response: comments } = await useFetch(
      'https://jsonplaceholder.typicode.com/comments'
    )

    return { comments }
  }
}
</script>

<style lang="scss" scoped>
.list-group {
  max-height: 340px;
  overflow-y: auto;
}
</style>
