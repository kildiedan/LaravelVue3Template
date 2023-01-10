<template>
    <div>
        <h2>Login</h2>
        <div>
            <label>email</label>
            <input type="string" v-model="userLogin.email" />
        </div>
        <div>
            <label>Password</label>
            <input type="password" v-model="userLogin.password" />
        </div>
        <button @click="userStore.login(userLogin)">Register</button>
    </div>
</template>

<script setup>
import { useAuthStore } from "../../store/auth.js";

const userLogin = ref({
    email: "",
    password: "",
});
</script>
