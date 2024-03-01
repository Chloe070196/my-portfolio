<script lang="ts" setup>
import { inject } from 'vue';
const { global: { t } } = inject('i18n')
</script>
<template>
    <section>
        <h1>Chloé Zermatten</h1>
        <h2>{{ t('softDev') }}</h2>
        <p>{{ t('aboutJobPreference') }}</p>
        <p>{{ t('based') }}</p>
        <p>{{ t('proficiency') }}</p>
    </section>
</template>
<style scoped>
section {
    padding-left: 20px;
    height: 260px;
}
</style>
