<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section id="navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
    </section>
</template>

<style scope>
    section {
        padding: 12px 0;
        margin: 0;
    }
</style>
