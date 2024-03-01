<script setup lang="ts">
import { RouterView } from 'vue-router'
import RightAside from './components/RightAside.vue';
import { inject } from 'vue'
const i18n = inject('i18n')
const toggleLocale = () => {
  // @ts-ignore
  if (i18n.global.locale === 'en') {
    // @ts-ignore
    i18n.global.locale = 'fr'
    return
  }
  // @ts-ignore
  if (i18n.global.locale === 'fr') {
    // @ts-ignore
    i18n.global.locale = 'en'
  }
}
// @ts-ignore
const locale = i18n.global.locale
</script>


<template>
  <main>
    <RightAside />
    <RouterView />
    <div class="website-info">
      <p>Website created using Vue.js</p>
      <p>©Chloé Zermatten, March 2024</p>
    </div>
  </main>
  <button @click="toggleLocale">{{ locale }}</button>
</template>
<style>
@import './style.css';

.website-info {
  position: absolute;
  bottom: 20px;
  left: 0;
}

button {
  position: fixed;
  top: 20px;
  left: 20px;
  color: rgb(53, 24, 87);
  width: 30px;
  height: 26px;
  font-weight: bold;
  background-color: rgb(255, 255, 205);
  border: 0;
  z-index: 10;
}
</style>