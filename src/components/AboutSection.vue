<script lang="ts" setup>
import { inject } from 'vue';
// @ts-ignore
const { global: { t } } = inject('i18n')
</script>
<template>
    <section id="about-section">
        <h1>Chloé Zermatten</h1>
        <h2>{{ t('softDev') }}</h2>
        <p>{{ t('aboutJobPreference') }}</p>
        <p>{{ t('based') }}</p>
        <p>{{ t('proficiency') }}</p>
        <a class="linkedInLink" href="https://linkedin.com/in/chloé-z-77b1a2184"><strong>LinkedIn profile</strong></a>
        <RouterLink class="contact-link" to="/contact"><strong>{{ t('getInTouch') }}</strong></RouterLink>
    </section>
</template>
<style scoped>
section {
    padding-left: 20px;
    height: 320px;
    position: relative;
}
.linkedInLink {
    position: absolute;
    left: 12px;
    width: 120px;
    text-decoration: underline;
}
</style>
