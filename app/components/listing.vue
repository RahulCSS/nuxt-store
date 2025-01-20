<script setup lang="ts">
    import { ref, computed, onMounted } from 'vue';
    import axios from 'axios';

    // Define the structure of the product
    interface Product {
        id: number;
        title: string;
        price: string;
        category: string;
        description: string;
        image: string;
    }

    const products = ref<Product[]>([]);
    const currentPage = ref(1);
    const itemsPerPage = 10;

    // Fetch products from the API
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products?limit=5');
            products.value = response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Pagination logic: Slice products based on current page
    const paginatedProducts = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return products.value.slice(startIndex, endIndex);
    });

    // Total number of pages
    const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage));

    // Handle page change
    const goToPage = (page: number) => {
    if (page > 0 && page <= totalPages.value) {
        currentPage.value = page;
    }
    };

    // Call fetchProducts when the component is mounted
    onMounted(() => {
    fetchProducts();
    });

</script>


<template>
    <div class=" mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Products</h1>

    <!-- Cards for Products -->
    <div class= "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="product in paginatedProducts"
        :key="product.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
      >
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h3 class="font-semibold text-xl truncate">{{ product.title }}</h3>
          <p class="text-gray-500 text-sm truncate">{{ product.category }}</p>
          <p class="text-gray-700 mt-2 text-base">{{ product.description }}</p>
          <div class="mt-4">
            <span class="text-lg font-semibold text-green-600">${{ product.price }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="flex justify-center mt-8">
      <button
        @click="goToPage(currentPage.value - 1)"
        :disabled="currentPage.value === 1"
        class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50"
      >
        {{currentPage - 1}}
      </button>

      <span class="mx-4  text-white text-lg font-semibold">
        Page {{ currentPage }} of {{ totalPages }}
      </span>
      <button
        @click="goToPage(currentPage.value + 1)"
        :disabled="currentPage.value === totalPages.value"
        class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50"
      >
      {{currentPage + 1}}
      </button>
    </div>
  </div>
</template>

<style scoped>
    .card {
    transition: transform 0.3s ease-in-out;
    }

    .card:hover {
    transform: scale(1.05);
    }
</style>