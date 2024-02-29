<script setup lang="ts">
import { RouterView } from 'vue-router'
import RightAside from './components/RightAside.vue';
</script>

<template>
  <RightAside />
  <main>
    <RouterView />
  </main>
</template>
<style>
    @import './style.css';
</style>