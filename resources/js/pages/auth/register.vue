<template>
    <h4>Register</h4>
    <div>
        <label>Name</label>
        <input type="string" v-model="newUser.name" />
    </div>
    <div>
        <label>Email</label>
        <input type="string" v-model="newUser.email" />
    </div>
    <div>
        <label>Password</label>
        <input type="password" v-model="newUser.password" />
    </div>
    <div>
        <label>phonenumber</label>
        <input type="string" v-model="newUser.phonenumber" />
    </div>
    <button @click="userStore.register(newUser)">Register</button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "../../store/user.js";
import { useAlertStore } from "../../store/alert.js";
import { router } from "../../router/index.js";

const userStore = useUserStore();

const newUser = ref({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
});
</script>
