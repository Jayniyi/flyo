<script setup>
import Logo from '@/assets/img/logo.svg'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="container p-7">
    <div class="flex justify-between">
      <div>
        <img :src="Logo" alt="" srcset="" class="w-20" />
      </div>
      <div class="flex space-x-6">
        <RouterLink to="/" class="text-white hover:underline"> Home </RouterLink>
        <RouterLink to="/" class="text-white hover:underline"> Team </RouterLink>
        <RouterLink to="/" class="text-white hover:underline"> Sign In </RouterLink>
      </div>
    </div>
  </div>
</template>
