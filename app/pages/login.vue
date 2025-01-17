<script setup lang="ts">
    const email = ref('')
    const password = ref('')
    const emailError = ref('');
    const passwordError = ref('');
    const loginError = ref('');
    const loginSuccess = ref(false);
    const router = useRouter();

    function validateForm() {
        let valid = true
        emailError.value = ''
        passwordError.value = ''
        loginError.value = ''

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!email.value) {
            emailError.value = 'Email is required.'
            valid = false
        } else if (!emailRegex.test(email.value)) {
            emailError.value = 'Please enter a valid email address.'
            valid = false
        }

        if (!password.value) {
            passwordError.value = 'Password is required.'
            valid = false
        }
    return valid
    }   
    
    async function submit() {
        if (validateForm()) {
            const mockUser = { email: 'test@example.com', password: 'password123' };
            
            if (email.value === mockUser.email && password.value === mockUser.password) {
                localStorage.setItem('authToken', 'mock-token-123');
                loginSuccess.value = true;
                setTimeout(() => {
                    router.push('/listing');
                }, 2000);
            } else {
            loginError.value = 'Invalid credentials. Please try again.';
            }
            console.log(mockUser);
        }
    }
</script>


<template>
    <div class ="bg-black h-screen w-screen p-4 flex justify-center items-center">
        <div class="w-[30vw] h-[40vh]">
            <logo />
            <h1 class="text-white font-bold text-xl mt-16"> Experience the Nuxt Store</h1>
            <p class="text-zinc-300 text-m mt-1">Not registered? 
                <NuxtLink to ="/register">
                    <span class="font-bold underline text-green-400">Sign up</span> for a free account
                </NuxtLink>
            </p>
            <form @submit.prevent = "submit">
                <div class="mt-8">
                    <label  class="text-zinc-300 text-m block mb-1" for="">Email Address</label>
                    <input 
                    v-model="email"
                    placeholder="you@example.com" 
                    class="text-zinc-300 block w-full bg-zinc-800 px-4 py-2 rounded placeholder:text-zinc-500"
                    type="e-mail">
                </div>
                <div class="mt-8">
                    <label  class="text-zinc-300 text-m block mb-1" for="">Password</label>
                    <input 
                    v-model="password"
                    placeholder="**************" 
                    class="text-zinc-300 block w-full bg-zinc-800 px-4 py-2 rounded placeholder:text-zinc-500"
                    type="password">
                </div>
                <div class="mt-8">
                    <button class="text-black block w-full bg-green-400 p-2 rounded-full">Login -> </button>
                </div>
            </form>
            <div v-if="loginSuccess" class="mt-8 p-4 bg-zinc-800 text-green-400 border-1 rounded-full">
                <p>Login successful! Redirecting...</p>
            </div>
            <p v-if="loginError" class="error">{{ loginError }}</p>
        </div>
        <slot />
    </div>
</template>


