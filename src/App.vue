<script setup lang="ts">
import { RouterView } from 'vue-router'
import RightAside from './components/RightAside.vue';
import ToggleLocale from './components/ToggleLocale.vue';
import NavBar from './components/NavBar.vue';
</script>


<template>
  <main>
    <NavBar />
    <RightAside />
    <RouterView />
    <div class="website-info">
      <p>Website created using Vue.js</p>
      <p>©Chloé Zermatten, March 2024</p>
    </div>
    <ToggleLocale />
  </main>
</template>
<style>
@import './style.css';

.website-info {
  position: absolute;
  bottom: 20px;
  left: 0;
}
</style>