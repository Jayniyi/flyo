<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import Productive from './components/Productive.vue';
</script>

<template>
  <div class="bg-Dark-blue">
    <Navbar />
    <RouterView />
    <Hero />
    <Productive />
  </div>
</template>
