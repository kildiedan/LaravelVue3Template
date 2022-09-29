<template>
  <div>
    <h4>Register</h4>
    <div>
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        v-slot="{ errors, isSubmitting }"
      >
        <div>
          <label>First Name</label>
          <Field
            name="firstName"
            type="text"
            :class="{ 'is-invalid': errors.firstName }"
          />
          <div>{{ errors.firstName }}</div>
        </div>
        <div>
          <label>Last Name</label>
          <Field
            name="lastName"
            type="text"
            :class="{ 'is-invalid': errors.lastName }"
          />
          <div>{{ errors.lastName }}</div>
        </div>
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
          <button :disabled="isSubmitting">
            <span v-show="isSubmitting"></span>
            Register
          </button>
          <router-link to="login">Cancel</router-link>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import { useUserStore } from "../../store/user.js";
import { useAlertStore } from "../../store/alert.js";
import { router } from "../../router/index.js";

const schema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

async function onSubmit(values) {
  const usersStore = useUserStore();
  const alertStore = useAlertStore();
  try {
    await usersStore.register(values);
    await router.push("/account/login");
    alertStore.success("Registration successful");
  } catch (error) {
    alertStore.error(error);
  }
}
</script>
