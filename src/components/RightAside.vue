<script lang="ts" setup>
import AboutSection from './AboutSection.vue';
import NavBar from './NavBar.vue';
</script>
<template>
    <aside>
        <AboutSection />
        <NavBar />
    </aside>
</template>

<style scoped>
    aside {
        position: fixed;
        right: 0;
        top: 0;
        margin: 20px;
        width: 200px;
    }
</style>