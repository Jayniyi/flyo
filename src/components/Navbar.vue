<script setup>
import Logo from '@/assets/img/logo.svg';
import { RouterLink } from 'vue-router';

</script>

<template>
  <header class="bg-gray-800 text-white pos-fexe">
    <div class="container mx-auto p-8 flex justify-between items-center">
      <!-- Logo Section -->
      <div>
        <img :src="Logo" alt="Logo" class="w-16 h-auto" />
      </div>

      <!-- Navigation Links -->
      <nav class="flex space-x-4 md:space-x-6">
        <RouterLink 
          to="/" 
          class="hover:underline focus:outline-none focus:ring focus:ring-gray-300 rounded"
        >
          Home
        </RouterLink>
        <RouterLink 
          to="/team" 
          class="hover:underline focus:outline-none focus:ring focus:ring-gray-300 rounded"
        >
          Team
        </RouterLink>
        <RouterLink 
          to="/signin" 
          class="hover:underline focus:outline-none focus:ring focus:ring-gray-300 rounded"
        >
          Sign In
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
