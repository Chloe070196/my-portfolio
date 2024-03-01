<script lang="ts" setup>
import AboutSection from './AboutSection.vue';
import StackSection from './StackSection.vue';
import NavBar from './NavBar.vue';
</script>
<template>
    <aside>
        <NavBar />
        <AboutSection />
        <StackSection />
    </aside>
</template>

<style>
    aside {
        position: fixed;
        right: 0;
        top: 0;
        margin: 8px 20px;
        width: 360px;
        height: 100vh;
    }
</style>


