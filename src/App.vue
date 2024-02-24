<script setup lang="ts">
import { RouterView } from 'vue-router'
import  RightAside from './components/RightAside.vue';
</script>

<template>
  <header>
    <div class="wrapper">
        <RightAside />
    </div>
  </header>
  <RouterView />
</template>
