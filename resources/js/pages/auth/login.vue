<template>
  <div>
    <h2>Login</h2>
    <Form
      @submit="onSubmit"
      :validation-schema="schema"
      v-slot="{ errors, isSubmitting }"
    >
      <div>
        <label>Email</label>
        <Field
          name="email"
          type="text"
          :class="{ 'is-invalid': errors.email }"
        />
        <div>{{ errors.email }}</div>
      </div>
      <div>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          :class="{ 'is-invalid': errors.password }"
        />
        <div>{{ errors.password }}</div>
      </div>
      <div>
        <button class="btn btn-primary" :disabled="isSubmitting">
          <span v-show="isSubmitting"></span>
          Login
        </button>
        <router-link to="register" class="btn btn-link">Register</router-link>
      </div>
      <div v-if="errors.apiError">
        {{ errors.apiError }}
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import { useAuthStore } from "../../store/auth.js";

const schema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function onSubmit(values, { setErrors }) {
  const authStore = useAuthStore();
  const { email, password } = values;
  authStore.login(email, password);

  return authStore
    .login(email, password)
    .catch((error) => setErrors({ apiError: error }));
}
</script>
