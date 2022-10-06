<script setup>
import { useAuthStore } from "./store/auth.js";

const authStore = useAuthStore();
const { adminCheck } = authStore;
</script>
<template>
    <h1>Laravel 9 & Vue3</h1>

    <ul>
        <li><router-link to="/tickets">Home</router-link></li>
        <li><router-link to="/user">UserHome</router-link></li>
        <li v-if="adminCheck()">
            <router-link to="/category">categories</router-link>
        </li>
        <a @click="authStore.logout()">Logout</a>
    </ul>
    <router-view></router-view>
</template>
