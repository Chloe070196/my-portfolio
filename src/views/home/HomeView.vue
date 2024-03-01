<script setup lang="ts">
import { inject } from 'vue';
const { global: { t } } = inject('i18n')
</script>

<template>
  <section>
    <div class="dark-shadow-top"></div>
    <div class="shadow-top"></div>
    <h2>{{ t('welcome') }}</h2>
    <p>{{ t('aboutExp') }}</p>
    <p>{{ t('aboutMotivation') }}</p>
    <p>{{ t('aboutEmployeurPreference') }}</p>
    <p>*English as a Foreign Language</p>
  </section>
</template>

<style scoped>
section {
  padding: 32px;
  width: 560px;
}
</style>