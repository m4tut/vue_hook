<template>
  <form class="card px-2 py-3" @submit.prevent="submit">
    <h2>useForm</h2>

    <pre>{{ form }}</pre>

    <div class="form-group">
      <label class="pl-1" for="email">Email</label>
      <input
        id="email"
        v-model="form.email.value"
        class="form-control"
        :class="{ 'is-invalid': !form.email.valid && form.email.touched }"
        type="email"
        @blur="form.email.blur"
      />
      <small v-if="form.email.errors.required" class="invalid-feedback">
        Please enter email.
      </small>
    </div>
    <div class="form-group">
      <label class="pl-1" for="password">Password</label>
      <input
        id="password"
        v-model="form.password.value"
        class="form-control"
        :class="{ 'is-invalid': !form.password.valid && form.password.touched }"
        type="password"
        @blur="form.password.blur"
      />
      <small v-if="form.password.errors.required" class="invalid-feedback">
        Please enter password.
      </small>
      <small
        v-else-if="form.password.errors.minLength"
        class="invalid-feedback"
      >
        Password lenght can't be less then 8. Now it is
        {{ form.password.value.length }}
      </small>
    </div>

    <button class="btn btn-success px-5" type="submit" :disabled="!form.valid">
      Submit
    </button>
  </form>
</template>

<script>
import { useForm } from '@/hooks/useForm'

const required = (val) => !!val
const minLength = (num) => (val) => val.length > num

export default {
  name: 'UseFormExample',

  setup() {
    const form = useForm({
      email: {
        value: '',
        validators: { required }
      },
      password: {
        value: '',
        validators: { required, minLength: minLength(8) }
      }
    })

    function submit() {
      alert(`Email: ${form.email.value}\nPassword: ${form.password.value}`)
    }

    return { form, submit }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 12px;
}

.btn {
  max-width: max-content;
  border-radius: 24px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
