<script setup lang="ts">

</script>


<template>
    <div class ="bg-black h-screen w-screen p-4 flex justify-center items-center">
        <div class="w-[25vw] h-[40vh]">
            <logo />
            <h1 class="text-white font-bold text-xl mt-16"> Experience the Nuxt Store</h1>
            <p class="text-zinc-300 text-m mt-1">Not registered? <span class="font-bold underline text-green-400">Sign up</span> for a free account</p>
            <div class="mt-8">
                <label  class="text-zinc-300 text-m block mb-1" for="">Email Address</label>
                <input placeholder="you@example.com" 
                        class="text-zinc-300 block w-full bg-zinc-800 px-4 py-2 rounded placeholder:text-zinc-500"
                        type="e-mail">
            </div>
            <div class="mt-8">
                <label  class="text-zinc-300 text-m block mb-1" for="">Password</label>
                <input placeholder="**************" 
                        class="text-zinc-300 block w-full bg-zinc-800 px-4 py-2 rounded placeholder:text-zinc-500"
                        type="password">
            </div>
            <div class="mt-8">
                <button class="text-black block w-full bg-green-400 p-2 rounded-full">Login -> </button>
            </div>
        </div>
        <slot />
    </div>
</template>


