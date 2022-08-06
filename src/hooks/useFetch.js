import { ref } from 'vue'

export async function useFetch(url, options) {
  const response = ref()

  const request = await fetch(url, options)

  if (!request.ok) {
    throw new Error(request.statusText)
  }

  response.value = await request.json()

  return { response }
}
