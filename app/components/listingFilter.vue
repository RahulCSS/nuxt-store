<script setup lang="ts">
    import axios from 'axios';

    const categories = ref<string[]>([]);
    const selectedCategories = ref<string[]>([]);

    // Fetch categories from the API
    const fetchCategories = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/categories');
            categories.value = response.data;
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
        console.log(categories);
    };

    // Call the fetchCategories function when the component is mounted
    onMounted(() => {
        fetchCategories();
    });

    // Update the selected categories array when a checkbox is toggled
    const updateCategorySelection = (category: string) => {
    const index = selectedCategories.value.indexOf(category);
    if (index === -1) {
        selectedCategories.value.push(category); 
    } else {
        selectedCategories.value.splice(index, 1);
    }
    };

</script>

<template>
    <div class="bg-zinc-800 p-8 rounded-md min-h-screen">
    <h1 class="text-white font-bold text-xl mb-4">Filter by Category</h1>

    <!-- Categories List with Checkboxes -->
    <div class=" space-y-3">
      <div v-for="category in categories" :key="category" class="flex items-center">
        <input
          type="checkbox"
          :id="category"
          :value="category"
          v-model="selectedCategories"
          @change="updateCategorySelection(category)"
          class="w-4 h-4 text-green-500"
        />
        <label :for="category" class="ml-2 text-white">{{ category }}</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
    input[type="checkbox"]:checked {
    background-color: #16a34a;
    }
</style>

