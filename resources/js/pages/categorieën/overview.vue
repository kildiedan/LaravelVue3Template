<template>
    <h3>categorieen</h3>
    <table>
        <tr>
            <th>id</th>
            <th>naam</th>
            <th>edit</th>
            <th>delete</th>
        </tr>
        <tr v-for="(category, index) in categories" :key="category.id">
            <td>{{ category.id }}</td>
            <td>{{ category.title }}</td>
            <td>
                <button
                    @click="
                        $router.push({
                            name: 'categoryEdit',
                            params: { id: category.id },
                        })
                    "
                >
                    edit
                </button>
            </td>
            <td>
                <button @click="deleteCategory(index, category.id)">
                    delete
                </button>
            </td>
        </tr>
    </table>
    <p><router-link to="/category/create">categories create</router-link></p>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCategoryStore } from "../../store/category.js";
import { storeToRefs } from "pinia";

const categoryStore = useCategoryStore();
const { deleteCategory } = categoryStore;

const categories = categoryStore.getAll;

categoryStore.setAll();
</script>
