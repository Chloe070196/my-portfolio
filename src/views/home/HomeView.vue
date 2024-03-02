<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { inject } from 'vue';
// @ts-ignore
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
    <RouterLink to="/contact" class="contact-link"><strong>{{ t('getInTouch') }}</strong></RouterLink>
  </section>
</template>

<style scoped>
section {
  padding: 32px;
  width: 560px;
  position: relative;
}
</style>