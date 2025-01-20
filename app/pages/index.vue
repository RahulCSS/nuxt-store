<script setup lang="ts">

    // Static Meta Data
    definePageMeta({
        title: "Nuxt - HomePage",
        description: "Experience Nuxt",
    });


</script>

<template>
    <div class="flex">
        <listingFilter class="w-[20vw] h-full"/>
        <listing class="w-[80vw] h-full"/>
    </div>
</template>
