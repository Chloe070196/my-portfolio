<script lang="ts" setup>
import AboutSection from './AboutSection.vue';
import StackSection from './StackSection.vue';
</script>
<template>
    <aside>
        <AboutSection />
        <StackSection />
    </aside>
</template>

<style>
    aside {
        position: fixed;
        right: 0;
        top: 0;
        margin: 0 20px;
        width: 360px;
        height: 100vh;
        border-left: 2px solid rgba(255, 255, 255, 0.521);
        background: linear-gradient(0.25turn,rgba(255, 255, 255, 0.15),rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02),rgba(255, 255, 255, 0.015),rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0));
    }
</style>


s